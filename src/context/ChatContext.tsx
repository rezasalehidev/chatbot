import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { ChatContextType, ApiMessage } from "@/types";
import { useMessages } from "@/hooks/useMessages";
import { sendMessage } from "@/services/api";

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const { messages, addMessage, clearMessages } = useMessages();
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendUserMessage = useCallback(
    async (content: string): Promise<void> => {
      if (!content.trim()) return;

      setError(null);
      addMessage("user", content);
      setIsTyping(true);

      try {
        const conversationHistory: ApiMessage[] = [
          ...messages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
          {
            role: "user" as const,
            content,
          },
        ];

        const response = await sendMessage(conversationHistory);

        if (response?.choices?.[0]?.message?.content) {
          const assistantMessage = response.choices[0].message.content;
          addMessage("assistant", assistantMessage);
        } else {
          throw new Error("پاسخ نامعتبر از سرور");
        }
      } catch (err) {
        console.error("Error sending message:", err);
        const errorMessage =
          err instanceof Error
            ? err.message
            : "خطا در ارسال پیام. لطفاً دوباره تلاش کنید.";
        setError(errorMessage);
      } finally {
        setIsTyping(false);
      }
    },
    [messages, addMessage]
  );

  const value: ChatContextType = {
    messages,
    isTyping,
    error,
    sendUserMessage,
    clearMessages,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};
