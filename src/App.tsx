import ChatContainer from "@/components/ChatContainer";
import Header from "@/components/Header";
import { ChatProvider } from "@/context/ChatContext";
import { useTheme } from "@/hooks/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ChatProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-theme">
        <div className="container mx-auto h-screen flex flex-col p-4 max-w-6xl">
          <Header theme={theme} toggleTheme={toggleTheme} />
          <ChatContainer />
        </div>
      </div>
    </ChatProvider>
  );
};

export default App;
