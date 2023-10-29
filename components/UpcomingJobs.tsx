import React, { useState } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import JobCard from "./JobCard"; // Import the JobCard component

// Sample job data
const jobs = [
    { title: "Job 1", description: "Description for Job 1" },
    { title: "Job 2", description: "Description for Job 2" },
    { title: "Job 3", description: "Description for Job 3" },
    { title: "Job 1", description: "Description for Job 1" },
    { title: "Job 2", description: "Description for Job 2" },
    { title: "Job 3", description: "Description for Job 3" },
    // Add more job data
];

function UpcomingJobs() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredJobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearchTerm(e.target.value);
    };

    const NextArrow = (props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
        <button {...props} className="slick-next">
            <FontAwesomeIcon icon={faArrowRight} />
        </button>
    );

    const PrevArrow = (props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
        <button {...props} className="slick-prev">
            <FontAwesomeIcon icon={faArrowLeft} />
        </button>
    );

    const sliderSettings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <div className="container mx-auto">
            <div className="container mx-auto p-4 bg-black text-white flex flex-col">
                <h1 className="text-2xl font-semibold mb-4 text-center">
                    Upcoming Jobs Near You
                </h1>

                <div className="mb-4 flex justify-center">
                    <input
                        type="text"
                        placeholder="Search for jobs..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="w-64 border border-gray-300 rounded-lg p-2"
                    />
                </div>
            </div>

            <div className="container mx-auto p-4 bg-white text-black flex overflow-hidden">
                <Slider {...sliderSettings} className="mb-4">
                    {filteredJobs.map((job, index) => (
                        <JobCard key={index} title={job.title} description={job.description} />
                    ))}
                </Slider>
            </div>

        </div>
    );
}

export default UpcomingJobs;