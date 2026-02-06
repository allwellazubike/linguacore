import React from "react";
import { ArrowRight } from "lucide-react";

const DevCTA = () => {
  return (
    <section className="py-24 bg-stone-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 leading-tight">
          Start Building Today
        </h2>
        <p className="text-xl text-stone-400 mb-10 max-w-2xl mx-auto">
          Get 60 minutes of free processing per month. No credit card required.
          Full platform access to test your integration.
        </p>

        <a
          href="mailto:favour@linguacoreai.com"
          className="px-8 py-4 bg-white text-stone-900 hover:bg-stone-100 rounded-sm font-medium transition-colors flex items-center gap-2 mx-auto inline-flex"
        >
          Get Your Free API Key
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default DevCTA;
