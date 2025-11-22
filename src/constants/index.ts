export const API_CONFIG = {
  URL: "/api/v1/chat/completions",
  KEY: "sk-e7d9ed96e3f246b7b78d339b056beadf",
  MODEL: "mistral-small3.2:24b",
  TIMEOUT: 30000,
} as const;

export const STORAGE_KEYS = {
  MESSAGES: "chatMessages",
  THEME: "theme",
} as const;

export const CHAT_SUGGESTIONS = [
  "سلام! چطور می‌تونم کمکت کنم؟",
  "درباره هوش مصنوعی بگو",
  "یک شعر فارسی بگو",
  "امروز چه خبر؟",
] as const;
