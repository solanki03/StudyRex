import React from 'react'
import { Link } from 'react-router-dom'
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import AuthButton from '@/components/AuthButton'

const Navbar = ({ className }) => {
    return (
        <nav className={`w-full h-16 flex items-center justify-between px-4 md:px-8 top-0 z-20 ${className}`}>
            <Link to="/">
                <h1 className='text-2xl md:text-3xl cursor-pointer font-Audiowide!'>StudyRex</h1>
            </Link>

            <SignedOut>
                <AuthButton name="Sign in" />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </nav>
    )
}

export default Navbar