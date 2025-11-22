# Persian Chatbot – AIAhura Chat Lite

A simple, modern, and responsive user interface for a Persian chatbot with full RTL support, dark/light theme, and the ability to send/receive messages from API.

## ✨ Features

- RTL and fully responsive user interface
- Send and receive messages from API
- Display message history + auto-scroll
- "Typing..." indicator
- Dark/Light theme
- Save messages in localStorage
- Error handling (network, invalid response, etc.)

## 📸 Screenshots

### Light Mode (Desktop)

![Desktop Light Mode](screenshots/desktop-light.png)

### Dark Mode (Desktop)

![Desktop Dark Mode](screenshots/desktop-dark.png)

### Mobile View

![Mobile View](screenshots/mobile.png)

## 🛠 Technologies

React 18 – TypeScript – Vite – TailwindCSS (RTL) – Axios – Context API

## 🚀 Quick Start

```bash
yarn install
yarn run dev
```

## 🔌 API

**URL:** https://chat.aiahura.com/api/v1/chat/completions  
**API Key:** sk-xxxx...  
**Model:** mistral-small3.2:24b

### Request Format

```json
{
  "model": "mistral-small3.2:24b",
  "messages": [{ "role": "user", "content": "سلام" }]
}
```

### Response Format

Read the response from the following path:

```
choices[0].message.content
```
