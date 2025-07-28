import { Home, MessageSquare, ListMusic, Search } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { value: "home", label: "Home", icon: <Home className="w-5 h-5" /> },
    {
      value: "message",
      label: "Message",
      icon: <MessageSquare className="w-5 h-5" />,
    },
    {
      value: "playlist",
      label: "Playlist",
      icon: <ListMusic className="w-5 h-5" />,
    },
    { value: "search", label: "Search", icon: <Search className="w-5 h-5" /> },
  ];

  const handleClick = (tabValue: any) => {
    setActiveTab(tabValue);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-black border-t border-gray-800 z-50">
      <div className="flex h-full justify-around items-center">
        {navItems.map((item) => {
          const isActive = item.value === activeTab;
          return (
            <button
              key={item.value}
              onClick={() => handleClick(item.value)}
              className="flex flex-col items-center justify-center focus:outline-none flex-1"
            >
              <div
                className={`transition-transform ${
                  isActive ? "text-white scale-110" : "text-gray-400"
                }`}
              >
                {item.icon}
              </div>
              <span
                className={`text-xs mt-1 ${
                  isActive ? "text-white" : "text-gray-400"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
