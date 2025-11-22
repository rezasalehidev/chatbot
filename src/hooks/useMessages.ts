import { useState, useEffect, useCallback } from "react";
import { Message } from "@/types";
import { storage } from "@/utils/storage";

export const useMessages = () => {
  const [messages, setMessages] = useState<Message[]>(() =>
    storage.getMessages()
  );

  useEffect(() => {
    storage.setMessages(messages);
  }, [messages]);

  const addMessage = useCallback(
    (role: "user" | "assistant", content: string): Message => {
      const newMessage: Message = {
        id: Date.now(),
        role,
        content,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, newMessage]);
      return newMessage;
    },
    []
  );

  const clearMessages = useCallback(() => {
    setMessages([]);
    storage.clearMessages();
  }, []);

  return {
    messages,
    addMessage,
    clearMessages,
  };
};
