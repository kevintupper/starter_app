import React, { useEffect, useState } from 'react';
import { Button } from './components/ui/button/Button';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Starter App</h1>
      <p className="mb-4">{message}</p>
      <Button variant="default">Default Button</Button>
    </div>
  );
}

export default App;
