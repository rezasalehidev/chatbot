import { MessageCircle, Sparkles } from "lucide-react";
import { CHAT_SUGGESTIONS } from "@/constants";
import { useChat } from "@/context/ChatContext";

const EmptyState = () => {
  const { sendUserMessage } = useChat();

  const handleSuggestionClick = (suggestion: string) => {
    sendUserMessage(suggestion);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full py-8 md:py-12">
      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-xl">
        <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
      </div>

      <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-2">
        به چت‌بات فارسی خوش آمدید
      </h2>

      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-6 md:mb-8 text-center px-4">
        برای شروع گفتگو، پیام خود را در کادر پایین بنویسید
      </p>

      <div className="w-full max-w-md px-4">
        <div className="flex items-center gap-2 mb-3 md:mb-4">
          <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
          <h3 className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300">
            پیشنهادهای گفتگو
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
          {CHAT_SUGGESTIONS.map((suggestion, index) => (
            <div
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="p-3 md:p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all cursor-pointer"
            >
              <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300">
                {suggestion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
