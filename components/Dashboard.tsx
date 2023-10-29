import React from 'react';

const Dashboard = () => {
  const userData = {
    name: 'John Doe',
    designation: 'Software Developer',
    college: 'Sample University',
    skills: ['React', 'Node.js', 'JavaScript'],
    jobsApplied: 5,
  };

  function calculateProfileStrength(user: { name: any; designation: any; college: any; skills: any; jobsApplied: any; }) {
    const { name, designation, college, skills, jobsApplied } = user;
    const totalFields = [name, designation, college, skills, jobsApplied].filter(Boolean).length;
    return (totalFields / 5) * 100;
  }

  const profileStrength = calculateProfileStrength(userData);

  return (
    <div className="bg-gray-100 p-4 rounded border border-gray-300">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:border-r md:pr-4">
          <div className="text-center md:text-left">
            <div className="bg-blue-500 rounded-full w-20 h-20 mx-auto md:mx-0 mb-2">
              {/* Add profile picture here */}
            </div>
            <h2 className="text-xl font-bold">{userData.name}</h2>
            <p className="text-gray-600">{userData.designation || userData.college}</p>
          </div>
          <div className="mt-4">
            <p className="font-semibold">Skills:</p>
            <ul className="list-disc list-inside">
              {userData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <p className="mt-4">Jobs Applied: {userData.jobsApplied}</p>
        </div>
        <div className="md:w-1/2 md:pl-4">
          <div className="text-center md:text-right">
            <p className="font-semibold">Profile Strength:</p>
            <div className="bg-gray-300 h-2 w-full rounded mt-2">
              <div className="bg-blue-500 h-2 rounded" style={{ width: `${profileStrength}%` }}></div>
            </div>
            <p className="mt-2">{Math.round(profileStrength)}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
