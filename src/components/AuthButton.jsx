import React from 'react'
import { SignUpButton } from '@clerk/clerk-react';

const AuthButton = ({ name }) => {

  return (
    <SignUpButton mode="modal">
      <button className="relative inline-flex h-10 active:scale-95 transition overflow-hidden rounded-lg p-[1.5px] focus:outline-none cursor-pointer">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]" />
        <span className="inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2">
          {name}
        </span>
      </button>
    </SignUpButton>
  )
};

export default AuthButton
