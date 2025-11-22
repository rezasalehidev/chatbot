import { User, Bot } from "lucide-react";
import { Message as MessageType } from "@/types";
import { formatTime } from "@/utils/formatTime";

interface MessageProps {
  message: MessageType;
}

const Message = ({ message }: MessageProps) => {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex gap-3 ${
        isUser ? "justify-end" : "justify-start"
      } message-enter`}
      role="article"
      aria-label={`پیام از ${isUser ? "کاربر" : "دستیار"}`}
    >
      <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
        <div
          className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ${
            isUser
              ? "bg-gradient-to-br from-blue-500 to-indigo-600"
              : "bg-gradient-to-br from-purple-500 to-pink-600"
          }`}
          aria-hidden="true"
        >
          {isUser ? (
            <User className="w-4 h-4 md:w-5 md:h-5 text-white" />
          ) : (
            <Bot className="w-4 h-4 md:w-5 md:h-5 text-white" />
          )}
        </div>

        <div
          className={`flex flex-col gap-1 max-w-[75%] md:max-w-[70%] ${
            isUser ? "items-end" : "items-start"
          }`}
        >
          <div
            className={`rounded-2xl px-4 py-2.5 md:px-5 md:py-3 ${
              isUser
                ? "bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-tr-sm"
                : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-tl-sm"
            } shadow-md`}
            dir="rtl"
          >
            <p className="text-sm md:text-base leading-relaxed  whitespace-nowrap text-right">
              {message.content}
            </p>
          </div>

          <time
            className={`text-xs text-gray-500 dark:text-gray-400 px-2`}
            dateTime={message.timestamp}
          >
            {formatTime(message.timestamp)}
          </time>
        </div>
      </div>
    </div>
  );
};

export default Message;
