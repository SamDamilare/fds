import { Link } from "react-router";
import {
  Award,
  BookOpen,
  Briefcase,
  Heart,
  Target,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Empathy First",
      description:
        "Understanding all perspectives is the foundation of resolution.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focused on achieving tangible, lasting outcomes.",
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Building solutions together, not imposing them.",
    },
    {
      icon: CheckCircle,
      title: "Evidence-Based",
      description: "Utilizing proven methodologies and best practices.",
    },
  ];

  const expertise = [
    "Workplace Conflict Resolution",
    "Team Dynamics & Communication",
    "Leadership Development",
    "Emotional Intelligence Training",
    "Negotiation & Mediation",
    "Organizational Change Management",
    "Cross-Cultural Communication",
    "Crisis Intervention",
  ];

  const certifications = [
    {
      name: "Practitioner of Family Systems Engineering",
      org: "Institute of Family Systems Engineering and Development",
    },
    {
      name: "Cognitive Reprogramming and Basic Family Life Therapy",
      org: "Resurged Mind Company",
    },
    {
      name: "TQUK Level 2 Certificate in Counselling Skills (RQF)",
      org: "Training Qualifications UK / The Skills Network ",
    },
    {
      name: "Certified Mediator",
      org: "International Mediation Campus / International Mediation Institute (IMI)",
    },
    {
      name: "Master's Degree In Communications",
      org: "University of Lincoln",
    },
  ];

  return (
    <div>
      <section className="relative py-16 md:py-24 bg-[#1e3a5f] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Fisayo Dayo Samuel
            </h1>
            <p className="text-xl text-neutral-300">Family Life Practitioner</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dktrwqio1/image/upload/v1778493050/FDS/aiease_1753340209542-Photoroom_p8yvsv.png"
                  alt="Fisayo Dayo Samuel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#1e3a5f] text-white p-8 rounded-2xl shadow-xl max-w-xs">
                <div className="text-4xl font-bold mb-1">7+</div>
                <div className="text-white/90">
                  Years of Experience in Conflict Resolution
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-[#1e3a5f]/10 text-[#1e3a5f] px-4 py-2 rounded-full mb-6">
                <BookOpen className="size-4" />
                <span className="text-sm font-medium">My Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900">
                Transforming Conflict into Collaboration
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Fisayo Dayo-Samuel is a certified Family Life Practitioner,
                  Therapist, and Author with over seven years of experience
                  helping individuals and couples move from crisis and chaos
                  into clarity, calm, and deep connection.
                </p>
                <p>
                  She is the creator of Deeply Connected Couples, a programme
                  that helps couples reconnect and re-open their hearts to reach
                  new levels of closeness, communication, and commitment.
                </p>
                <p>
                  She is also the author of When Two Worlds Meet and You Are the
                  Home You Never Leave, two practical, soul-stirring resources
                  for anyone on a journey toward wholeness.
                </p>
                <p>
                  Her work is rooted in the belief that peace is not a distant
                  dream. It is a state you can build, one page, one step, one
                  choice at a time.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-8 bg-[#e63946] text-white px-6 py-3 rounded-lg hover:bg-[#d62828] transition-all"
              >
                Work With Me
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
              Core Values
            </h2>
            <p className="text-lg text-neutral-600">
              The principles that guide my work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
                >
                  <div className="size-14 rounded-xl bg-[#1e3a5f] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="size-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-neutral-900">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#1e3a5f]/10 text-[#1e3a5f] px-4 py-2 rounded-full mb-6">
                <Briefcase className="size-4" />
                <span className="text-sm font-medium">Areas of Expertise</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-neutral-900">
                Specialized Skills & Knowledge
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {expertise.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white border border-neutral-200"
                  >
                    <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-[#1e3a5f]/10 text-[#1e3a5f] px-4 py-2 rounded-full mb-6">
                <Award className="size-4" />
                <span className="text-sm font-medium">
                  Certifications & Education
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-neutral-900">
                Professional Credentials
              </h2>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="group p-6 rounded-2xl bg-white border border-neutral-200 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-lg bg-[#1e3a5f] flex items-center justify-center flex-shrink-0">
                        <Award className="size-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-neutral-900 mb-1">
                          {cert.name}
                        </h3>
                        <p className="text-neutral-600">{cert.org}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#1e3a5f] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's work together to transform conflict into opportunity and build
            stronger relationships.
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
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
