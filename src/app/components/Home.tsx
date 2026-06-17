// import { Link } from "react-router";
// import {
//   ArrowRight,
//   Shield,
//   Users,
//   MessageCircle,
//   Award,
//   Sparkles,
//   BookOpen,
// } from "lucide-react";

// export function Home() {
//   const features = [
//     {
//       icon: Shield,
//       title: "Conflict Resolution",
//       description:
//         "Transform workplace conflicts into opportunities for growth and collaboration.",
//     },
//     {
//       icon: Users,
//       title: "Team Mediation",
//       description:
//         "Build stronger, more cohesive teams through effective communication strategies.",
//     },
//     {
//       icon: MessageCircle,
//       title: "Communication Coaching",
//       description:
//         "Master the art of difficult conversations with confidence and empathy.",
//     },
//   ];

//   const services = [
//     {
//       title: "Individual Coaching",
//       description:
//         "One-on-one sessions tailored to your specific conflict resolution needs.",
//       image:
//         "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
//       tag: "Personal Growth",
//     },
//     {
//       title: "Corporate Training",
//       description:
//         "Comprehensive workshops designed to build conflict resolution skills across your organization.",
//       image:
//         "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
//       tag: "Team Building",
//     },
//     {
//       title: "Mediation Services",
//       description:
//         "Professional mediation to help parties reach mutually beneficial agreements.",
//       image:
//         "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
//       tag: "Resolution",
//     },
//   ];

