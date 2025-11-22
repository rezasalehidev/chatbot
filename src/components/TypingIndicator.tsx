import { Bot } from "lucide-react";

const TypingIndicator = () => {
  return (
    <div
      className="flex gap-3 message-enter"
      role="status"
      aria-label="در حال تایپ"
    >
      <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600">
        <Bot className="w-4 h-4 md:w-5 md:h-5 text-white" />
      </div>

      <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl rounded-tl-sm px-5 py-3 shadow-md">
        <div className="flex gap-1.5" aria-hidden="true">
          <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full typing-dot"></div>
          <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full typing-dot"></div>
          <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full typing-dot"></div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
