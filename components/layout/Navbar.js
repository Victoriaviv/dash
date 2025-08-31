import { useState } from "react";
import { Menu,Search, Settings, Bell, Globe, User } from "lucide-react";

export default function Navbar({ isOpen, toggleSidebar }) {
  const [showLang, setShowLang] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [selectedLang, setSelectedLang] = useState({ code: "en", name: "English", flag: "🇺🇸" });

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "French", flag: "🇫🇷" },
    { code: "rw", name: "Kinyarwanda", flag: "🇷🇼" },
  ];

  return (
    <header className="h-14 bg-white shadow flex items-center justify-between px-4 relative">
      
      <div className="flex items-center space-x-4">
        <button
          className="p-2 hover:bg-gray-100 rounded"
          onClick={toggleSidebar}
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-8 pr-2 py-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

 
      <div className="flex items-center space-x-4 relative">
       
        <div className="relative">
          <button
            className="flex items-center space-x-1 p-2 hover:bg-gray-100 rounded"
            onClick={() => setShowLang(!showLang)}
          >
            <span>{selectedLang.flag}</span>
          </button>
          {showLang && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50">
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2"
                  onClick={() => {
                    setSelectedLang(lang);
                    setShowLang(false);
                  }}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <button className="p-2 hover:bg-gray-100 rounded">
          <Settings className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <Bell className="w-5 h-5" />
        </button>

        {/* User dropdown */}
        <div className="relative">
          <div
            className="p-2 rounded hover:bg-gray-100 cursor-pointer"
            onClick={() => setShowUser(!showUser)}
          >
            <User className="w-6 h-6" />
          </div>
          {showUser && (
            <div className="absolute right-0 mt-2 w-36 bg-white border rounded shadow-lg z-50">
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Profile
              </div>
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
