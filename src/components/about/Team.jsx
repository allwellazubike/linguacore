import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Fey Azubike",
      role: "Founder & CEO",
      quote:
        "Leads product vision, infrastructure strategy, and platform direction with focus on emerging market media localization challenges.",
      bio: "Previous experience in media technology and product management with focus on AI infrastructure and content platforms. Passionate about democratizing global content access through language technology.",
    },
    {
      name: "Chisom Okonkwo",
      role: "Co-Founder & Head of Engineering",
      quote:
        "Architecting distributed media processing systems, AI model deployment, and cloud infrastructure for reliable operation at scale.",
      bio: "Infrastructure engineer with expertise in cloud-native architecture, distributed systems, and large-scale media processing. Previously worked on video transcoding platforms and real-time audio processing systems.",
    },
    {
      name: "Amina Hassan",
      role: "Lead AI Engineer",
      quote:
        "Driving AI research, multilingual speech technology development, and voice synthesis innovation.",
      bio: "Machine learning engineer specializing in speech recognition, neural machine translation, and voice synthesis. Published researcher in African language speech technology and low-resource language AI.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-2 block">
            The People
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-stone-900 mb-6">
            Meet the Team
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto font-light">
            A team of engineers, AI researchers, and media technology
            specialists focused on building scalable localization systems for
            global content distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="group relative bg-[#FAFAF9] p-8 border border-stone-100 hover:border-stone-200 transition-colors"
            >
              <div className="w-20 h-20 bg-stone-200 mb-6 rounded-sm overflow-hiddengrayscale group-hover:grayscale-0 transition-all">
                {/* Placeholder for professional photo */}
                <div className="w-full h-full flex items-center justify-center text-stone-400 font-serif text-2xl font-bold bg-stone-100">
                  {member.name.charAt(0)}
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900">
                {member.name}
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-4 mt-1">
                {member.role}
              </p>
              <p className="text-stone-800 italic font-serif mb-6 text-sm border-l-2 border-stone-200 pl-3">
                "{member.quote}"
              </p>
              <p className="text-stone-600 text-sm font-light leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
