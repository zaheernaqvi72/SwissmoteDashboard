import { useEffect, useState } from 'react';
import { api } from '../services/api';

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    api.getMessages().then(response => setMessages(response.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Messages</h1>
      <ul>
        {messages.map((message, idx) => (
          <li key={idx} className="p-2 bg-gray-100 rounded mb-2">{message.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
