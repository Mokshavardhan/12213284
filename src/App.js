import React, { useState } from 'react';
import './App.css'; // Assuming you'll add CSS in a separate file

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [shortCode, setShortCode] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate shortening logic (in a real app, this would call an API)
    const generatedCode = shortCode || Math.random().toString(36).substr(2, 5);
    setShortenedUrl(`http://localhost:3000/${generatedCode}`);
  };

  return (
    <div className="app">
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder="Enter long URL"
        />
        <input
          type="text"
          value={shortCode}
          onChange={(e) => setShortCode(e.target.value)}
          placeholder="Custom shortcode (optional)"
        />
        <button type="submit">Shorten</button>
      </form>
      {shortenedUrl && (
        <p>Shortened URL: <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">{shortenedUrl}</a></p>
      )}
    </div>
  );
}

export default App;