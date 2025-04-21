import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Aurora from '@/components/Aurora'
import Copyright from '@/components/Copyright'
import GetStartedButton from '@/components/GetStartedButton'

const Home = () => {
    const navigate = useNavigate()

    const handleGetStarted = () => {
        navigate('/dashboard');
    }

    const socialHandle = [
        { id: 1, icon: "ri-github-fill", link: "https://github.com/solanki03" },
        { id: 2, icon: "ri-linkedin-fill", link: "https://www.linkedin.com/in/solankisingha" },
        { id: 3, icon: "ri-twitter-x-fill", link: "https://x.com/solanki_singha" }
    ];

    const features = [
        { id: 1, icon: "ri-focus-3-line", title: "Subject-Specific Bots", description: "Each bot is trained to focus only on one academic subject (e.g., History, Engineering). Off-topic questions are politely declined to ensure relevance and depth." },
        { id: 2, icon: "ri-chat-1-fill", title: "Persistent Chat History", description: "All chat messages are saved in localStorage. Users can revisit a bot and instantly see their past questions and answers, enhancing continuity in learning." },
        { id: 3, icon: "ri-lock-password-fill", title: "Protected Access", description: "Users must authenticate through Clerk to access any chatbot. Bots are only accessible via the dashboard, preventing direct unauthorized access." },
        { id: 4, icon: "ri-moon-fill", title: "Clean, Dark Mode UI", description: "StudiVets features a fully dark-themed interface with smooth animations and visually appealing component design for a focused study experience." },
    ];

    const botFields = ["Engineering", "Computer Science", "Biology", "History", "Geography", "Economics", "Psychology", "Literature"];

    return (
        <main className='w-full relative'>
            <Aurora
                colorStops={["#FD588A", "#F1FD49", "#00CCFF"]}
                blend={0.5}
                amplitude={1.0}
                speed={0.6}
            />
            <div className='h-dvh w-full flex flex-col items-center justify-center mb-32'>
                <Navbar className={"bg-transparent absolute"} />

                {/* Hero Section */}
                <div className='flex flex-col items-center text-center text-white px-6 sm:px-10 mt-36 sm:mt-20'>
                    <h1 className='text-4xl md:text-5xl font-medium'>
                        Tired of Studying Harder, Not Smarter? <br />Meet{" "}
                        <span className='font-normal font-Audiowide!'>StudyRex</span>.
                    </h1>
                    <p className='text-sm md:text-lg mt-8 mb-8 text-gray-400 sm:text-base w-[85%] lg:w-1/2'>
                        Your AI-powered study assistant. We help you learn smarter, not harder, with personalized tools to ace your studies.
                        Unlock your full academic potential and say goodbye to wasted study time and hello to effective, efficient learning.
                    </p>

                    <GetStartedButton name="Let's get started" onClick={handleGetStarted} />
                </div>
            </div>

            {/* Features Section */}
            <h1 className='text-3xl md:text-5xl font-medium text-center mb-2'>Explore Features</h1>
            <article className='w-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8 px-6 sm:px-10 py-20 mb-10 md:mb-20'>
                {features.map((feature) => (
                <div key={feature.id} className="w-full md:w-5/6 xl:w-4/6 rounded-lg bg-slate-950/60 ring-1 ring-pink-400 p-4 shadow-xs transition hover:bg-slate-800/60 hover:ring-pink-600 sm:p-6">
                    <div className="flex items-center gap-5">
                        <i className={`${feature.icon} rounded-sm bg-pink-600 p-2`}></i>
                        <h3 className="mt-0.5 text-lg font-medium">{feature.title}</h3>
                    </div>
                    <p className="mt-3 text-sm/relaxed">{feature.description}</p>
                </div>
))}

            </article>

            {/* Footer */}
            <footer className="w-full flex flex-col justify-center items-center px-8 sm:px-15">
                <div className="container flex flex-wrap max-sm:justify-between justify-evenly items-center border-t border-gray-700 py-8">
                    {/* Branding */}
                    <div className="flex flex-col justify-items-start mb-4">
                        <h2 className="text-2xl md:text-3xl font-Audiowide!">StudyRex</h2>
                        <p className="text-gray-400 text-sm sm:text-base">Study Smarter, Not Harder.</p>

                        {/* Socials */}
                        <div className="mt-2 flex gap-4 text-lg md:text-2xl text-gray-400">
                            {socialHandle.map((social) => (
                                <a key={social.id} href={social.link} target="_blank" className="hover:text-white transition-colors" >
                                    <i className={social.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                        <h3 className="text-base font-medium mb-2">Features</h3>
                        <div className="flex flex-col text-xs md:text-sm text-gray-400">
                            {features.map((feature) => (
                                <p key={feature.id} className="space-y-1">{feature.title}</p>
                            ))}
                        </div>
                    </div>

                    {/* Bots */}
                    <div className="mb-2">
                        <h3 className="text-base font-medium mb-2">Explore Our Study Bots</h3>
                        <div className="grid grid-cols-2 gap-8 text-xs md:text-sm text-gray-400">
                            {[0, 4].map((startIndex) => (
                                <div key={startIndex} className="space-y-1">
                                    {botFields
                                        .slice(startIndex, startIndex + 4)
                                        .map((bot, index) => (
                                            <p key={index}>{bot}</p>
                                        ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright Section */}
                <Copyright />

            </footer>
        </main>
    )
}

export default Home