import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = () => {
    // Add your login logic here
    // Example: Check if the username and password are correct
    if (username === "exampleuser" && password === "password123") {
      // Successful login, you can redirect the user to another page
      console.log("Login successful");
    } else {
      // Failed login attempt, display an error message
    }
  };

  return (
    <div className="bg-black flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-semibold mb-4 text-center">SIGN IN TO YOUR ACCOUNT</h1>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="mb-4">
          <div className="flex items-center border rounded">
            <div className="pl-3">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full py-2 px-2 rounded-r"
            />
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-center border rounded">
            <div className="pl-3">
              <FontAwesomeIcon icon={faLock} />
            </div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-2 px-2 rounded-r"
            />
          </div>
        </div>
        <button
          style={{
            background: "blue",
            color: "white",
            padding: "8px 16px",
            borderRadius: "9999px",
            width: "100%",
          }}
          onClick={handleLogin}
        >
          SIGN IN
        </button>
        <div className="mt-4 text-center">
          <a href="#" className="text-blue-500 hover:underline">
            Forgot Your Password?
          </a>
        </div>
        <div className="mt-4 text-center">
          <p>
          Don&apos;t  have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Create one here.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;