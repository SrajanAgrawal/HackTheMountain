import Link from "next/link";
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faCircleStop
} from "@fortawesome/free-solid-svg-icons";


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


        </>
    )
}   // End of Navbar()