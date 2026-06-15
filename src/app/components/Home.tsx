import { Link } from "react-router";
import {
  ArrowRight,
  Shield,
  Users,
  MessageCircle,
  Award,
  Sparkles,
  BookOpen,
} from "lucide-react";

export function Home() {
  const features = [
    {
      icon: Shield,
      title: "Conflict Resolution",
      description:
        "Transform workplace conflicts into opportunities for growth and collaboration.",
    },
    {
      icon: Users,
      title: "Team Mediation",
      description:
        "Build stronger, more cohesive teams through effective communication strategies.",
    },
    {
      icon: MessageCircle,
      title: "Communication Coaching",
      description:
        "Master the art of difficult conversations with confidence and empathy.",
    },
  ];

  const services = [
    {
      title: "Individual Coaching",
      description:
        "One-on-one sessions tailored to your specific conflict resolution needs.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      tag: "Personal Growth",
    },
    {
      title: "Corporate Training",
      description:
        "Comprehensive workshops designed to build conflict resolution skills across your organization.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      tag: "Team Building",
    },
    {
      title: "Mediation Services",
      description:
        "Professional mediation to help parties reach mutually beneficial agreements.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
      tag: "Resolution",
    },
  ];

  return (
    <div>
      <section className="relative bg-[#1e3a5f] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="size-4" />
              <span className="text-sm font-medium">
                Family Life Practitioner
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Build a Foundation That Lasts
              <span className="block text-[#e63946]">
                For Your Love and Family
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Empowering individuals and couples to navigate life’s transitions,
              deepen emotional connection, and create a joyful, intentional
              home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/assessment"
                className="inline-flex items-center gap-2 bg-[#e63946] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#d62828] transition-all"
              >
                Book A Session
                <ArrowRight className="size-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-white border border-neutral-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="size-14 rounded-xl bg-[#1e3a5f] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="size-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-neutral-900">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
              Services Offered
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to meet your conflict resolution
              needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-neutral-900">
                      {service.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-neutral-900">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-[#e63946] font-medium hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#1e3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Award className="size-4" />
                <span className="text-sm font-medium">Proven Results</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Approach to Conflict?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Take the first step towards building stronger relationships and
                creating a more harmonious environment.
              </p>
              <Link
                to="/assessment"
                className="inline-flex items-center gap-2 bg-[#e63946] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#d62828] transition-all"
              >
                Book A Session
                <ArrowRight className="size-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-white/90">Clients Coached</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-white/90">Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-white/90">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-white/90">Organizations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#1e3a5f]/10 text-[#1e3a5f] px-4 py-2 rounded-full mb-4">
              <BookOpen className="size-4" />
              <span className="text-sm font-medium">Latest Resources</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
              From the Blog & Podcast
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Insights and strategies for effective conflict resolution
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Link
              to="/blog"
              className="group p-8 rounded-2xl bg-white border border-neutral-200 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="text-[#e63946] font-medium mb-2">
                Latest Article
              </div>
              <h3 className="text-2xl font-bold mb-3 text-neutral-900 group-hover:text-[#e63946] transition-colors">
                5 Steps to De-escalate Workplace Tension
              </h3>
              <p className="text-neutral-600 mb-4">
                Learn practical techniques to reduce tension and create a more
                productive work environment.
              </p>
              <span className="inline-flex items-center gap-2 text-[#e63946] font-medium group-hover:gap-3 transition-all">
                Read Article
                <ArrowRight className="size-4" />
              </span>
            </Link>
            <Link
              to="/podcast"
              className="group p-8 rounded-2xl bg-white border border-neutral-200 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="text-[#1e3a5f] font-medium mb-2">
                Latest Episode
              </div>
              <h3 className="text-2xl font-bold mb-3 text-neutral-900 group-hover:text-[#1e3a5f] transition-colors">
                The Art of Active Listening in Mediation
              </h3>
              <p className="text-neutral-600 mb-4">
                Discover how active listening transforms conflict resolution
                outcomes in this insightful episode.
              </p>
              <span className="inline-flex items-center gap-2 text-[#1e3a5f] font-medium group-hover:gap-3 transition-all">
                Listen Now
                <ArrowRight className="size-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
