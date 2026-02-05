import React from "react";
import { Database, HardDrive, FileText, Activity, Zap } from "lucide-react";

const StorageRow = ({ icon: Icon, title, type, description, usage }) => (
  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 border-b border-stone-100 hover:bg-stone-50 transition-colors last:border-0">
    <div className="w-12 h-12 bg-white border border-stone-200 rounded-xl flex items-center justify-center shrink-0 text-stone-600">
      <Icon className="w-6 h-6" />
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-3 mb-1">
        <h3 className="text-lg font-medium text-stone-900">{title}</h3>
        <span className="px-2 py-0.5 bg-stone-100 text-stone-500 text-xs rounded uppercase tracking-wide">
          {type}
        </span>
      </div>
      <p className="text-stone-600 text-sm">{description}</p>
    </div>
    <div className="w-full md:w-48 bg-white p-3 rounded-lg border border-stone-100">
      <span className="text-xs text-stone-400 uppercase tracking-wider block mb-1">
        Primary Use Case
      </span>
      <span className="text-sm font-medium text-orange-600">{usage}</span>
    </div>
  </div>
);

const DataStorage = () => {
  const systems = [
    {
      icon: HardDrive, // Cloud Storage
      title: "Cloud Storage",
      type: "Object Storage",
      description:
        "Massive scale storage for original uploads, intermediate processing files, and final localized content assets.",
      usage: "Media Assets (50TB+)",
    },
    {
      icon: FileText, // Filestore
      title: "Cloud Filestore",
      type: "File System",
      description:
        "High-performance NFS storage for shared media assets and distributed rendering operations.",
      usage: "Shared Rendering Cache",
    },
    {
      icon: Database, // SQL
      title: "Cloud SQL",
      type: "PostgreSQL",
      description:
        "Managed relational database for structured job metadata, user accounts, and historical analytics.",
      usage: "User & Job Data",
    },
    {
      icon: Activity, // Firestore
      title: "Cloud Firestore",
      type: "NoSQL",
      description:
        "Real-time database for processing status updates, active user sessions, and dashboard synchronization.",
      usage: "Real-time Status",
    },
    {
      icon: Zap, // Redis
      title: "Memorystore",
      type: "Redis",
      description:
        "In-memory cache for high-velocity job queue management and API response caching.",
      usage: "Job Queues & Cache",
    },
  ];

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-6">
            Data Storage & Databases
          </h2>
          <p className="text-lg text-stone-600">
            Optimized storage tiers ensuring reliable access to petabytes of
            media content.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
          {systems.map((sys, idx) => (
            <StorageRow key={idx} {...sys} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataStorage;
