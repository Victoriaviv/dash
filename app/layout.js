"use client"
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <html lang="en">
      <body className="flex h-screen bg-gray-100">
        <Sidebar isOpen={isSidebarOpen} />
        <div className="flex-1 flex flex-col">
          <Navbar
            isOpen={isSidebarOpen}
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          />
          <main className="p-4 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
