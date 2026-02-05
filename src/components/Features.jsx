import React from "react";

const featuresData = [
  {
    title: "AI-Powered Dubbing",
    description:
      "Automatically generate natural-sounding dubbed audio in English and local languages including Hausa, Yoruba, Igbo, Swahili, French, Arabic, Portuguese, Spanish, Mandarin, and Hindi.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
        />
      </svg>
    ),
  },
  {
    title: "Automated Translation",
    description:
      "AI-driven translation engine that preserves context, tone, and cultural nuances across 20+ languages with specialized media vocabulary.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a6.798 6.798 0 0 1 4.488-1.954 6.798 6.798 0 0 1 4.488 1.954m-2.244 1.954a2.25 2.25 0 0 1 1.413-3.625 2.25 2.25 0 0 1 1.413 3.625m2.244-1.954a6.798 6.798 0 0 1 2.25 4.844V21H1.5v-6.75a6.798 6.798 0 0 1 2.25-4.844m15 0a4.5 4.5 0 0 1-9 0m9 0h-9"
        />
      </svg>
    ),
  },
  {
    title: "Voice Synthesis & Cloning",
    description:
      "Advanced text-to-speech with voice cloning capabilities, allowing you to maintain brand voice consistency or create entirely new multilingual voice personas.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
        />
      </svg>
    ),
  },
  {
    title: "Lip-Sync Technology",
    description:
      "Automatic audio-video synchronization ensuring dubbed audio matches on-screen lip movements for professional viewing experiences.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    ),
  },
  {
    title: "Batch Processing",
    description:
      "Process entire media libraries at scale — from single videos to thousands of hours of content with parallel processing infrastructure.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3.251l4.135 4.506a.9.9 0 0 0 1.293.035l2.833-3.115M12 10.751 7.865 15.257a.9.9 0 0 1-1.293-.035l-2.833-3.115m9.387-5.023L12 3.75l-4.135 3.334"
        />
      </svg>
    ),
  },
  {
    title: "Developer APIs",
    description:
      "RESTful APIs, webhooks, SDKs, and comprehensive documentation for seamless integration into existing media workflows.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
        />
      </svg>
    ),
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-[#FAFAF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-stone-900 mb-6">
            Core Platform Capabilities
          </h2>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto font-light leading-relaxed">
            Powerful features designed to automate and scale your media
            localization workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-sm bg-white border border-stone-200 hover:border-stone-900/30 hover:shadow-lg hover:shadow-stone-900/5 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-900 flex items-center justify-center mb-6 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-medium text-stone-900 mb-3 group-hover:opacity-80 transition-opacity">
                {feature.title}
              </h3>
              <p className="text-stone-600 leading-relaxed text-sm font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
