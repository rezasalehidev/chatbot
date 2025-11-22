import { useState, FormEvent, KeyboardEvent } from "react";
import { Send } from "lucide-react";
import { useChat } from "@/context/ChatContext";

const MessageInput = () => {
  const [input, setInput] = useState("");
  const { sendUserMessage, isTyping } = useChat();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() && !isTyping) {
      sendUserMessage(input.trim());
      setInput("");
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as FormEvent<HTMLFormElement>);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-gray-200 dark:border-gray-700 p-4 md:p-6"
    >
      <div className="flex gap-2 md:gap-3 flex-row-reverse">
        <button
          type="submit"
          disabled={!input.trim() || isTyping}
          className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-xl flex items-center justify-center transition-all shadow-lg hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="ارسال پیام"
        >
          <Send className="w-4 h-4 md:w-5 md:h-5" />
        </button>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="پیام خود را بنویسید..."
          disabled={isTyping}
          dir="rtl"
          className="flex-1 px-4 md:px-5 py-2.5 md:py-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base text-right"
          aria-label="ورودی پیام"
        />
      </div>

      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
        برای ارسال پیام، Enter را فشار دهید
      </p>
    </form>
  );
};

export default MessageInput;
