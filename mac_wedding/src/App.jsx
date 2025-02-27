import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Timeline from "./components/Timeline/Timeline";
import WeddingDetails from "./components/WeddingDetails/WeddingDetails";
import FAQsHeader from "./components/FAQs/FAQsHeader";
import FAQs from "./components/FAQs/FAQs";
import RSVPHeader from "./components/RSVP/RSVPHeader";
import RSVP from "./components/RSVP/RSVP";
import Thanks from "./components/Thanks/Thanks";

function App() {
  const [accessGranted, setAccessGranted] = useState(false);
  const [inputPin, setInputPin] = useState("");

  const correctPin = "3105"; // Change this to your desired PIN

  const handleLogin = () => {
    if (inputPin === correctPin) {
      setAccessGranted(true);
    } else {
      alert("Incorrect PIN. Try again!");
      setInputPin("");
    }
  };

  return (
    <>
      {!accessGranted ? (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold mb-4">Enter PIN to Access</h2>
            <input
              type="password"
              className="border p-2 rounded w-40 text-center"
              value={inputPin}
              onChange={(e) => setInputPin(e.target.value)}
            />
            <button
              onClick={handleLogin}
              className="block bg-blue-500 text-white mt-4 px-4 py-2 rounded hover:bg-blue-700 mx-auto"
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-[#A8D1AD] w-full h-full">
          <Header />
          <Timeline />
          <WeddingDetails />
          <RSVPHeader />
          <RSVP />
          <FAQsHeader />
          <FAQs />
          <Thanks />
        </div>
      )}
    </>
  );
}

export default App;
