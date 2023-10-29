import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate, faUserTie } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import axios from "axios";
import Router, { useRouter } from "next/router";

function Registration() {
  const [registrationType, setRegistrationType] = useState(null);
  const [error, setError] = useState('');

  const handleRegistrationType = (type: any) => {
    setRegistrationType(type);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const router = useRouter();

  const handleRegistration = () => {
    // Add your registration logic here
    if (!termsAccepted) {
      setError("You must accept the terms and conditions.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    const formData = {
      firstName:firstName,
      lastName:lastName,
      email:email,
      password:password
    }
    if (registrationType == 'freelancer'){
      axios.post('http://localhost:8000/accounts/lancerregister/',formData)
      .then(response => {
        router.push({
          pathname: '/dashboard',
          query: { user: JSON.stringify(response.data)}
        });
        console.log(response.data)
        if (response.data['message'] == "success"){
          setError('');
          console.log('scces');
          
        }else{
          setError(response.data['message'])
        }
      })
      .catch(error => {
        console.error('Error: ',error);
      });
    }else if(registrationType == 'student'){
      axios.post('http://localhost:8000/accounts/userregister/',formData)
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
    <div className="bg-black flex items-center justify-center pt-12">
      <div className=" py-4 px-10 rounded shadow-lg  w-[34rem]">
        <div className="text-center">
          <div className="flex items-center justify-center">
            <div className="m-2 w-2/5">
              <div
                className={`p-2 cursor-pointer border rounded-lg flex items-center justify-center ${registrationType === "freelancer"
                  ? "bg-zinc-400"
                  : "bg-gray-500"
                  }`}
                onClick={() => handleRegistrationType("freelancer")}
              >
                <div>
                  <FontAwesomeIcon icon={faUserTie} className="text-lg" />
                  <span className="p-1">Lancer</span>
                </div>
              </div>
            </div>
            <div className="m-2 w-2/5">
              <div
                className={`p-2 cursor-pointer border rounded-lg flex items-center justify-center ${registrationType === "student" ? "bg-zinc-400" : "bg-gray-500"
                  }`}
                onClick={() => handleRegistrationType("student")}
              >
                <div>
                  <FontAwesomeIcon icon={faUserGraduate} className="text-lg" />
                  <span className="p-1">Geek</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black text-black flex items-center justify-center h-screen">
          <div className="p-8 rounded shadow-lg w-[44rem]">
            <h1 className="text-2xl font-semibold mb-4 text-center">
              SIGN UP TO HIRE TALENT
            </h1>
            <div className="mb-4 flex">
              <div className="w-1/2 pr-2">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full py-2 px-3 rounded-lg border border-opacity-50"
                />
              </div>
              <div className="w-1/2 pl-2">
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full py-2 px-3 rounded-lg border border-opacity-50"
                />
              </div>
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-2 px-3 rounded-lg border border-opacity-50"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full py-2 px-3 rounded-lg border border-opacity-50"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full py-2 px-3 rounded-lg border border-opacity-50"
              />
            </div>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className="mb-4 text-white">
              <label className="block mb-2">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={() => setTermsAccepted(!termsAccepted)}
                  className="mr-2"
                />
                I accept the terms and conditions
              </label>
            </div>
            <button
              className="bg-sky-500 text-white py-2 px-6 rounded-full w-full"
              onClick={handleRegistration}
            >
              CREATE MY ACCOUNT
            </button>
            <div className="mt-4 text-center">
              <p>
                Already have an account?{" "}
                <Link href="/login" className="text-blue-500 hover:underline">
                  Sign in here.
                </Link>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Registration;