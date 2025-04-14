import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/clerk-react'
import Navbar from '@/components/Navbar'
import Copyright from '@/components/Copyright'
import AuthButton from '@/components/AuthButton'

const botInfo = [
  { id: 1, name: "Engineering", describtion: "Dive into complex engineering concepts with AI-powered explanations, problem-solving assistance, and tailored study materials." },
  { id: 2, name: "Computer Science", describtion: "Master coding, algorithms, and software development with an AI tutor that adapts to your programming style and learning pace." },
  { id: 3, name: "Biology", describtion: "Explore the intricacies of life sciences with AI-generated summaries and detailed explanations of biological processes." },
  { id: 4, name: "History", describtion: "Uncover historical events and figures with AI-driven timelines, contextual analysis, and engaging historical narratives." },
  { id: 5, name: "Geography", describtion: "Navigate the world with geographical data analysis, and AI-powered insights into global landscapes and cultures." },
  { id: 6, name: "Economics", describtion: "Grasp economic principles and market trends with AI-generated models, financial analysis, and real-world economic simulations." },
  { id: 7, name: "Psychology", describtion: "Delve into the human mind with AI-generated case studies, psychological theories, and interactive explorations of human behavior." },
  { id: 8, name: "Literature", describtion: "Analyze literary works with AI-powered character analysis, thematic interpretations, and in-depth explorations of literary styles." },
];

const Dashboard = () => {
  const navigate = useNavigate()
  const [showSignInModal, setShowSignInModal] = useState(false);
  const { isSignedIn } = useUser();

  const handleGetStarted = () => {
    if (isSignedIn) {
      navigate('/bot');
    } else {
      setShowSignInModal(true);
    }
  };

  return (
    <div className='w-full'>
      <Navbar className="sticky bg-black/80 backdrop-blur-sm transition-all duration-300 ease-in-out" />

      <div className='flex flex-col gap-5 items-center justify-center px-5 mt-5'>
        <h1 className='font-semibold text-2xl sm:text-4xl text-center block border-b-2 px-10 pb-4 border-slate-700'>
          <span className='text-slate-300'>Your StudyRex Subject Bots</span> <br />
          <span className='text-slate-400 text-sm!'>(StudyRex Dashboard is under development)</span>
        </h1>
        <div className='max-w-6xl mx-auto px-8'>
          {/* card */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10'>
            {botInfo.map((bot) => (
              <div key={bot.id} className="bg-slate-800/40 border border-slate-700 rounded-lg p-4 shadow-md transition hover:bg-slate-800/60 flex flex-col justify-between h-full min-h-[220px]">
                <div>
                  <div className="flex gap-4 items-center mb-4">
                    <i className="ri-bard-fill text-indigo-400 text-2xl"></i>
                    <h2 className="text-lg font-semibold text-slate-300">{bot.name}</h2>
                  </div>
                  <p className="text-sm text-gray-400">{bot.describtion}</p>
                </div>
                <div className="flex justify-end mt-4">
                  <button className="px-3 py-2 rounded-[9px] bg-indigo-700 hover:bg-indigo-800 font-medium border-none font-inherit text-center cursor-pointer" onClick={handleGetStarted} >
                    Start Chat
                  </button>
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>
      <Copyright />
      {showSignInModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="p-6 rounded-xl shadow-lg max-w-md w-full relative bg-black ring-1 ring-indigo-300">
            <button className="absolute top-2 right-3 text-gray-300 cursor-pointer" onClick={() => setShowSignInModal(false)}>
              ✕
            </button>
            <div className='flex flex-col items-center justify-center text-center'>
              <h2 className="text-lg font-semibold mb-4">Please sign in to continue</h2>
              <SignedOut>
                <AuthButton name="Sign up" />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
            </div>

          </div>
        </div>
      )}


    </div>
  )
}

export default Dashboard