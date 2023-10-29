import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { faUserGraduate, faUserTie } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Router, { useRouter } from "next/router";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [registrationType, setRegistrationType] = useState(null);
  
  const router = useRouter();
  const handleRegistration = (type:any) => {
    setRegistrationType(type);
  };

  const handleLogin = () => {
    const formData = {
      username:username,
      password:password
    }
    // Add your login logic here
    // Example: Check if the username and password are correct
    if (registrationType == 'freelancer'){
      axios.post('http://localhost:8000/accounts/lancerlogin/',formData)
      .then(response => {
        router.push({
          pathname: '/dashboard',
          query: { user: JSON.stringify(response.data)}
        });
        if (response.data['message'] == 'success'){
          setError('');
          console.log(response.data)
        }else{
          setError(response.data['message'])
        }
      })
      .catch(error => {
        console.error('Error: ',error);
      });
    }else if(registrationType == 'student'){
      axios.post('http://localhost:8000/accounts/userlogin/',formData)
      .then(response => {
        console.log(response)
        if (response.data['message'] == 'success'){
          setError('');
          console.log(response.data)
        }else{
          setError(response.data['message'])
        }
      })
      .catch(error => {
        console.error('Error: ',error);
      });
    }
  };

  return (
    <div className="bg-black flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-semibold mb-4 text-center">SIGN IN TO YOUR ACCOUNT</h1>
        <div className="mb-2 text-center">
          <div className="flex items-center justify-center">
            <div className="m-2">
              <div
                className={`p-2 cursor-pointer border rounded-lg flex items-center justify-center ${
                  registrationType === "freelancer"
                    ? "bg-blue"
                    : "bg-gray-500"
                }`}
                onClick={() => handleRegistration("freelancer")}
              >
                <div>
                  <FontAwesomeIcon icon={faUserTie}  className="text-lg" />
                  <span className="p-1">Lancer</span>
                </div>
              </div>
            </div>
            <div className="m-2">
              <div
                className={`p-2 cursor-pointer border rounded-lg flex items-center justify-center ${
                  registrationType === "student" ? "bg-zinc-400" : "bg-gray-500"
                }`}
                onClick={() => handleRegistration("student")}
              >
                <div>
                  <FontAwesomeIcon icon={faUserGraduate} className="text-lg" />
                  <span className="p-1">Geek</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center border rounded">
            <div className="pl-3">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <input
              type="email"
              placeholder="E-mail"
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
        {error && <div className="text-red-500 mb-4">{error}</div>}
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
            <a href="/signup" className="text-blue-500 hover:underline">
              Create one here.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;