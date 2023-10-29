import React from "react";

interface JobCardProps {
  title: string;
  description: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, description }) => {
  return (
    <div className="p-4">
      <div className="bg-white text-black rounded-md shadow-md p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p>{description}</p>
        <button className="bg-black text-white hover-bg-gray-900 px-4 py-2 rounded-full mt-2">
          View Post ➔
        </button>
      </div>
    </div>
  );
};

export default JobCard;