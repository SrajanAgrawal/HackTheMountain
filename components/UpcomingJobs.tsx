import React, { useState } from "react";
import JobCard from "./JobCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Sample job data
const jobs = [
    { title: "Job 1", description: "Description for Job 1" },
    { title: "Job 2", description: "Description for Job 2" },
    { title: "Job 3", description: "Description for Job 3" },
    { title: "Job 4", description: "Description for Job 4" },
    { title: "Job 5", description: "Description for Job 5" },
    { title: "Job 6", description: "Description for Job 6" },
    // Add more job data
];

function UpcomingJobs() {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerPage = 3;

    const filteredJobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearchTerm(e.target.value);
        setCurrentIndex(0); // Reset to the first page when searching
    };

    const handleNext = () => {
        if (currentIndex < filteredJobs.length - cardsPerPage) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const visibleJobs = filteredJobs.slice(currentIndex, currentIndex + cardsPerPage);

    return (
        <div className="bg-black py-8 text-white">
            <div className="container mx-auto">
                <h1 className="text-2xl font-semibold mb-4 text-center">
                    Upcoming Jobs Near You
                </h1>

                <div className="mb-4 flex justify-around">
                    <input
                        type="text"
                        placeholder="Search for jobs..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="w-64 border border-gray-300 rounded-lg p-2"
                    />
                </div>

                <div className="relative">
                    <div className="flex justify-around items-center">
                        <button
                            className={`slider-button prev ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>

                        <div className="flex flex-wrap slider">
                            {visibleJobs.map((job, index) => (
                                <div key={index} className="slider-item w-full md:w-1/2 lg:w-1/3 p-4">
                                    <JobCard title={job.title} description={job.description} />
                                </div>
                            ))}
                        </div>
                        <button
                            className={`slider - button next ${currentIndex >= filteredJobs.length - cardsPerPage ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={handleNext}
                            disabled={currentIndex >= filteredJobs.length - cardsPerPage}
                        >
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>

                </div>
            </div >
        </div >
    );
}

export default UpcomingJobs;