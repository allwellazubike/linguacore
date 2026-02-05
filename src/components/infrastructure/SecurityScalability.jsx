import React from "react";
import { Shield, Lock, Activity, Scale, CheckCircle } from "lucide-react";

const SecurityScalability = () => {
  return (
    <section className="py-24 bg-stone-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-800/20 skew-x-12 transform translate-x-32" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Security Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-stone-800 rounded-lg text-stone-200">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-serif font-medium">
                Enterprise Security
              </h2>
            </div>

            <p className="text-stone-400 mb-8 leading-relaxed">
              Protecting intellectual property with banking-grade encryption and
              strict access controls.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Lock className="w-5 h-5 text-stone-400 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-stone-100 mb-2">
                    Content Protection
                  </h3>
                  <p className="text-sm text-stone-400">
                    TLS 1.3 encryption in transit, AES-256 at rest, and secure
                    content deletion after processing.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-5 h-5 text-stone-400 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-stone-100 mb-2">
                    Compliance
                  </h3>
                  <p className="text-sm text-stone-400">
                    GDPR-ready infrastructure, SOC 2 Type II pathway, and
                    detailed audit logging.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Shield className="w-5 h-5 text-stone-400 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-stone-100 mb-2">
                    Network Security
                  </h3>
                  <p className="text-sm text-stone-400">
                    Cloud Armor DDoS protection, private VPC networking, and API
                    key authentication.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scalability Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-stone-800 rounded-lg text-stone-200">
                <Scale className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-serif font-medium">
                Auto-Scaling Performance
              </h2>
            </div>

            <p className="text-stone-400 mb-8 leading-relaxed">
              Infrastructure that breathes with your workload, scaling from zero
              to millions of operations instantly.
            </p>

            <div className="bg-stone-800/50 rounded-2xl p-6 border border-stone-800">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-stone-700">
                <span className="text-stone-300 font-medium">
                  Processing Capacity
                </span>
                <span className="text-stone-100 font-mono">10,000+ Hrs/Mo</span>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-stone-400">GPU Auto-Scaling</span>
                    <span className="text-stone-200">
                      10 &#8594; 500+ Nodes
                    </span>
                  </div>
                  <div className="h-1.5 bg-stone-700 rounded-full overflow-hidden">
                    <div className="h-full bg-stone-400 w-3/4" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-stone-400">Global Throughput</span>
                    <span className="text-stone-200">Petabyte Scale</span>
                  </div>
                  <div className="h-1.5 bg-stone-700 rounded-full overflow-hidden">
                    <div className="h-full bg-stone-400 w-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4 text-sm text-stone-500">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-green-500" />
                <span>99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-green-500" />
                <span>Multi-Zone Redundancy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityScalability;
