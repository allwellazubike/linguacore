import React from "react";
import { Mail, MessageSquare, Clock } from "lucide-react";

const Contact = () => {
  return (
    <main className="pt-20 bg-stone-50 min-h-screen">
      <section className="py-20 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-200/50 skew-x-12 transform translate-x-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-stone-200/30 rounded-full filter blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 text-white text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              <span>Contact Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-stone-900 mb-6">
              Get Started with LinguaCore AI
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed">
              Have questions or ready to begin localizing your content at scale?
              We’re here to help.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-8">
            {/* Contact Info */}
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-stone-100 shadow-sm text-center">
              <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-900 mx-auto mb-6">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-stone-900 mb-2">
                Email Us
              </h3>
              <p className="text-stone-500 mb-6">
                For general inquiries, sales, and support.
              </p>
              <a
                href="mailto:favour@linguacoreai.com"
                className="text-2xl md:text-3xl font-medium text-stone-900 hover:text-stone-600 transition-colors block mb-8"
              >
                favour@linguacoreai.com
              </a>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-50 rounded-full text-stone-600 text-sm">
                <Clock className="w-4 h-4" />
                <span>
                  We typically respond within 24 hours on business days.
                </span>
              </div>
            </div>

            <div className="bg-stone-900 text-white p-8 md:p-12 rounded-2xl text-center">
              <h3 className="text-xl font-medium mb-4">
                For Enterprise Inquiries
              </h3>
              <p className="text-stone-400 mb-8 max-w-lg mx-auto">
                Need a custom SLA, dedicated support, or on-premise deployment?
                Reach out to our enterprise team directly.
              </p>
              <a
                href="mailto:favour@linguacoreai.com?subject=Enterprise%20Inquiry"
                className="inline-block px-8 py-4 bg-white text-stone-900 hover:bg-stone-100 font-medium rounded-lg transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
