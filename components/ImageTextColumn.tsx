// components/ImageTextColumn.js
import Image from 'next/image'

const ImageTextColumn = ({ imageUrl, heading, paragraph }) => {
    return (
        <div className="flex flex-col md:flex-row md:items-center py-8 px-8" id="about">
            <div className="md:w-1/3 flex justify-center">

                <Image
                    src="/images/overview.png"
                    width={400}
                    height={200}
                    alt="Your Image"
                    className=" h-auto object-cover"

                />
            </div>
            <div className="md:w-2/3 px-4 flex flex-col justify-center">
                <h2 className="text-2xl font-semibold mb-4">{heading}</h2>
                <p className="text-sm">{paragraph}</p>
            </div>
        </div>
    );
};

export default ImageTextColumn;
