import { Moon, Sun, Trash2 } from "lucide-react";
import { useChat } from "@/context/ChatContext";
import { Theme } from "@/types";

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Header = ({ theme, toggleTheme }: HeaderProps) => {
  const { clearMessages, messages } = useChat();

  const handleClearChat = () => {
    if (messages.length > 0) {
      if (
        window.confirm("آیا مطمئن هستید که می‌خواهید تمام پیام‌ها را پاک کنید؟")
      ) {
        clearMessages();
      }
    }
  };

  return (
    <header className="bg-white dark:bg-gray-800 rounded-t-2xl shadow-lg p-4 md:p-6 transition-theme">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md">
            <span className="text-white text-xl md:text-2xl font-bold">AI</span>
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white">
              چت‌بات فارسی
            </h1>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
              AIAhura Chat Lite
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleClearChat}
            disabled={messages.length === 0}
            className="p-2 md:p-2.5 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="پاک کردن چت"
            aria-label="پاک کردن چت"
          >
            <Trash2 className="w-4 h-4 md:w-5 md:h-5 text-gray-700 dark:text-gray-300" />
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 md:p-2.5 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            title={theme === "light" ? "حالت تاریک" : "حالت روشن"}
            aria-label={theme === "light" ? "حالت تاریک" : "حالت روشن"}
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
            ) : (
              <Sun className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
