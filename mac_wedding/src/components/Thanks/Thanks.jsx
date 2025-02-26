import engagement from "/images/engagement.jpg";

const Thanks = () => {
  return (
    <>
      <div className="w-full h-screen bg-black text-[#A8D1AD] flex flex-col items-center justify-center p-4">
        <p className="text-4xl font-bold">SEE YOU AT</p>
        <img
          className="max-w-[600px] w-full rounded-xl"
          src={engagement}
          alt=""
        />
        <p className="text-4xl font-bold">OUR WEDDING</p>
      </div>
    </>
  );
};

export default Thanks;
