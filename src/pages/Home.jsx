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
        {id: 1, icon: "ri-rocket-fill", title: "AI-Powered Study Assistant", description: "Get personalized study plans and resources tailored to your learning style." },
        {id: 2, icon: "", title: "", description: "" },
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
            <div className='h-dvh w-full flex flex-col items-center justify-center'>
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
            {/* 
            <article className='w-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8 px-6 sm:px-10 py-20 mb-10 md:mb-20'>
                <div className="w-4/6 rounded-lg bg-slate-950/60 ring-1 ring-slate-400 p-4 shadow-xs transition hover:bg-slate-800/60 sm:p-6">
                <div className="flex items-center gap-5">
                    <i className="ri-rocket-fill rounded-sm bg-indigo-600 p-2"></i>

                    <h3 className="mt-0.5 text-lg font-medium">
                        Lorem ipsum elit.
                    </h3>
                </div>

                    <p className="mt-3 line-clamp-3 text-sm/relaxed text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur
                        animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia
                        itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                        Molestias explicabo corporis voluptatem?
                    </p>
                </div>

                <div className="w-4/6 rounded-lg border border-slate-400 p-4 shadow-xs transition hover:bg-slate-800/40 sm:p-6">
                <div className="flex items-center gap-5">
                    <i className="ri-rocket-fill rounded-sm bg-indigo-600 p-2"></i>

                    <h3 className="mt-0.5 text-lg font-medium">
                        Lorem ipsum elit.
                    </h3>
                </div>

                    <p className="mt-3 line-clamp-3 text-sm/relaxed text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur
                        animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia
                        itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                        Molestias explicabo corporis voluptatem?
                    </p>
                </div>

                <div className="w-4/6 rounded-lg border border-slate-400 p-4 shadow-xs transition hover:bg-slate-800/40 sm:p-6">
                <div className="flex items-center gap-5">
                    <i className="ri-rocket-fill rounded-sm bg-indigo-600 p-2"></i>

                    <h3 className="mt-0.5 text-lg font-medium">
                        Lorem ipsum elit.
                    </h3>
                </div>

                    <p className="mt-3 line-clamp-3 text-sm/relaxed text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur
                        animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia
                        itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                        Molestias explicabo corporis voluptatem?
                    </p>
                </div>

                <div className="w-4/6 rounded-lg border border-slate-400 p-4 shadow-xs transition hover:bg-slate-800/40 sm:p-6">
                <div className="flex items-center gap-5">
                    <i className="ri-rocket-fill rounded-sm bg-indigo-600 p-2"></i>

                    <h3 className="mt-0.5 text-lg font-medium">
                        Lorem ipsum elit.
                    </h3>
                </div>

                    <p className="mt-3 line-clamp-3 text-sm/relaxed text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur
                        animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia
                        itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                        Molestias explicabo corporis voluptatem?
                    </p>
                </div>
            </article>
             */}

            {/* Footer */}
            <footer className="w-full flex flex-col justify-center items-center px-8 sm:px-15">
                <div className="container flex flex-wrap max-sm:justify-between justify-evenly items-center border-t border-gray-700 py-8">
                    {/* Branding */}
                    <div className="mb-6 md:mb-0">
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
                    {/*
                    <div>
                        <h3 className="text-base font-medium mb-2">Features</h3>
                        <div className="grid grid-cols-3 gap-6 text-xs md:text-sm text-gray-400">

                        </div>
                    </div>
                    */}

                    {/* Bots */}
                    <div>
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
                <Copyright/>

            </footer>
        </main>
    )
}

export default Home