import React, { useEffect, useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client';

const socket = io(window.location.origin, {
  path: '/socket.io'
});

interface ApiResponse {
  message: string;
}

interface NotificationMessage {
  message: string;
}

function App(): React.ReactElement {
  const [message, setMessage] = useState<string>('');
  const [notification, setNotification] = useState<string>('');

  useEffect(() => {
    // Fetch hello message
    axios.get<ApiResponse>('/api/hello')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error('Error fetching message:', error));

    // Socket.io event listener
    socket.on('notification', (data: NotificationMessage) => {
      setNotification(data.message);
    });

    // Cleanup socket connection
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Express + React + WebSocket Demo</h1>
      
      <div style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
        <h2>API Message:</h2>
        <p>{message || 'Loading...'}</p>
      </div>

      <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
        <h2>Latest WebSocket Notification:</h2>
        <p>{notification || 'Waiting for notification...'}</p>
      </div>
    </div>
  );
}

export default App;
