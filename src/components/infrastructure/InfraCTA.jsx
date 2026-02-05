import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const InfraCTA = () => {
  return (
    <section className="py-24 bg-stone-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block px-3 py-1 rounded-full bg-stone-800 text-stone-400 text-sm font-medium mb-8 border border-stone-700">
          Infrastructure Built for Media
        </span>
        <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8 leading-tight">
          Powered by World-Class
          <br />
          <span className="text-orange-500">Cloud Technology</span>
        </h2>
        <p className="text-xl text-stone-400 mb-12 max-w-2xl mx-auto">
          See how our AI infrastructure transforms content for global audiences
          with enterprise reliability and unlimited scale.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="/contact"
            className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-medium transition-colors flex items-center gap-2 group"
          >
            Request Architecture Discussion
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="px-8 py-4 bg-transparent border border-stone-700 hover:border-stone-500 text-white rounded-full font-medium transition-colors">
            View Platform Documentation
          </button>
        </div>
      </div>
    </section>
  );
};

export default InfraCTA;
