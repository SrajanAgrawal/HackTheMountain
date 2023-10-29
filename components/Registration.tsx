import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate, faUserTie } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Registration() {
  const [registrationType, setRegistrationType] = useState(null);
  const [error, setError] = useState(null);

  // const handleRegistration = (type: any) => {
  //   setRegistrationType(type);
  // };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);


  const handleRegistration = () => {
    // Add your registration logic here
    if (!termsAccepted) {
      // setError("You must accept the terms and conditions.");
      return;
    }

    if (password !== confirmPassword) {
      // setError("Passwords do not match.");
      return;
    }

    // Registration successful, you can handle it here
    console.log("Registration successful");
  };


  return (
    <div className="bg-black flex items-center justify-center pt-12">
      <div className="bg-white py-4 px-10 rounded shadow-lg  w-[34rem]">
        
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="text-center">
          <div className="flex items-center justify-center">
            <div className="m-2 w-2/5">
              <div
                className={`p-2 cursor-pointer border rounded-lg flex items-center justify-center ${registrationType === "freelancer"
                  ? "bg-zinc-400"
                  : "bg-gray-500"
                  }`}
                onClick={() => handleRegistration("freelancer")}
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

        <div className="bg-black flex items-center justify-center h-screen">
          <div className="bg-white p-8 rounded shadow-lg w-[44rem]">
            <h1 className="text-2xl font-semibold mb-4 text-center">
              SIGN UP TO HIRE TALENT
            </h1>
            {error && <div className="text-red-500 mb-4">{error}</div>}
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
            <div className="mb-4">
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