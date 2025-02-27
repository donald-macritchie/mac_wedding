import holdingHands from "/images/holding_hands.jpg";

const Gifts = () => {
  return (
    <div className="relative w-full h-full">
      {/* Background Section */}
      <div className="h-screen flex flex-col justify-center items-center text-center relative w-full">
        {/* Background Image with Gradient */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${holdingHands})`,
          }}
        ></div>

        {/* Text Content with Semi-Transparent Background */}
        <div
          className="relative z-10 flex flex-col items-center text-center mb-20 p-6 max-w-[340px] w-full rounded-3xl text-[#A8D1AD] border-2 border-[#A8D1AD]"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          {/* Title */}
          <h1 className="text-3xl font-bold Montserrat mb-4">
            Here&apos;s the Thing...
          </h1>

          {/* Content */}
          <div className="text-lg">
            <p className="p-4">
              As much as we would love to have 3 Air Fryers, 2 Toasters, 5 Sets
              of Cutlery, etc... the truth is, we really don’t need any of that.
            </p>
            <p className="p-4">
              Honestly, just having you there to celebrate with us is more than
              enough!
            </p>
            <p className="p-4">
              But if you’re really set on getting us something, a small donation
              towards our future would be greatly appreciated.
            </p>
            <p className="p-4">
              No pressure – your presence is the best gift we could ask for!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
