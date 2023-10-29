import Link from "next/link";
import Image from 'next/image'



export default function Footer() {
    return (
        <>
            <footer className="bg-black text-white py-8 px-12">
                <div className="container mx-auto flex flex-wrap justify-between">
                    <div className="w-full lg:w-1/4">
                        <h2 className="text-xl font-semibold">GeekLance</h2>
                        <ul className="mt-2">
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/pricing">Pricing</a></li>
                            <li><a href="/login">Login</a></li>
                            <li><a href="/signup">SignUp</a></li>
                            <li><a href="/submit-post">Submit Post</a></li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/4 mt-4 lg:mt-0 text-start">
                        <Image
                            src="/images/logo.png"
                            width={150}
                            height={100}
                            alt="Geeklance"
                        />
                        <p className="mt-2">Terms of Use & Privacy Policy</p>
                        <p className="mt-2">@2023 Team Paradise. All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </>
    )
}   // End of Navbar()


