import React from 'react';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const router = useRouter();
  const { user } = router.query;
  const userDetails = JSON.parse(user)
  // function calculateProfileStrength(user: { name: any; designation: any; college: any; skills: any; jobsApplied: any; }) {
  //   const { name, designation, college, skills, jobsApplied } = user;
  //   const totalFields = [name, designation, college, skills, jobsApplied].filter(Boolean).length;
  //   return (totalFields / 5) * 100;
  // }

  // const profileStrength = calculateProfileStrength(userData);

  return (
    <div className="bg-gray-200 p-8 rounded-lg shadow-md max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">User Dashboard</h2>
      <div className="mb-4">
        <strong>Name:</strong> {userDetails.first_name} {userDetails.last_name}
      </div>
      <div className="mb-4">
        <strong>Email:</strong> {user.email}
      </div>
      <div className="mb-4">
        <strong>Skills:</strong> 
      </div>
      <div className="mb-4">
        <strong>Contact Number:</strong>
      </div>
      <div className="mb-4">
        <strong>Address:</strong> 
      </div>
      {/* Add other relevant information */}
    </div>
  );
};

export default Dashboard;
