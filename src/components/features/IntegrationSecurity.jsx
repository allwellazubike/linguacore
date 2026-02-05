import React from "react";

const IntegrationSecurity = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Integration Section */}
          <div className="space-y-8">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-2 block">
                Integration Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-6">
                Flexible Deployment Options
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "API-First Integration",
                  desc: "Direct REST API integration for maximum flexibility and control over media processing workflows.",
                },
                {
                  title: "Pre-Built Connectors",
                  desc: "Ready-made integrations for YouTube, Vimeo, Wistia, major CMS platforms, and video hosting services.",
                },
                {
                  title: "Storage Integration",
                  desc: "Native support for AWS S3, Google Cloud Storage, Azure Blob Storage, and direct file upload.",
                },
                {
                  title: "Workflow Automation",
                  desc: "Webhook-based automation for continuous localization pipelines and scheduled batch processing.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="border-l-2 border-stone-200 pl-6 py-2"
                >
                  <h4 className="font-bold text-stone-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-stone-600 font-light text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Security Section */}
          <div className="space-y-8 bg-stone-900 p-8 md:p-12 rounded-sm text-stone-100">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-stone-400 mb-2 block">
                Security & Compliance
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-6">
                Enterprise Security Standards
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-white font-bold border-b border-stone-700 pb-2">
                  Content Protection
                </h4>
                <ul className="space-y-2 text-sm text-stone-400 font-light">
                  <li>TLS 1.3 encryption in transit</li>
                  <li>AES-256 encryption at rest</li>
                  <li>Encrypted processing</li>
                  <li>Secure content deletion</li>
                  <li>Watermarking options</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-white font-bold border-b border-stone-700 pb-2">
                  Access Control
                </h4>
                <ul className="space-y-2 text-sm text-stone-400 font-light">
                  <li>API key authentication</li>
                  <li>OAuth 2.0 support</li>
                  <li>Role-based permissions</li>
                  <li>IP whitelisting options</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-white font-bold border-b border-stone-700 pb-2">
                  Compliance
                </h4>
                <ul className="space-y-2 text-sm text-stone-400 font-light">
                  <li>GDPR compliance ready</li>
                  <li>SOC 2 Type II pathway</li>
                  <li>Data residency options</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-white font-bold border-b border-stone-700 pb-2">
                  Audits
                </h4>
                <ul className="space-y-2 text-sm text-stone-400 font-light">
                  <li>Comprehensive logs</li>
                  <li>Quality audit trails</li>
                  <li>Usage tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSecurity;
