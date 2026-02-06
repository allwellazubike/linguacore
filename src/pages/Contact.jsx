import React, { useState } from "react";
import { Mail, ArrowRight, Copy, Check, ExternalLink } from "lucide-react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "favour@linguacoreai.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="bg-stone-50 min-h-screen pt-20 flex items-center relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-stone-200/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-stone-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Typography */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 text-white text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>Accepting New Partners</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-medium text-stone-900 leading-[1.1]">
              Let’s build something{" "}
              <span className="text-stone-400 italic">extraordinary.</span>
            </h1>

            <p className="text-xl text-stone-600 max-w-lg leading-relaxed">
              Whether you need to localize a single video or automate an entire
              broadcast pipeline, our infrastructure is ready.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-4 py-2 bg-white rounded-lg border border-stone-200 text-stone-600 text-sm font-medium">
                Enterprise Integration
              </div>
              <div className="px-4 py-2 bg-white rounded-lg border border-stone-200 text-stone-600 text-sm font-medium">
                Custom AI Models
              </div>
              <div className="px-4 py-2 bg-white rounded-lg border border-stone-200 text-stone-600 text-sm font-medium">
                SLA Guarantees
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Card */}
          <div className="relative">
            {/* Card Shadow/Depth */}
            <div className="absolute inset-0 bg-stone-900 rounded-3xl transform translate-x-4 translate-y-4 opacity-10" />

            <div className="bg-white p-8 md:p-12 rounded-3xl border border-stone-100 shadow-xl relative overflow-hidden group">
              {/* Card Decoration */}
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Mail className="w-48 h-48 text-stone-900" />
              </div>

              <div className="relative z-10">
                <h3 className="text-stone-500 font-medium uppercase tracking-wider text-sm mb-2">
                  Get in Touch
                </h3>
                <h2 className="text-3xl font-serif font-medium text-stone-900 mb-8">
                  Email us directly
                </h2>

                {/* Email Action Box */}
                <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group/box hover:border-stone-300 transition-colors">
                  <div className="break-all">
                    <span className="block text-xs text-stone-400 font-bold uppercase tracking-wider mb-1">
                      Our Email
                    </span>
                    <a
                      href={`mailto:${email}`}
                      className="text-xl md:text-2xl font-medium text-stone-900 font-mono"
                    >
                      {email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="p-3 bg-white border border-stone-200 rounded-xl hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all shrink-0"
                    title="Copy Email"
                  >
                    {copied ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </button>
                </div>

                <a
                  href={`mailto:${email}`}
                  className="w-full py-4 bg-stone-900 hover:bg-stone-800 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2 mb-8 shadow-lg shadow-stone-900/10 group/btn"
                >
                  <Mail className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                  Send Message Directly
                </a>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-stone-600">
                    <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center shrink-0">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                    <p className="text-sm">
                      Typically responds within{" "}
                      <strong className="text-stone-900">24 hours</strong> on
                      business days.
                    </p>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-stone-100">
                  <p className="text-stone-500 text-sm mb-4">
                    Looking for something else?
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="/developers"
                      className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors"
                    >
                      Developer Docs <ExternalLink className="w-3 h-3" />
                    </a>
                    <span className="text-stone-300">|</span>
                    <a
                      href="/infrastructure"
                      className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors"
                    >
                      View Architecture <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
