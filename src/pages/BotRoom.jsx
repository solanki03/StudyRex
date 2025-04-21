import React, { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import ReactMarkdown from 'react-markdown';
import { useUser } from '@clerk/clerk-react';
import Navbar from '@/components/Navbar'

const BotRoom = () => {
  const { user } = useUser();
  const username = user?.username || user?.firstName || "User";
  const { topic } = useParams();
  const formattedTopic = topic.toLowerCase();

  const [question, setQuestion] = useState("")
  const [messages, setMessages] = useState([]);
  const [hasSentPrompt, setHasSentPrompt] = useState(false);
  const chatRef = useRef(null);
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  // Load chat history or show greeting if new
  useEffect(() => {
    const storedChats = localStorage.getItem('studyrex-chat-history');
    if (storedChats) {
      const parsedChats = JSON.parse(storedChats);
      if (parsedChats[formattedTopic]) {
        setMessages(parsedChats[formattedTopic]);
        return;
      }
    }

    // No previous chat — show greeting from bot
    const greeting = {
      sender: 'bot',
      text: `Hello, ${username}! Welcome to your ${topic} bot room.`
    };
    setMessages([greeting]);
  }, [formattedTopic, username, topic]);

  // Scroll to the bottom of chat when new messages arrive
  useEffect(() => {
    const timeout = setTimeout(() => {
      chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' });
    }, 100);
    return () => clearTimeout(timeout);
  }, [messages, question]);

  // Save chat history to localStorage whenever messages change
  const saveChatToLocalStorage = (updatedMessages) => {
    const stored = localStorage.getItem('studyrex-chat-history');
    const parsed = stored ? JSON.parse(stored) : {};
    parsed[formattedTopic] = updatedMessages;
    localStorage.setItem('studyrex-chat-history', JSON.stringify(parsed));
  };

  // Handle Enter key for sending messages
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      generateResponse();
    }
  };

  // Generate response from bot
  async function generateResponse() {
    if (!question.trim()) return;

    const userMessage = { text: question, sender: 'user' };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setQuestion('');
    setMessages(prev => [...prev, { text: 'Loading...', sender: 'bot' }]);

    try {
      const hiddenPrompt = `
        You are a highly knowledgeable tutor strictly focused on the subject of ${formattedTopic}.
        Never answer questions unrelated to ${formattedTopic}. If a question is off-topic, say:
        "I'm a subject-specific bot and can only answer questions related to ${formattedTopic}."
        Do not mention that you're an AI or language model. Just act like a dedicated tutor.
        If you don't know the answer, say "I don't know." Be friendly, concise, and helpful.
        Only use clear and direct responses. No filler, no repetition, no technical disclaimers.
      `.trim();

      const parts = [];

      if (!hasSentPrompt) {
        parts.push({ text: hiddenPrompt });
        setHasSentPrompt(true);
      }

      parts.push({ text: question });

      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        method: 'POST',
        data: {
          contents: [{ parts }],
        }
      });

      const answer = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || `Sorry, I couldn't get that.`;
      const newMessages = [...updatedMessages, { text: answer, sender: 'bot' }];
      setMessages(newMessages);
      saveChatToLocalStorage(newMessages);

    } catch (err) {
      setMessages(prev => [...prev.slice(0, -1), {
        text: 'Something went wrong. Please try again.',
        sender: 'bot'
      }]);
    }
  }

  return (
    <div className="flex flex-col h-dvh">
      <Navbar className="sticky top-0 z-50 bg-black text-white" />

      <div className="flex flex-1 justify-around overflow-hidden">
        <div className="flex-1 flex flex-col mx- md:mx-10 overflow-hidden relative max-w-7xl">
          <div className="px-4 py-3 lg:p-6">
            <h1 className="text-xl lg:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-400">
              Hello, {username}! Welcome to your {topic} bot room.
            </h1>
          </div>

          <div className="flex-1 flex flex-col justify-between overflow-y-auto bg-[#0f0f0f] p-4 mb-22 rounded-t-2xl">
            <div ref={chatRef} className="flex-1 p-4 space-y-4 bg-[#1a1a1a] rounded-xl mb-1 overflow-y-scroll">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex text-sm md:text-base ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`px-4 py-2 max-w-lg text-white ${msg.sender === 'user' ? 'bg-slate-700 ml-5 rounded-l-xl rounded-br-xl' : 'bg-indigo-600 mr-5 rounded-r-xl rounded-bl-xl'}`}>
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 absolute bottom-0 z-10 w-full bg-[#0f0f0f] p-4">
            <label htmlFor="pdf-upload" className="cursor-pointer text-gray-400 hover:text-white">
              <i className="ri-attachment-2 text-2xl"></i>
            </label>
            <input id="pdf-upload" type="file" className="hidden" accept="application/pdf" />

            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={handleKeyDown}
              rows="3"
              placeholder="Type your message here..."
              className="flex-1 bg-[#2a2a2a] text-white text-sm md:text-base px-4 py-2 mx-4 rounded-lg resize-none outline-none"
            ></textarea>

            <button className="text-indigo-500 hover:text-indigo-600 text-2xl mr-4" onClick={generateResponse}>
              <i className="ri-send-plane-2-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BotRoom
