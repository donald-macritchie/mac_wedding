import letter from "/images/letter.jpg";

const RSVP = () => {
  return (
    <div className="relative w-full h-full">
      {/* Background Section */}
      <div className="h-screen flex flex-col justify-center items-center text-center relative w-full">
        {/* Background Image with Gradient */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${letter})`,
          }}
        ></div>

        {/* Text Content with Semi-Transparent Background */}
        <div
          className="relative z-10 flex flex-col items-center text-center mb-20 p-6 max-w-[340px] w-full rounded-3xl text-[#A8D1AD] border-2 border-[#A8D1AD]"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          {/* Title */}
          <h1 className="text-3xl font-bold Montserrat mb-4">RSVP</h1>

          {/* Content */}
          <div className="text-lg">
            <p className="p-4">
              If you are coming along to help celebrate the big day, please let
              either Don or Ellie know by 1st April 2025.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
