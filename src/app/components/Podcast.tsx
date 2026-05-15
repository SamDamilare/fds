import { Play, Clock, Calendar, Headphones, TrendingUp, Mic } from "lucide-react";

export function Podcast() {
  const featured = {
    title: "The Art of Active Listening: Transforming Mediation Outcomes",
    description: "In this powerful episode, we explore how mastering active listening can completely change the trajectory of conflict resolution. Learn practical techniques you can implement immediately.",
    duration: "45 min",
    date: "April 22, 2026",
    episode: 42,
    image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=1200&q=80",
  };

  const episodes = [
    {
      title: "Building Trust in High-Stakes Negotiations",
      description: "Discover the psychological foundations of trust and how to establish it quickly in critical situations.",
      duration: "38 min",
      date: "April 15, 2026",
      episode: 41,
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
      plays: "2.5K",
    },
    {
      title: "De-escalation Techniques for Workplace Conflicts",
      description: "Practical strategies for defusing tension before it escalates into major conflicts.",
      duration: "42 min",
      date: "April 8, 2026",
      episode: 40,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
      plays: "3.1K",
    },
    {
      title: "The Role of Emotional Intelligence in Leadership",
      description: "How EQ shapes effective leadership and conflict management in modern organizations.",
      duration: "51 min",
      date: "April 1, 2026",
      episode: 39,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
      plays: "2.8K",
    },
    {
      title: "Cross-Cultural Mediation: Bridging Diverse Perspectives",
      description: "Navigate conflicts across cultural boundaries with sensitivity and effectiveness.",
      duration: "47 min",
      date: "March 25, 2026",
      episode: 38,
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
      plays: "2.2K",
    },
    {
      title: "Managing Team Dynamics in Remote Work Environments",
      description: "Addressing the unique challenges of virtual team conflicts and communication.",
      duration: "44 min",
      date: "March 18, 2026",
      episode: 37,
      image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=800&q=80",
      plays: "3.4K",
    },
    {
      title: "Psychological Safety: Creating Space for Difficult Conversations",
      description: "Learn how to foster an environment where people feel safe to express concerns and disagreements.",
      duration: "40 min",
      date: "March 11, 2026",
      episode: 36,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      plays: "2.9K",
    },
  ];

  const stats = [
    { label: "Total Episodes", value: "42" },
    { label: "Total Listeners", value: "50K+" },
    { label: "Average Rating", value: "4.9/5" },
    { label: "Countries", value: "85+" },
  ];

  return (
    <div>
      <section className="relative py-16 md:py-24 bg-[#1e3a5f] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Mic className="size-4" />
              <span className="text-sm font-medium">Podcast</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">The Conflict Resolution Podcast</h1>
            <p className="text-xl text-white/90">
              Expert insights and practical strategies for navigating conflict and building stronger relationships
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center"
              >
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-white/90 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-[#1e3a5f]/10 text-[#1e3a5f] px-4 py-2 rounded-full mb-4">
              <TrendingUp className="size-4" />
              <span className="text-sm font-medium">Latest Episode</span>
            </div>
          </div>

          <div className="bg-neutral-50 rounded-3xl overflow-hidden shadow-2xl mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative aspect-square lg:aspect-auto">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-[#1e3a5f] text-white rounded-full text-sm font-medium">
                    Episode {featured.episode}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
                  {featured.title}
                </h2>
                <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                  {featured.description}
                </p>
                <div className="flex items-center gap-6 text-neutral-500 mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="size-4" />
                    <span className="text-sm">{featured.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="size-4" />
                    <span className="text-sm">{featured.duration}</span>
                  </div>
                </div>
                <button className="inline-flex items-center gap-3 bg-[#e63946] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#d62828] transition-all w-fit">
                  <Play className="size-5 fill-current" />
                  Listen Now
                </button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-neutral-900">Recent Episodes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {episodes.map((episode, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={episode.image}
                      alt={episode.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="size-16 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform">
                        <Play className="size-7 text-[#1e3a5f] fill-current ml-1" />
                      </button>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-neutral-900">
                        Ep. {episode.episode}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="px-3 py-1 bg-[#1e3a5f]/90 backdrop-blur-sm rounded-full text-sm font-medium text-white flex items-center gap-1">
                        <Headphones className="size-3" />
                        {episode.plays}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-sm text-neutral-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="size-3" />
                        <span>{episode.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="size-3" />
                        <span>{episode.duration}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-neutral-900 group-hover:text-[#1e3a5f] transition-colors">
                      {episode.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed flex-1">
                      {episode.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-neutral-100 text-neutral-700 rounded-lg font-medium hover:bg-neutral-200 transition-colors">
              View All Episodes
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center">
            <div className="inline-flex items-center gap-2 bg-[#1e3a5f]/10 text-[#1e3a5f] px-4 py-2 rounded-full mb-6">
              <Headphones className="size-4" />
              <span className="text-sm font-medium">Subscribe</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900">
              Never Miss an Episode
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Get notified when new episodes are released and receive exclusive bonus content
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button className="px-8 py-3 bg-[#e63946] text-white rounded-lg font-semibold hover:bg-[#d62828] transition-all">
                Subscribe
              </button>
            </div>
            <div className="flex justify-center gap-4 flex-wrap">
              <button className="px-6 py-2 bg-neutral-100 text-neutral-700 rounded-lg font-medium hover:bg-neutral-200 transition-colors">
                Apple Podcasts
              </button>
              <button className="px-6 py-2 bg-neutral-100 text-neutral-700 rounded-lg font-medium hover:bg-neutral-200 transition-colors">
                Spotify
              </button>
              <button className="px-6 py-2 bg-neutral-100 text-neutral-700 rounded-lg font-medium hover:bg-neutral-200 transition-colors">
                Google Podcasts
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
