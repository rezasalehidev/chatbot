export interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export interface ChatContextType {
  messages: Message[];
  isTyping: boolean;
  error: string | null;
  sendUserMessage: (content: string) => Promise<void>;
  clearMessages: () => void;
}

export interface ApiMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export interface ApiResponse {
  choices: Array<{
    message: {
      role: string;
      content: string;
    };
  }>;
}

export interface ApiError {
  message: string;
  status?: number;
}

export type Theme = "light" | "dark";
