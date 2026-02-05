import React, { useState } from "react";

const FeaturesFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How long does dubbing take?",
      answer:
        "Processing time depends on content length. A 10-minute video typically completes in 15-25 minutes. Longer content processes at approximately 1.5-2x real-time. Batch jobs run in parallel.",
    },
    {
      question: "Can I edit the translations?",
      answer:
        "Yes. The platform provides translation editing interfaces where you can review and modify AI-generated translations before voice synthesis. You can also upload your own translated scripts.",
    },
    {
      question: "What about voice customization?",
      answer:
        "You can select from multiple pre-built voices per language, adjust speaking characteristics (speed, pitch, emotion), or use our voice cloning feature to preserve the original speaker's vocal characteristics.",
    },
    {
      question: "How accurate is the translation?",
      answer:
        "Our translation engine achieves quality scores of 4.2/5.0 compared to professional human translation benchmarks. Accuracy varies by language pair and content type, with continuous model improvements.",
    },
    {
      question: "Can I review before finalizing?",
      answer:
        "Absolutely. The dashboard provides preview capabilities, side-by-side comparison, quality metrics, and editing tools. You can request re-processing with adjustments before downloading final content.",
    },
    {
      question: "What formats are supported?",
      answer:
        "We support all major video formats (MP4, MOV, AVI, MKV, WebM) and audio formats (MP3, WAV, AAC, FLAC). Output is delivered in your preferred format with customizable quality settings.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-serif font-medium text-stone-900 mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-sm overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "bg-[#FAFAF9] border-stone-200 shadow-md ring-1 ring-stone-900/5"
                  : "bg-white border-stone-200 hover:border-stone-300"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              >
                <span className="text-lg font-medium text-stone-900">
                  {faq.question}
                </span>
                <span
                  className={`ml-4 transform transition-transform duration-300 text-stone-400 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
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
                <div className="p-6 pt-0 text-stone-600 font-light leading-relaxed border-t border-stone-100 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final Call to Action included here as prompt puts it at the end */}
      <div className="mt-24 text-center">
        <span className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-4 block">
          Built for Content Creators
        </span>
        <h2 className="text-4xl md:text-5xl font-serif font-medium text-stone-900 mb-8">
          Ready to Go Global?
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 py-3 bg-stone-900 text-white font-medium hover:bg-stone-800 transition-colors rounded-sm shadow-xl shadow-stone-900/10">
            Get Started
          </button>
          <button className="px-8 py-3 bg-white border border-stone-200 text-stone-900 font-medium hover:bg-stone-50 transition-colors rounded-sm">
            Request Demo
          </button>
          <button className="px-8 py-3 text-stone-600 font-medium hover:text-stone-900 transition-colors underline decoration-stone-300 hover:decoration-stone-900 underline-offset-4">
            View Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesFAQ;
