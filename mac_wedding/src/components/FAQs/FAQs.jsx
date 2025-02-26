import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import question from "/images/question.jpg"; // Path to your image

const faqs = [
  {
    question: "RVSP Deadline?",
    answer:
      "Please RSVP by April 1st, 2025. We can't wait to celebrate with you!",
  },
  {
    question: "I have Dietry Requirements, what should I do?",
    answer:
      "Let either Don or Ellie know as soon as possible. We've picked some really decent food and I'm sure we've got everyone covered, but we want to make sure you're looked after, so let us know if you need anything specific ASAP.",
  },
  {
    question: "What's the weather gonna be like?",
    answer:
      "Honestly? Fuck knows! It might be May, but we are in Scotland. Luckily, the ceremony and reception are indoors, and they’re literally a 5-minute walk around the corner. Fingers crossed for a sunny day! But a brolly won't go a miss!",
  },
  {
    question: "Is there parking available?",
    answer:
      "No. We know, we know—it's a ballache. But we're nae oot in the sticks! Taxis and buses will pretty much take you to the door.",
  },
  {
    question: "Are kids welcome?",
    answer: "No.",
  },
  {
    question: "What time should I be there?",
    answer:
      "The ceremony kicks off at 3 PM sharp! But let’s be real—Don is planning a grand entrance, so aim to be there by 2:45 PM for the full experience.",
  },
  {
    question: "What time does the reception finish?",
    answer:
      "Officially - Midnight. Unofficially - The reception venue are really sound! And they are not strict on a 12AM finish, but we'll try to be out by then. And if anyone is still keen for a drink, There's plenety of pubs and bars nearby for a nightcap!",
  },
];

const FAQItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-gray-600">
      <button
        onClick={toggle}
        className="w-full text-left py-4 flex justify-between items-center text-lg font-semibold text-[#A8D1AD] hover:text-white transition duration-200"
      >
        {question}
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ transition: "max-height 0.3s ease-out" }}
      >
        <p className="text-gray-300 text-md pb-4">{answer}</p>
      </div>
    </div>
  );
};

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${question})` }}
    >
      <div
        className="absolute max-w-4xl w-[95%] p-12"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent black background
          border: "1px solid #A8D1AD",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
          position: "relative", // Keep it relative
          zIndex: "1", // Ensure it's above the background
        }}
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-[#a8d1ad]">
          FAQs
        </h2>
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            toggle={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQs;
