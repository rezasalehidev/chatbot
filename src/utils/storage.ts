import { Message } from "@/types";
import { STORAGE_KEYS } from "@/constants";

export const storage = {
  getMessages: (): Message[] => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.MESSAGES);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Error reading messages from storage:", error);
      return [];
    }
  },

  setMessages: (messages: Message[]): void => {
    try {
      localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
    } catch (error) {
      console.error("Error saving messages to storage:", error);
    }
  },

  clearMessages: (): void => {
    try {
      localStorage.removeItem(STORAGE_KEYS.MESSAGES);
    } catch (error) {
      console.error("Error clearing messages from storage:", error);
    }
  },

  getTheme: (): "light" | "dark" => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.THEME);
      return (saved as "light" | "dark") || "light";
    } catch (error) {
      console.error("Error reading theme from storage:", error);
      return "light";
    }
  },

  setTheme: (theme: "light" | "dark"): void => {
    try {
      localStorage.setItem(STORAGE_KEYS.THEME, theme);
    } catch (error) {
      console.error("Error saving theme to storage:", error);
    }
  },
};
