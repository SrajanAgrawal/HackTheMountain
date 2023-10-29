import Link from "next/link";
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faCircleStop
} from "@fortawesome/free-solid-svg-icons";
import BackgroundImageWithText from "./BackgroundImageWithText";
import UpcomingJobs from "./UpcomingJobs";
import ImageTextColumn from "./ImageTextColumn";


export default function Navbar() {
    return (
        <>
            <div id="hero_section" className="bg-black h-[600px] pt-12">
                <div className="flex items-center">
                    {/* Left Column */}
                    <div className="w-2/3 p-8">
                        <h1 className="text-7xl font-bold text-white mb-4">Geeklance</h1>
                        <h1 className="text-8xl font-bold text-white mb-4">Earn With Learn</h1>

                        <p className=" text-xl text-white mt-4">
                            Where Students Thrive. Learn, Earn,
                            Succeed. Your Path to Success Starts Here!
                        </p>
                    </div>

                    {/* Right Column (Image with Opacity) */}
                    <div className="w-1/3 pt-12">
                        <div className="bg-gray-900 opacity-50 h-96">
                            <Image
                                src="/images/heroImage.png"
                                width={400}
                                height={300}
                                alt="Your Image"
                            // className="h-full w-full object-cover"

                            />
                            {/* <Image
                        src="/images/logo.png"
                        width={150}
                        height={100}
                        alt="Geeklance"
                    /> */}
                        </div>
                    </div>
                </div>



            </div>
            <BackgroundImageWithText
                imageUrl="/images/about_image.png" // Replace with the URL of your background image
                heading="World's largest freelancing and
                crowdsourcing marketplace."
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specime"
            />

            <UpcomingJobs />

            <ImageTextColumn
                imageUrl="/images/overview.png" // Replace with the URL of your image
                heading="Company Overview"
                paragraph="Geeklance is the ultimate platform designed exclusively for college students. With over [Number of Users] users spanning [Number of Countries] countries, we've created a vibrant community where learning meets earning.
                Our mission is simple: to empower college students to leverage their skills, showcase their projects, and embark on exciting freelancing journeys. Geeklance bridges the gap between academia and the professional world, allowing students to turn their knowledge into income.
                At Geeklance, you can find a wide array of opportunities, from software development and creative writing to graphic design and engineering projects. It's a platform where learning becomes earning, and every project is a stepping stone toward a brighter future.
                What sets Geeklance apart is our commitment to education and professional growth. We provide resources, mentorship opportunities, and a supportive community that nurtures your ambitions.
                Geeklance is more than just a platform; it's a transformative experience. It's about embracing an entrepreneurial spirit, gaining practical experience, and connecting with like-minded peers. Join us today and unlock a world of endless possibilities. Your journey to success starts here with Geeklance.
                "
            />

        </>
    )
}   // End of Navbar()