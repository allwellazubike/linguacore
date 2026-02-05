import React from "react";
import { Upload, Mic, Globe, Volume2, Download, Layers } from "lucide-react";

const EndpointRow = ({ method, path, description }) => (
  <div className="flex flex-col sm:flex-row sm:items-center gap-3 py-3 border-b border-stone-100 last:border-0 font-mono text-sm">
    <span
      className={`px-2 py-0.5 rounded text-xs font-bold w-16 text-center shrink-0 ${
        method === "GET"
          ? "bg-blue-50 text-blue-700"
          : method === "POST"
            ? "bg-green-50 text-green-700"
            : method === "DELETE"
              ? "bg-red-50 text-red-700"
              : "bg-yellow-50 text-yellow-700"
      }`}
    >
      {method}
    </span>
    <span className="text-stone-800 font-medium">{path}</span>
    <span className="text-stone-500 text-xs sm:ml-auto">{description}</span>
  </div>
);

const APIGroup = ({ icon: Icon, title, description, endpoints }) => (
  <div className="bg-white rounded-xl border border-stone-200 overflow-hidden hover:shadow-md transition-shadow">
    <div className="p-6 bg-stone-50 border-b border-stone-200">
      <div className="flex items-center gap-3 mb-2">
        <Icon className="w-5 h-5 text-stone-700" />
        <h3 className="text-lg font-serif font-medium text-stone-900">
          {title}
        </h3>
      </div>
      <p className="text-sm text-stone-600">{description}</p>
    </div>
    <div className="p-6 space-y-1">
      {endpoints.map((ep, idx) => (
        <EndpointRow key={idx} {...ep} />
      ))}
    </div>
  </div>
);

const DevAPIOverview = () => {
  const apiGroups = [
    {
      icon: Upload,
      title: "Media Upload API",
      description:
        "Upload audio and video content for processing via direct upload or cloud storage URLs.",
      endpoints: [
        {
          method: "POST",
          path: "/v1/media/upload",
          description: "Upload media file",
        },
        {
          method: "POST",
          path: "/v1/media/upload-url",
          description: "Upload via URL",
        },
        {
          method: "GET",
          path: "/v1/media/{id}",
          description: "Get upload status",
        },
        {
          method: "DELETE",
          path: "/v1/media/{id}",
          description: "Delete content",
        },
      ],
    },
    {
      icon: Layers,
      title: "Localization Jobs API",
      description:
        "Create and manage localization processing jobs with language and quality settings.",
      endpoints: [
        {
          method: "POST",
          path: "/v1/jobs",
          description: "Create localization job",
        },
        { method: "GET", path: "/v1/jobs/{id}", description: "Get job status" },
        { method: "GET", path: "/v1/jobs", description: "List all jobs" },
        { method: "DELETE", path: "/v1/jobs/{id}", description: "Cancel job" },
      ],
    },
    {
      icon: Mic,
      title: "Transcription API",
      description:
        "Access speech-to-text transcription results with timestamps and speaker identification.",
      endpoints: [
        {
          method: "GET",
          path: "/v1/transcripts/{id}",
          description: "Get transcript",
        },
        {
          method: "PUT",
          path: "/v1/transcripts/{id}",
          description: "Edit transcript",
        },
        {
          method: "POST",
          path: "/v1/transcripts/{id}/export",
          description: "Export (SRT, VTT)",
        },
      ],
    },
    {
      icon: Globe,
      title: "Translation API",
      description:
        "Retrieve and edit AI-generated translations before voice synthesis.",
      endpoints: [
        {
          method: "GET",
          path: "/v1/translations/{id}",
          description: "Get translation",
        },
        {
          method: "PUT",
          path: "/v1/translations/{id}",
          description: "Edit translation",
        },
        {
          method: "POST",
          path: "/v1/translations/{id}/approve",
          description: "Approve for synthesis",
        },
      ],
    },
    {
      icon: Volume2,
      title: "Voice Synthesis API",
      description: "Configure voice settings and generate dubbed audio.",
      endpoints: [
        {
          method: "POST",
          path: "/v1/synthesis",
          description: "Generate dubbed audio",
        },
        {
          method: "GET",
          path: "/v1/voices",
          description: "List available voices",
        },
        {
          method: "POST",
          path: "/v1/voices/custom",
          description: "Create custom voice",
        },
      ],
    },
    {
      icon: Download,
      title: "Download API",
      description: "Access and download processed localized content.",
      endpoints: [
        {
          method: "GET",
          path: "/v1/downloads/{id}",
          description: "Get download URL",
        },
        {
          method: "GET",
          path: "/v1/downloads/{id}/formats",
          description: "Available formats",
        },
        {
          method: "POST",
          path: "/v1/downloads/{id}/notify",
          description: "Email download link",
        },
      ],
    },
  ];

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-stone-500 font-medium tracking-wider text-sm uppercase mb-3 block">
            API Overview
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-6">
            Core API Endpoints
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Our RESTful API provides granular control over every stage of the
            localization pipeline, from ingestion to final delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {apiGroups.map((group, idx) => (
            <APIGroup key={idx} {...group} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevAPIOverview;
