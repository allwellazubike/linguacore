import React from "react";
import { Webhook, AlertTriangle, ShieldAlert, Activity } from "lucide-react";

const DevTools = () => {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Webhooks Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-stone-200 rounded-lg text-stone-700">
                <Webhook className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-stone-900">
                Webhooks & Events
              </h3>
            </div>
            <p className="text-stone-600 mb-8">
              Configure webhooks to receive real-time updates on long-running
              processes like transcription and synthesis.
            </p>

            <div className="bg-white rounded-xl border border-stone-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-stone-100 bg-stone-50/50 flex justify-between items-center">
                <span className="font-medium text-sm text-stone-900">
                  Available Events
                </span>
                <span className="text-xs text-stone-500">HMAC Signed</span>
              </div>
              <div className="divide-y divide-stone-100">
                {[
                  { event: "job.created", desc: "Processing job created" },
                  {
                    event: "transcription.completed",
                    desc: "Transcription finished",
                  },
                  {
                    event: "synthesis.completed",
                    desc: "Voice dubbing completed",
                  },
                  {
                    event: "job.completed",
                    desc: "Full localization completed",
                  },
                  { event: "job.failed", desc: "Processing failed" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="px-6 py-3 flex items-center justify-between text-sm"
                  >
                    <code className="text-stone-800 bg-stone-100 px-2 py-0.5 rounded">
                      {item.event}
                    </code>
                    <span className="text-stone-500">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Rate Limits & Errors */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-stone-200 rounded-lg text-stone-700">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-serif font-medium text-stone-900">
                  Rate Limits & Quotas
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-xl border border-stone-200 text-center">
                  <span className="text-xs text-stone-500 uppercase tracking-wider block mb-2">
                    Free Tier
                  </span>
                  <span className="text-xl font-bold text-stone-900 block">
                    10 req/s
                  </span>
                  <span className="text-xs text-stone-400">60 mins/mo</span>
                </div>
                <div className="bg-white p-5 rounded-xl border border-stone-200 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-stone-100 rounded-bl-xl"></div>
                  <span className="text-xs text-stone-500 uppercase tracking-wider block mb-2">
                    Pro Plan
                  </span>
                  <span className="text-xl font-bold text-stone-900 block">
                    50 req/s
                  </span>
                  <span className="text-xs text-stone-400">500 mins/mo</span>
                </div>
                <div className="bg-white p-5 rounded-xl border border-stone-900 bg-stone-900 text-white text-center">
                  <span className="text-xs text-stone-400 uppercase tracking-wider block mb-2">
                    Enterprise
                  </span>
                  <span className="text-xl font-bold text-white block">
                    Unlimited
                  </span>
                  <span className="text-xs text-stone-400">Custom Limits</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-stone-200 rounded-lg text-stone-700">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-serif font-medium text-stone-900">
                  Error Handling
                </h3>
              </div>
              <div className="bg-white p-6 rounded-xl border border-stone-200">
                <p className="text-stone-600 text-sm mb-4">
                  All errors follow a consistent JSON structure including{" "}
                  <code className="text-xs bg-stone-100 px-1 rounded">
                    error.code
                  </code>
                  ,{" "}
                  <code className="text-xs bg-stone-100 px-1 rounded">
                    message
                  </code>
                  , and{" "}
                  <code className="text-xs bg-stone-100 px-1 rounded">
                    doc_url
                  </code>
                  .
                </p>
                <div className="flex gap-2 flex-wrap">
                  {[
                    "authentication_error",
                    "rate_limit_error",
                    "validation_error",
                    "processing_error",
                  ].map((err, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-red-50 text-red-600 text-xs rounded border border-red-100 font-mono"
                    >
                      {err}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevTools;
