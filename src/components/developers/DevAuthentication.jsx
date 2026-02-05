import React from "react";
import { Shield, Lock, Key } from "lucide-react";

const DevAuthentication = () => {
  return (
    <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-800/20 skew-x-12 transform translate-x-32" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800 text-stone-300 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>Security First</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              API Key Authentication
            </h2>
            <p className="text-stone-400 text-lg mb-8 leading-relaxed">
              All API requests require authentication using an API key passed in
              the Authorization header. We support both test and live
              environments to ensure safe integration.
            </p>

            <div className="bg-stone-950 rounded-xl p-6 border border-stone-800 font-mono text-sm text-stone-300 mb-8">
              <div>
                <span className="text-orange-400">Authorization:</span>{" "}
                <span className="text-green-400">Bearer</span>{" "}
                <span className="text-stone-500">YOUR_API_KEY</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Key className="w-5 h-5 text-stone-500 mt-1" />
                <div>
                  <h4 className="font-medium text-white">API Key Types</h4>
                  <p className="text-sm text-stone-400 mt-1">
                    <code className="bg-stone-800 px-1 py-0.5 rounded text-xs text-stone-300">
                      sk_test_...
                    </code>{" "}
                    for sandbox testing (limited processing)
                    <br />
                    <code className="bg-stone-800 px-1 py-0.5 rounded text-xs text-stone-300">
                      sk_live_...
                    </code>{" "}
                    for production processing
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-stone-800/50 rounded-2xl p-8 border border-stone-700">
              <h3 className="text-xl font-serif font-medium mb-6 flex items-center gap-2">
                <Lock className="w-5 h-5 text-stone-400" />
                Security Best Practices
              </h3>
              <ul className="space-y-4">
                {[
                  "Never expose API keys in client-side code",
                  "Rotate keys regularly via the dashboard",
                  "Use environment variables for key storage",
                  "Implement IP whitelisting for production keys",
                  "Monitor API key usage for anomalies",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-stone-300 text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-stone-500 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevAuthentication;
