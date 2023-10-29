import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate, faUserTie } from "@fortawesome/free-solid-svg-icons";

function Registration() {
  const [registrationType, setRegistrationType] = useState(null);
  const [error, setError] = useState(null);

  const handleRegistration = (type:any) => {
    setRegistrationType(type);
  };

  return (
    <div className="bg-black flex items-center justify-center h-screen">
      <div className="bg-white py-4 px-10 rounded shadow-lg  w-[44rem]">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          REGISTER YOUR ACCOUNT
        </h1>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="mb-6 text-center">
          <label className="block text-xl font-semibold mb-2">
            Select Registration Type:
          </label>
          <div className="flex items-center justify-center">
            <div className="m-2">
              <div
                className={`p-4 cursor-pointer border rounded-lg flex flex-col items-center justify-center ${
                  registrationType === "freelancer"
                    ? "bg-zinc-400"
                    : "bg-gray-500"
                }`}
                onClick={() => handleRegistration("freelancer")}
              >
                <FontAwesomeIcon icon={faUserTie} size="2x" className="mb-2" />
                <span>Register as Freelancer</span>
                <span>Hiring For A Project</span>
              </div>
            </div>
            <div className="m-2">
              <div
                className={`p-4 cursor-pointer border rounded-lg flex flex-col items-center justify-center ${
                  registrationType === "student" ? "bg-zinc-400" : "bg-gray-500"
                }`}
                onClick={() => handleRegistration("student")}
              >
                <FontAwesomeIcon
                  icon={faUserGraduate}
                  size="2x"
                  className="mb-2"
                />
                <span>Register as Student</span>
                <span>Looking For A Work</span>
              </div>
            </div>
          </div>
        </div>
        <button
          className="bg-indigo-600 text-white py-2 px-4 rounded-full w-full"
          onClick={handleRegistration}
        >
          REGISTER
        </button>
        <div className="mt-4 text-center">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registration;