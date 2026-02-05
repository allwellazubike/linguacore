import React from "react";
import { Terminal, BookOpen, ChevronRight } from "lucide-react";

const DevHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-stone-50 border-b border-stone-200">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-100/50 -skew-x-12 transform translate-x-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-stone-200/20 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 text-white text-sm font-medium mb-6">
            <Terminal className="w-4 h-4" />
            <span>Developer Platform</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-serif font-medium text-stone-900 mb-6 leading-tight">
            Built for Developers
            <br />
            <span className="text-stone-500 italic">
              APIs, SDKs, and Documentation
            </span>
          </h1>

          <p className="text-xl text-stone-600 max-w-2xl leading-relaxed mb-10">
            LinguaCore AI is an API-first platform designed for seamless
            integration into media workflows, content management systems, and
            production pipelines.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <button className="px-8 py-4 bg-stone-900 text-white font-medium text-lg hover:bg-stone-800 transition-colors rounded-sm shadow-xl shadow-stone-900/10 flex items-center gap-2">
              Get API Key
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white border border-stone-200 text-stone-900 font-medium text-lg hover:border-stone-900 transition-colors rounded-sm flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-stone-500" />
              View Documentation
            </button>
            <button className="px-8 py-4 bg-transparent text-stone-600 font-medium text-lg hover:text-stone-900 transition-colors flex items-center gap-2">
              API Reference
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevHero;
