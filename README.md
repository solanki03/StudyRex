# 📚 StudyRex

**StudyRex** is a modern, dark-mode, AI-powered study assistant web app that provides students with **subject-specific bots** to help them learn, revise, and get accurate answers in real time. Built with React.js, Tailwind CSS, Clerk, and the Google Gemini API, StudyRex supports 8 core subjects — each with a dedicated AI bot that only responds to questions related to its specific topic.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Vite, Tailwind CSS
- **Authentication:** Clerk
- **AI Integration:** Google Gemini API

---

## ✨ Features

- 🔒 **Protected Routes & Authentication:** Users must sign in through Clerk to access any subject bot. Direct access is blocked to ensure a secure experience.
- 💬 **AI Chat by Subject:** 8 dedicated bots — *Engineering, Computer Science, Biology, History, Geography, Economics, Psychology, and Literature* — each powered by a focused prompt to avoid off-topic responses.
- 💾 **Persistent Chat History:** All user messages and responses are saved using `localStorage`. Users can revisit past conversations for ongoing learning.
- 🌙 **Full Dark Mode UI:** A consistent dark theme across the platform, offering a visually soothing and immersive study experience.
- 🧠 **Smart Prompt Injection:** Each bot automatically receives a hidden prompt to act as an expert in its subject area — ensuring contextual, accurate responses only.

---

## 🎓 Supported Subjects

| Engineering        | Computer Science   | Biology           |History            |
|--------------------|--------------------|-------------------|-------------------|
| Geography          | Economics          | Psychology        |Literature         | 


---

## 📦 Pages Overview

1. **Home Page** – Intro screen with login access.
2. **Dashboard** – Displays all available subject bots. Acts as a navigation hub.
3. **Bot Chatroom** – The main chat interface per subject with real-time AI responses, persistent history, and message timestamps.

---

## 📁 Installation 

```bash
git clone https://github.com/yourusername/studyrex
cd studyrex
npm install
```

Create a .env file in the root with:
```bash
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
```

Run the project:
```bash
npm run dev
```

---

## 📬 Contact

Created with 💡 by [Solanki Singha](https://github.com/solanki03)  
Feedback or contributions are welcome!
