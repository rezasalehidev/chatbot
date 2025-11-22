import { useChat } from "@/context/ChatContext";
import { useAutoScroll } from "@/hooks/useAutoScroll";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import TypingIndicator from "./TypingIndicator";
import ErrorMessage from "./ErrorMessage";
import EmptyState from "./EmptyState";

const ChatContainer = () => {
  const { messages, isTyping, error } = useChat();
  const scrollRef = useAutoScroll([messages, isTyping]);

  return (
    <div className="flex-1 bg-white dark:bg-gray-800 rounded-b-2xl shadow-lg flex flex-col overflow-hidden transition-theme">
      <div className="flex-1 overflow-y-auto chat-scrollbar p-4 md:p-6">
        {error && <ErrorMessage message={error} />}

        {messages.length === 0 ? (
          <EmptyState />
        ) : (
          <MessageList messages={messages} />
        )}

        {isTyping && <TypingIndicator />}
        <div ref={scrollRef} />
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatContainer;
