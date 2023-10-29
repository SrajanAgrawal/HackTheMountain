import Link from "next/link";
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faCircleStop,
    faPlus
} from "@fortawesome/free-solid-svg-icons";


export default function Navbar() {
    return (
        <>
            <div className="flex justify-between mt-1 bg-black text-white">
                <div id="left_nav">
                    {/* include unsplash api for logo */}
                    <Link href="/" className="hover:underline">

                        <Image
                            src="/images/logo.png"
                            width={150}
                            height={100}
                            alt="Geeklance"
                        />
                    </Link>
                </div>
                <div id="mid_nav" className="flex justify-between w-96 items-center">
                    <Link href="/#about" className="hover:underline">
                        About Us
                    </Link>
                    <Link href="/pricing" className="hover:underline">
                        Pricing
                    </Link>
                    <Link href="/submit" className="hover:underline">
                        Sell Project
                    </Link>
                    <Link href="/contactus" className="hover:underline">
                        Contact Us
                    </Link>
                </div>
                <div id="right_nav" className="flex justify-between items-center pr-2" style={{ width: '26rem'}}>
                    <div className="search flex items-center">
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 mr-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:outline px-2" type="text" name="search" id="search" placeholder="what you are searching?" />

                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                    <Link href="/login" className="hover:underline">Login</Link>
                    <Link href="/signup" className="text-black bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:underline">Submit Post {"  "}
                    <FontAwesomeIcon icon={faPlus} />

                    </Link>

                </div>
            </div>


        </>
    )
}   // End of Navbar()