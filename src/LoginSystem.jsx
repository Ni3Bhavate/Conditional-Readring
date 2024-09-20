import React, { useState } from 'react';

const LoginSystem = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome {username}</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <div>
            <label>
          Username:
             <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input 
       type="password" 
       value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        required 
              />
            </label>
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginSystem;
