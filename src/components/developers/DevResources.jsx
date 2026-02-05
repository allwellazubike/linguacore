import React from "react";
import {
  Book,
  Users,
  Github,
  Youtube,
  FileText,
  ArrowRight,
} from "lucide-react";

const ResourceLink = ({ icon: Icon, title, description, link }) => (
  <a
    href={link}
    className="flex items-start gap-4 p-4 rounded-xl hover:bg-stone-50 transition-colors group"
  >
    <div className="mt-1">
      <Icon className="w-5 h-5 text-stone-400 group-hover:text-stone-900 transition-colors" />
    </div>
    <div>
      <h4 className="font-medium text-stone-900 flex items-center gap-2">
        {title}
        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
      </h4>
      <p className="text-sm text-stone-500 mt-1">{description}</p>
    </div>
  </a>
);

const DevResources = () => {
  const changelog = [
    {
      ver: "v1.2.0",
      date: "Feb 2026",
      note: "Added voice cloning API & Enhanced lip-sync accuracy",
    },
    {
      ver: "v1.1.0",
      date: "Jan 2026",
      note: "Translation quality improvements & Real-time webhooks",
    },
    {
      ver: "v1.0.0",
      date: "Dec 2025",
      note: "Initial public API release with 15 language support",
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Resources List */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif font-medium text-stone-900 mb-8">
              Developer Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ResourceLink
                icon={Book}
                title="API Reference"
                description="Complete API documentation with endpoint details, parameters, and examples."
                link="#"
              />
              <ResourceLink
                icon={FileText}
                title="Integration Guides"
                description="Step-by-step tutorials for common integration scenarios like YouTube automation."
                link="#"
              />
              <ResourceLink
                icon={Github}
                title="GitHub Examples"
                description="Sample code, starter templates, and reference implementations."
                link="#"
              />
              <ResourceLink
                icon={Users}
                title="Developer Community"
                description="Connect with other developers, share knowledge, and get help."
                link="#"
              />
              <ResourceLink
                icon={Youtube}
                title="Video Tutorials"
                description="Visual guides for API integration and platform features."
                link="#"
              />
            </div>
          </div>

          {/* Changelog */}
          <div>
            <h2 className="text-xl font-serif font-medium text-stone-900 mb-8">
              API Changelog
            </h2>
            <div className="border-l-2 border-stone-100 pl-6 space-y-8">
              {changelog.map((log, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-stone-300"></div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-mono text-sm font-bold text-stone-900">
                      {log.ver}
                    </span>
                    <span className="text-xs text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">
                      {log.date}
                    </span>
                  </div>
                  <p className="text-sm text-stone-600">{log.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevResources;
