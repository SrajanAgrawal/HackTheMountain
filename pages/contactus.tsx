import Head from 'next/head';
import Link from 'next/link'; // Import the Link component

const Contact = () => {
    return (
        <div>
            <Head>
                <title>Contact Us - Geeklancer</title>
            </Head>
           
            <main className="bg-blue-500 py-10">
                <div className="container mx-auto w-96">
                    <section className="bg-white p-8 rounded-lg shadow-lg">
                        <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-600">Name</label>
                                <input type="text" className="w-full p-2 border rounded" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-600">Email</label>
                                <input type="email" className="w-full p-2 border rounded" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-600">Message</label>
                                <textarea
                                    className="w-full p-2 border rounded"
                                    rows="4"
                                    placeholder="Your message here"
                                    required
                                ></textarea>
                            </div>
                            <button className="bg-black text-white py-2 px-4 rounded hover:bg-blue-700" type="submit">Submit</button>
                        </form>
                    </section>
                </div>
            </main>
            
        </div>
    );
};

export default Contact;
