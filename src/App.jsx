import React from "react";
import { Routes, Route } from "react-router-dom";
import { ClerkLoading, ClerkLoaded } from '@clerk/clerk-react'
import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import BotRoom from "@/pages/BotRoom";
import NotFound from "@/pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <ClerkLoading>
        <main className="h-dvh w-full flex items-center justify-center flex-col">
          <h1 className="text-[1.5vw]">
            Initializing the Application
          </h1>
          <p className="text-[1vw] pb-5 pt-1">Please wait...</p>
          <div className="w-10 h-10 border-4 border-t-indigo-500 border-gray-300 rounded-full animate-spin"></div>
        </main>
      </ClerkLoading>

      <ClerkLoaded>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bot/:topic" element={<ProtectedRoute><BotRoom /></ProtectedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ClerkLoaded>
    </>
  )
}

export default App
