import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const preSetUsername = "username";
  const presetPassword = "password";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === preSetUsername && password === presetPassword) {
        localStorage.setItem('user', JSON.stringify({ name: username }));
      navigate("/users");
    }
  };
  const handleLogout = ()=> {
    localStorage.removeItem('user');
    navigate('/');
  }
  if(localStorage.getItem('user')){
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      );
  }
  return (
    <div>
      Login
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="text"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
