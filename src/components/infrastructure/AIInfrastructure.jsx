import React from "react";
import { Mic, Languages, Volume2, Brain, Eye } from "lucide-react";

const AICard = ({ icon: Icon, title, description, badge, details }) => (
  <div className="bg-white rounded-2xl border border-stone-100 p-8 shadow-sm hover:shadow-md transition-all">
    <div className="flex items-start justify-between mb-6">
      <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600">
        <Icon className="w-6 h-6" />
      </div>
      <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium text-stone-600 uppercase tracking-wide">
        {badge}
      </span>
    </div>
    <h3 className="text-xl font-serif font-medium text-stone-900 mb-3">
      {title}
    </h3>
    <p className="text-stone-600 mb-6 text-sm">{description}</p>

    <div className="space-y-3">
      {details.map((detail, idx) => (
        <div
          key={idx}
          className="flex items-center gap-3 text-sm text-stone-600"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-orange-300" />
          <span>{detail}</span>
        </div>
      ))}
    </div>
  </div>
);

const AIInfrastructure = () => {
  const features = [
    {
      icon: Mic,
      title: "Speech-to-Text API",
      badge: "Primary Service",
      description:
        "Enterprise speech recognition service converting audio to text with timestamp accuracy and speaker identification.",
      details: [
        "20+ languages and dialects",
        "Speaker diarization",
        "Automatic punctuation",
        "Custom vocabulary support",
      ],
    },
    {
      icon: Languages,
      title: "Translation API",
      badge: "Critical",
      description:
        "Neural machine translation service providing high-quality translation with media-specific models.",
      details: [
        "Context-aware translation",
        "Media-specific models",
        "Custom glossary support",
        "ISO-standard quality scoring",
      ],
    },
    {
      icon: Volume2,
      title: "Text-to-Speech API",
      badge: "Essential",
      description:
        "Advanced neural voice synthesis generating natural-sounding speech in multiple languages.",
      details: [
        "20+ languages supported",
        "SSML prosody control",
        "Emotion & tone adjustment",
        "Voice cloning capabilities",
      ],
    },
    {
      icon: Brain,
      title: "Vertex AI",
      badge: "ML Ops",
      description:
        "Production machine learning platform for deploying and fine-tuning custom AI models.",
      details: [
        "Custom speech model training",
        "Fine-tuning for dialects",
        "Voice quality enhancement",
        "Model versioning & A/B testing",
      ],
    },
    {
      icon: Eye,
      title: "Cloud Vision API",
      badge: "Analysis",
      description:
        "Video intelligence and image analysis for scene detection and facial tracking.",
      details: [
        "Facial landmark detection",
        "Scene change detection",
        "Text extraction (OCR)",
        "Content moderation",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50/30 -skew-x-12 transform translate-x-32" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-medium tracking-wider text-sm uppercase mb-3 block">
            Core Intelligence
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-6">
            AI & Machine Learning Infrastructure
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            Our pipeline integrates best-in-class neural inputs to drive
            high-fidelity media localization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <AICard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIInfrastructure;
