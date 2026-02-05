import React, { useState } from "react";

const faqs = [
  {
    question: "What is LinguaCore AI?",
    answer:
      "LinguaCore AI is an API-first, cloud-native media localization platform that automatically translates, dubs, and localizes audio and video content into multiple languages. We provide the AI infrastructure needed to expand content globally without traditional dubbing studios.",
  },
  {
    question: "Who is it for?",
    answer:
      "Content creators, media production companies, streaming platforms, e-learning providers, corporate training departments, marketing agencies, podcast producers, film studios, and any organization producing audio or video content for multilingual audiences.",
  },
  {
    question: "What languages are supported?",
    answer:
      "We currently support 20+ languages including English, Spanish, French, Portuguese, Arabic, Mandarin, Hindi, Hausa, Yoruba, Igbo, Swahili, Amharic, German, Italian, Japanese, Korean, Russian, and more. We continuously add languages based on customer demand.",
  },
  {
    question: "Is this an API or a dashboard?",
    answer:
      "Both. We provide RESTful APIs for developer integration, official SDKs for popular programming languages, webhook support for processing notifications, and a web dashboard for content upload, monitoring, quality review, and download.",
  },
  {
    question: "What's the pricing model?",
    answer:
      "We offer usage-based pricing that scales with content volume, charged per minute of processed audio/video. Start with a free trial including 60 minutes of processing, then pay only for what you use with no minimum commitments.",
  },
  {
    question: "How accurate is the dubbing quality?",
    answer:
      "Our AI models achieve 95%+ transcription accuracy, maintain translation quality scores of 4.2/5.0 compared to professional human translation, and generate voice synthesis rated 4.5/5.0 for naturalness.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-[#050a14] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400">
            Find answers to common questions about LinguaCore AI.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl bg-white/5 overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-white">
                  {faq.question}
                </span>
                <span
                  className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-gray-400 border-t border-white/5 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
