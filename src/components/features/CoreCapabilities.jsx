import React from "react";

const CoreCapabilities = () => {
  const capabilities = [
    {
      title: "Automatic Speech Recognition",
      description:
        "Enterprise-grade speech-to-text transcription extracting spoken dialogue from audio and video content with timestamp-accurate transcripts.",
      features: [
        "Multi-speaker diarization",
        "Background noise filtering",
        "Technical terminology recognition",
        "95%+ transcription accuracy",
        "Support for 20+ languages and accents",
        "Automatic punctuation and formatting",
      ],
    },
    {
      title: "Neural Translation Engine",
      description:
        "Context-aware AI translation preserving meaning, tone, emotional intent, and cultural appropriateness across languages.",
      features: [
        "Specialized translation models for media content",
        "Preservation of idioms and cultural references",
        "Context retention across long-form content",
        "Domain-specific vocabulary",
        "Translation quality scoring",
        "Human-in-the-loop review options",
      ],
    },
    {
      title: "AI Voice Synthesis",
      description:
        "Natural-sounding voice generation in multiple languages with configurable voice characteristics, emotions, and speaking styles.",
      features: [
        "Multiple voice options per language",
        "Emotion and tone control",
        "Speaking rate adjustment",
        "Custom voice cloning (preserve original speaker)",
        "Professional voice quality (4.5/5.0 naturalness rating)",
        "SSML support for fine-tuned control",
      ],
      extraInfo:
        "Currently Supported: English, Spanish, French, Portuguese, Arabic, Mandarin, Hindi, Hausa, Yoruba, Igbo, Swahili, Amharic, German, Italian, Japanese, Korean, Russian, and more...",
    },
    {
      title: "Lip-Sync Technology",
      description:
        "Automatic audio-video synchronization ensuring dubbed audio matches on-screen lip movements for seamless viewing experiences.",
      features: [
        "Facial movement analysis",
        "Audio timing alignment",
        "Multi-character scene handling",
        "Automatic timing adjustment",
        "Quality assurance scoring",
        "Manual fine-tuning options",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-2 block">
            Core Features
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-stone-900">
            Platform Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-8 md:p-10 bg-[#FAFAF9] rounded-sm border border-stone-100 hover:border-stone-900/10 transition-all hover:shadow-lg hover:shadow-stone-900/5 group"
            >
              <h3 className="text-2xl font-serif font-medium text-stone-900 mb-4 group-hover:text-stone-700 transition-colors">
                {cap.title}
              </h3>
              <p className="text-stone-600 mb-8 font-light leading-relaxed">
                {cap.description}
              </p>

              <ul className="space-y-3 mb-6">
                {cap.features.map((feature, fIdx) => (
                  <li
                    key={fIdx}
                    className="flex items-start gap-3 text-sm text-stone-700 font-medium"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0"></span>
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
              {cap.extraInfo && (
                <div className="mt-6 pt-6 border-t border-stone-200 text-xs text-stone-500 italic font-light">
                  {cap.extraInfo}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;
