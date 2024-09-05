import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebase";
import mainLogo from "../../public/assets/main-logo.png";
import "../css/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin");
    } catch (error) {
      setError("Failed to log in");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img
          src={mainLogo}
          alt=""
          className="logo"
          style={{ height: "50px", width: "100px" }}
        />
        <h2 className="login-title mt-1">Admin Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <input
              className="login-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="input-group">
            <input
              className="login-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
        {error && <p className="login-error">{error}</p>}
        <Link to="/" className="back-to-home-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Login;
