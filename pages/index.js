import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
      setError('');
    } catch (err) {
      setError('Network error: ' + err.message);
      setResponse('');
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br /><br />
      <button onClick={handleLogin}>Login</button><br /><br />
      {response && <pre>{response}</pre>}
      {error && <pre style={{ color: 'red' }}>{error}</pre>}
    </div>
  );
        }