//   return (
//     <div>
//       <section className="relative bg-[#1e3a5f] text-white py-20 md:py-32 overflow-hidden">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="text-center max-w-4xl mx-auto">
//             <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
//               <Sparkles className="size-4" />
//               <span className="text-sm font-medium">
//                 Family Life Practitioner
//               </span>
//             </div>
//             <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//               Build a Foundation That Lasts
//               <span className="block text-[#e63946]">
//                 For Your Love and Family
//               </span>
//             </h1>
//             <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
//               Empowering individuals and couples to navigate life’s transitions,
//               deepen emotional connection, and create a joyful, intentional
//               home.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link
//                 to="/assessment"
//                 className="inline-flex items-center gap-2 bg-[#e63946] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#d62828] transition-all"
//               >
//                 Book A Session
//                 <ArrowRight className="size-5" />
//               </Link>
//               <Link
//                 to="/contact"
//                 className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all"
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 md:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {features.map((feature, index) => {
//               const Icon = feature.icon;
//               return (
//                 <div
//                   key={index}
//                   className="group p-8 rounded-2xl bg-white border border-neutral-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
//                 >
//                   <div className="size-14 rounded-xl bg-[#1e3a5f] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                     <Icon className="size-7 text-white" />
//                   </div>
//                   <h3 className="text-xl font-semibold mb-3 text-neutral-900">
//                     {feature.title}
//                   </h3>
//                   <p className="text-neutral-600 leading-relaxed">
//                     {feature.description}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       <section className="py-16 md:py-24 bg-neutral-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
//               Services Offered
//             </h2>
//             <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
//               Comprehensive solutions designed to meet your conflict resolution
//               needs
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
//               >
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-neutral-900">
//                       {service.tag}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-3 text-neutral-900">
//                     {service.title}
//                   </h3>
//                   <p className="text-neutral-600 mb-4 leading-relaxed">
//                     {service.description}
//                   </p>
//                   <Link
//                     to="/contact"
//                     className="inline-flex items-center gap-2 text-[#e63946] font-medium hover:gap-3 transition-all"
//                   >
//                     Learn More
//                     <ArrowRight className="size-4" />
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-16 md:py-24 bg-[#1e3a5f] text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
//                 <Award className="size-4" />
//                 <span className="text-sm font-medium">Proven Results</span>
//               </div>
//               <h2 className="text-3xl md:text-4xl font-bold mb-6">
//                 Ready to Transform Your Approach to Conflict?
//               </h2>
//               <p className="text-xl text-white/90 mb-8 leading-relaxed">
//                 Take the first step towards building stronger relationships and
//                 creating a more harmonious environment.
//               </p>
//               <Link
//                 to="/assessment"
//                 className="inline-flex items-center gap-2 bg-[#e63946] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#d62828] transition-all"
//               >
//                 Book A Session
//                 <ArrowRight className="size-5" />
//               </Link>
//             </div>
//             <div className="grid grid-cols-2 gap-6">
//               <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
//                 <div className="text-4xl font-bold mb-2">500+</div>
//                 <div className="text-white/90">Clients Coached</div>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
//                 <div className="text-4xl font-bold mb-2">95%</div>
//                 <div className="text-white/90">Success Rate</div>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
//                 <div className="text-4xl font-bold mb-2">15+</div>
//                 <div className="text-white/90">Years Experience</div>
//               </div>
//               <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
//                 <div className="text-4xl font-bold mb-2">100+</div>
//                 <div className="text-white/90">Organizations</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 md:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <div className="inline-flex items-center gap-2 bg-[#1e3a5f]/10 text-[#1e3a5f] px-4 py-2 rounded-full mb-4">
//               <BookOpen className="size-4" />
//               <span className="text-sm font-medium">Latest Resources</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
//               From the Blog & Podcast
//             </h2>
//             <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
//               Insights and strategies for effective conflict resolution
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//             <Link
//               to="/blog"
//               className="group p-8 rounded-2xl bg-white border border-neutral-200 hover:shadow-xl hover:-translate-y-1 transition-all"
//             >
//               <div className="text-[#e63946] font-medium mb-2">
//                 Latest Article
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-neutral-900 group-hover:text-[#e63946] transition-colors">
//                 5 Steps to De-escalate Workplace Tension
//               </h3>
//               <p className="text-neutral-600 mb-4">
//                 Learn practical techniques to reduce tension and create a more
//                 productive work environment.
//               </p>
//               <span className="inline-flex items-center gap-2 text-[#e63946] font-medium group-hover:gap-3 transition-all">
//                 Read Article
//                 <ArrowRight className="size-4" />
//               </span>
//             </Link>
//             <Link
//               to="/podcast"
//               className="group p-8 rounded-2xl bg-white border border-neutral-200 hover:shadow-xl hover:-translate-y-1 transition-all"
//             >
//               <div className="text-[#1e3a5f] font-medium mb-2">
//                 Latest Episode
//               </div>
//               <h3 className="text-2xl font-bold mb-3 text-neutral-900 group-hover:text-[#1e3a5f] transition-colors">
//                 The Art of Active Listening in Mediation
//               </h3>
//               <p className="text-neutral-600 mb-4">
//                 Discover how active listening transforms conflict resolution
//                 outcomes in this insightful episode.
//               </p>
//               <span className="inline-flex items-center gap-2 text-[#1e3a5f] font-medium group-hover:gap-3 transition-all">
//                 Listen Now
//                 <ArrowRight className="size-4" />
//               </span>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  Shield,
  Users,
  MessageCircle,
  Award,
  Sparkles,
  BookOpen,
  Loader2,
} from "lucide-react";
import { supabase } from "../../Supabase-Client/supabase";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  created_at: string;
}

interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  link: string;
  created_at: string;
}

export function Home() {
  const [latestPost, setLatestPost] = useState<BlogPost | null>(null);
  const [latestPodcast, setLatestPodcast] = useState<PodcastEpisode | null>(
    null,
  );
  const [loadingBlog, setLoadingBlog] = useState(true);
  const [loadingPodcast, setLoadingPodcast] = useState(true);

  useEffect(() => {
    const fetchLatestBlog = async () => {
      try {
        const { data, error } = await supabase
          .from("fds_blog")
          .select("id, title, excerpt, image, category, created_at")
          .order("created_at", { ascending: false })
          .limit(1)
          .single();

        if (error) throw error;
        setLatestPost(data);
      } catch (error) {
        console.error("Error fetching latest blog:", error);
      }
      setLoadingBlog(false);
    };

    const fetchLatestPodcast = async () => {
      try {
        const { data, error } = await supabase
          .from("fds_media")
          .select("id, title, description, link, created_at")
          .order("created_at", { ascending: false })
          .limit(1)
          .single();

        if (error) throw error;
        setLatestPodcast(data);
      } catch (error) {
        console.error("Error fetching latest podcast:", error);
      }
      setLoadingPodcast(false);
    };

    fetchLatestBlog();
    fetchLatestPodcast();
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Premarital Counselling",
      description:
        "Helping About-to-Wed couples build their marriage on a foundation of clarity, honesty, and understanding.",
    },
    {
      icon: Users,
      title: "Couples Therapy",
      description:
        "Helping Newly Married couples reconnect, communicate, and move from chaos back to calm.",
    },
    {
      icon: MessageCircle,
      title: "Individual Healing",
      description:
        "A dedicated 4-week online journey to process pain and rebuild emotional and mental calm.",
    },
  ];

  const services = [
    {
      title: "Free Consultation Call",
      description:
        "A free 30-minute call to talk through where you are and explore the right next step for you.",
      image:
        "https://res.cloudinary.com/dktrwqio1/image/upload/v1781734304/priscilla-du-preez-F9DFuJoS9EU-unsplash.jpg_regpl2.jpg",
      tag: "Personal Growth",
    },
    {
      title: "Premarital Counselling",
      description:
        "Focused online session to build a strong foundation for marriage.",
      image:
        "https://res.cloudinary.com/dktrwqio1/image/upload/v1781734303/sandy-millar-YeJWDWeIZho-unsplash_1.jpg_xi63pq.jpg",
      tag: "For Couples",
    },
    {
      title: "One-on-One Therapy",
      description:
        "A dedicated 4-week online journey to process pain and rebuild emotional and mental calm.",
      image:
        "https://res.cloudinary.com/dktrwqio1/image/upload/v1781734302/vitaly-gariev-m-82PNzgFq4-unsplash.jpg_bhnqia.jpg",
      tag: "Healing",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#1e3a5f] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
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
              Empowering individuals and couples to navigate life's transitions,
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

      {/* Features */}
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

      {/* Services */}
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

      {/* CTA */}
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

      {/* Latest Blog & Podcast */}
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
            {/* Latest Blog Post */}
            {/* <Link
              to="/blog"
              className="group p-8 rounded-2xl bg-white border border-neutral-200 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="text-[#e63946] font-medium mb-2">
                Latest Article
              </div>
              {loadingBlog ? (
                <div className="flex items-center gap-2 text-neutral-400 py-4">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Loading...</span>
                </div>
              ) : latestPost ? (
                <>
                  {latestPost.image && (
                    <div className="aspect-video rounded-xl overflow-hidden mb-4">
                      <img
                        src={latestPost.image}
                        alt={latestPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  {latestPost.category && (
                    <span className="text-xs font-medium text-[#1e3a5f] bg-[#1e3a5f]/10 px-2 py-1 rounded-full mb-2 inline-block">
                      {latestPost.category}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold mb-3 text-neutral-900 group-hover:text-[#e63946] transition-colors">
                    {latestPost.title}
                  </h3>
                  {latestPost.excerpt && (
                    <p className="text-neutral-600 mb-4 line-clamp-2">
                      {latestPost.excerpt}
                    </p>
                  )}
                </>
              ) : (
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-neutral-900 group-hover:text-[#e63946] transition-colors">
                    No articles yet
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    Check back soon for new content.
                  </p>
                </div>
              )}
              <span className="inline-flex items-center gap-2 text-[#e63946] font-medium group-hover:gap-3 transition-all">
                Read Article
                <ArrowRight className="size-4" />
              </span>
            </Link> */}
            <Link to="/blog" className="group block">
              {loadingBlog ? (
                <div className="h-64 rounded-2xl bg-neutral-100 flex items-center justify-center">
                  <Loader2 className="w-6 h-6 animate-spin text-neutral-400" />
                </div>
              ) : latestPost ? (
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  {latestPost.image ? (
                    <img
                      src={latestPost.image}
                      alt={latestPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#1e3a5f]" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      {latestPost.category && (
                        <span className="px-3 py-1 bg-[#1e3a5f] text-white rounded-full text-xs font-medium">
                          {latestPost.category}
                        </span>
                      )}
                      <span className="text-white/70 text-xs">
                        Latest Article
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-lg leading-snug mb-2 group-hover:text-[#e63946] transition-colors line-clamp-2">
                      {latestPost.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-white/80 text-sm font-medium group-hover:gap-2 transition-all">
                      Read Article
                      <ArrowRight className="size-3" />
                    </span>
                  </div>
                </div>
              ) : (
                <div className="h-64 rounded-2xl bg-[#1e3a5f] flex items-center justify-center">
                  <p className="text-white/70 text-sm">No articles yet</p>
                </div>
              )}
            </Link>

            {/* Latest Podcast */}
            {/* <div className="group p-8 rounded-2xl bg-white border border-neutral-200 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="text-[#1e3a5f] font-medium mb-2">
                Latest Episode
              </div>
              {loadingPodcast ? (
                <div className="flex items-center gap-2 text-neutral-400 py-4">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Loading...</span>
                </div>
              ) : latestPodcast ? (
                <>
                  <h3 className="text-2xl font-bold mb-3 text-neutral-900 group-hover:text-[#1e3a5f] transition-colors">
                    {latestPodcast.title}
                  </h3>
                  {latestPodcast.description && (
                    <p className="text-neutral-600 mb-4 line-clamp-2">
                      {latestPodcast.description}
                    </p>
                  )}
                  {latestPodcast.link && (
                    <a
                      href={latestPodcast.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 text-[#1e3a5f] font-medium group-hover:gap-3 transition-all"
                    >
                      Listen Now
                      <ArrowRight className="size-4" />
                    </a>
                  )}
                </>
              ) : (
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-neutral-900">
                    No episodes yet
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    Check back soon for new episodes.
                  </p>
                  <Link
                    to="/podcast"
                    className="inline-flex items-center gap-2 text-[#1e3a5f] font-medium group-hover:gap-3 transition-all"
                  >
                    Visit Podcast Page
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              )}
            </div> */}
            {loadingPodcast ? (
              <div className="h-64 rounded-2xl bg-neutral-100 flex items-center justify-center">
                <Loader2 className="w-6 h-6 animate-spin text-neutral-400" />
              </div>
            ) : latestPodcast ? (
              <a
                href={latestPodcast.link || "/podcast"}
                target={latestPodcast.link ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="group block relative h-64 rounded-2xl overflow-hidden shadow-lg bg-[#1e3a5f]"
              >
                {/* Background pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-[#e63946] text-white rounded-full text-xs font-medium">
                      Latest Episode
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug mb-2 group-hover:text-[#e63946] transition-colors line-clamp-2">
                    {latestPodcast.title}
                  </h3>
                  {latestPodcast.description && (
                    <p className="text-white/70 text-sm line-clamp-1 mb-2">
                      {latestPodcast.description}
                    </p>
                  )}
                  <span className="inline-flex items-center gap-1 text-white/80 text-sm font-medium group-hover:gap-2 transition-all">
                    Listen Now
                    <ArrowRight className="size-3" />
                  </span>
                </div>
              </a>
            ) : (
              <Link
                to="/podcast"
                className="group h-64 rounded-2xl bg-[#1e3a5f] flex items-center justify-center"
              >
                <p className="text-white/70 text-sm">No episodes yet</p>
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
