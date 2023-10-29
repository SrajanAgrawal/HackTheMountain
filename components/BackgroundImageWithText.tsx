// components/BackgroundImageWithText.js

const BackgroundImageWithText = ({ imageUrl, heading, paragraph }) => {
    return (
      <div
        className="relative bg-cover bg-center h-64 md:h-96"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-5">{heading}</h2>
          <p className="text-lg md:text-xl">{paragraph}</p>
        </div>
      </div>
    );
  };
  
  export default BackgroundImageWithText;
  