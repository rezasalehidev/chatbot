import { Message as MessageType } from "@/types";
import Message from "./Message";

interface MessageListProps {
  messages: MessageType[];
}

const MessageList = ({ messages }: MessageListProps) => {
  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessageList;
