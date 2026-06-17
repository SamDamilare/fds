// import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
// import {NewspaperPublications} from './NewspaperPublications';

// export function Blog() {
//   const featured = {
//     title: "The Art of De-escalation: 5 Proven Techniques for Workplace Conflicts",
//     excerpt: "Learn how to transform tense situations into productive conversations with these evidence-based strategies that have helped thousands of professionals.",
//     image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
//     category: "Workplace",
//     date: "April 15, 2026",
//     readTime: "8 min read",
//   };

//   const articles = [
//     {
//       title: "Understanding the Root Causes of Team Conflict",
//       excerpt: "Dive deep into the underlying factors that create tension within teams and how to address them effectively.",
//       image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
//       category: "Team Dynamics",
//       date: "April 12, 2026",
//       readTime: "6 min read",
//     },
//     {
//       title: "The Power of Active Listening in Mediation",
//       excerpt: "Discover how mastering active listening can transform your approach to conflict resolution.",
//       image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
//       category: "Communication",
//       date: "April 8, 2026",
//       readTime: "5 min read",
//     },
//     {
//       title: "Building Emotional Intelligence for Better Conflict Resolution",
//       excerpt: "Explore the connection between EQ and effective conflict management in professional settings.",
//       image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80",
//       category: "Personal Growth",
//       date: "April 5, 2026",
//       readTime: "7 min read",
//     },
//     {
//       title: "Cross-Cultural Conflict Resolution Strategies",
//       excerpt: "Navigate conflicts in diverse environments with cultural sensitivity and awareness.",
//       image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
//       category: "Culture",
//       date: "April 1, 2026",
//       readTime: "6 min read",
//     },
//     {
//       title: "Preventing Burnout Through Healthy Workplace Boundaries",
//       excerpt: "Learn how to set and maintain boundaries that protect your wellbeing while fostering collaboration.",
//       image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
//       category: "Wellness",
//       date: "March 28, 2026",
//       readTime: "5 min read",
//     },
//     {
//       title: "Transforming Difficult Conversations into Opportunities",
//       excerpt: "Master the art of navigating challenging discussions with confidence and empathy.",
//       image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
//       category: "Leadership",
//       date: "March 24, 2026",
//       readTime: "8 min read",
//     },
//   ];

//   const categories = [
//     "All Articles",
//     "Workplace",
//     "Team Dynamics",
//     "Communication",
//     "Leadership",
//     "Personal Growth",
//     "Culture",
//     "Wellness",
//   ];

//   return (
//     <div>
//       <section className="relative py-16 md:py-24 bg-[#1e3a5f] text-white overflow-hidden">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="text-center max-w-3xl mx-auto">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Insights</h1>
//             <p className="text-xl text-white/90">
//               Expert perspectives on conflict resolution, communication, and building stronger relationships
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 md:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="mb-12">
//             <div className="flex flex-wrap gap-3 justify-center">
//               {categories.map((category, index) => (
//                 <button
//                   key={index}
//                   className={`px-4 py-2 rounded-lg font-medium transition-all ${
//                     index === 0
//                       ? "bg-[#e63946] text-white"
//                       : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
//                   }`}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="mb-16">
//             <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
//               <div className="aspect-[21/9] relative">
//                 <img
//                   src={featured.image}
//                   alt={featured.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
//               </div>
//               <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
//                 <div className="max-w-3xl">
//                   <div className="flex items-center gap-4 mb-4">
//                     <span className="px-3 py-1 bg-[#1e3a5f] text-white rounded-full text-sm font-medium">
//                       {featured.category}
//                     </span>
//                     <span className="text-white/80 text-sm">Featured Article</span>
//                   </div>
//                   <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//                     {featured.title}
//                   </h2>
//                   <p className="text-xl text-white/90 mb-6 leading-relaxed">
//                     {featured.excerpt}
//                   </p>
//                   <div className="flex items-center gap-6 text-white/80 mb-6">
//                     <div className="flex items-center gap-2">
//                       <Calendar className="size-4" />
//                       <span className="text-sm">{featured.date}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Clock className="size-4" />
//                       <span className="text-sm">{featured.readTime}</span>
//                     </div>
//                   </div>
//                   <button className="inline-flex items-center gap-2 bg-[#e63946] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d62828] transition-all">
//                     Read Full Article
//                     <ArrowRight className="size-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {articles.map((article, index) => (
//               <article
//                 key={index}
//                 className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
//               >
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={article.image}
//                     alt={article.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-neutral-900 flex items-center gap-1">
//                       <Tag className="size-3" />
//                       {article.category}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="p-6 flex-1 flex flex-col">
//                   <div className="flex items-center gap-4 text-sm text-neutral-500 mb-3">
//                     <div className="flex items-center gap-1">
//                       <Calendar className="size-3" />
//                       <span>{article.date}</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <Clock className="size-3" />
//                       <span>{article.readTime}</span>
//                     </div>
//                   </div>
//                   <h3 className="text-xl font-semibold mb-3 text-neutral-900 group-hover:text-[#e63946] transition-colors">
//                     {article.title}
//                   </h3>
//                   <p className="text-neutral-600 mb-4 leading-relaxed flex-1">
//                     {article.excerpt}
//                   </p>
//                   <button className="inline-flex items-center gap-2 text-[#e63946] font-medium group-hover:gap-3 transition-all">
//                     Read More
//                     <ArrowRight className="size-4" />
//                   </button>
//                 </div>
//               </article>
//             ))}
//           </div>

//           <div className="mt-12 text-center">
//             <button className="px-8 py-3 bg-neutral-100 text-neutral-700 rounded-lg font-medium hover:bg-neutral-200 transition-colors">
//               Load More Articles
//             </button>
//           </div>
//         </div>
//       </section>

//       <section >
//         <NewspaperPublications />
//       </section>

//       <section className="py-16 md:py-24 bg-neutral-50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900">
//             Stay Updated
//           </h2>
//           <p className="text-lg text-neutral-600 mb-8">
//             Subscribe to get the latest insights on conflict resolution delivered to your inbox
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="flex-1 px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
//             />
//             <button className="px-8 py-3 bg-[#e63946] text-white rounded-lg font-semibold hover:bg-[#d62828] transition-colors">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { Calendar, Clock, ArrowRight, Tag, Loader2 } from "lucide-react";
import { NewspaperPublications } from "./NewspaperPublications";
// import ReactMarkdown from "react-markdown";
import { supabase } from "../../Supabase-Client/supabase";

interface BlogPost {
  id: string;
  created_at: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string;
  image: string;
  meta_title: string;
  meta_desc: string;
}

export function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const categories = [
    "All Articles",
    "Marriage & Relationships",
    "Personal Growth & Healing",
    "Personal Growth & Faith",
    "Mental Wellness & Healing",
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("fds_blog")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setPosts(data);
      } catch (error: any) {
        console.error("Error fetching posts:", error);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const filteredPosts =
    activeCategory === "All Articles"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const featured = filteredPosts[0];
  const articles = filteredPosts.slice(1);

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  // Full post modal
  if (selectedPost) {
    return (
      <div className="min-h-screen bg-neutral-50">
        {/* Modal Header */}
        <div className="bg-[#1e3a5f] text-white py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setSelectedPost(null)}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              ← Back to Blog
            </button>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4 inline-block">
              {selectedPost.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {selectedPost.title}
            </h1>
            <div className="flex items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="size-4" />
                <span className="text-sm">
                  {formatDate(selectedPost.created_at)}
                </span>
              </div>
              {selectedPost.author && (
                <span className="text-sm">By {selectedPost.author}</span>
              )}
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {selectedPost.image && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {selectedPost.excerpt && (
              <p className="text-xl text-neutral-600 font-medium mb-8 pb-8 border-b border-neutral-200 leading-relaxed">
                {selectedPost.excerpt}
              </p>
            )}
            <div
              className="prose prose-lg max-w-none text-neutral-700 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-6 [&_h2]:mb-3 [&_strong]:font-bold [&_em]:italic [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-3 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-3 [&_blockquote]:border-l-4 [&_blockquote]:border-[#1e3a5f] [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_p]:mb-3 [&_li]:mb-1"
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            />
            {/* <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed whitespace-pre-wrap">
              {selectedPost.content}
            </div> */}
            {/* <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed">
              <ReactMarkdown
                components={{
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-semibold text-neutral-900 mt-6 mb-3">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-neutral-700 leading-relaxed mb-4">
                      {children}
                    </p>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-bold text-neutral-900">
                      {children}
                    </strong>
                  ),
                  em: ({ children }) => (
                    <em className="italic text-neutral-700">{children}</em>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside space-y-2 mb-4 text-neutral-700">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside space-y-2 mb-4 text-neutral-700">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-neutral-700">{children}</li>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-[#1e3a5f] pl-4 italic text-neutral-600 my-4">
                      {children}
                    </blockquote>
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      className="text-[#e63946] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  ),
                }}
              >
                {selectedPost.content}
              </ReactMarkdown>
            </div> */}
            npm install @tailwindcss/typography
            {/* Tags */}
            {selectedPost.tags && (
              <div className="mt-8 pt-8 border-t border-neutral-200">
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.split(",").map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-sm"
                    >
                      #{tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => setSelectedPost(null)}
              className="px-8 py-3 bg-[#1e3a5f] text-white rounded-lg font-medium hover:bg-[#162d4a] transition-colors"
            >
              ← Back to Blog
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-[#1e3a5f] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Blog & Insights
            </h1>
            <p className="text-xl text-white/90">
              Expert perspectives on conflict resolution, communication, and
              building stronger relationships
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeCategory === category
                      ? "bg-[#e63946] text-white"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Loading */}
          {loading ? (
            <div className="flex items-center justify-center py-24">
              <Loader2 className="w-8 h-8 animate-spin text-[#1e3a5f]" />
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-24 text-neutral-500">
              No posts found in this category yet.
            </div>
          ) : (
            <>
              {/* Featured Post */}
              {featured && (
                <div className="mb-16">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                    <div className="aspect-[21/9] relative">
                      {featured.image ? (
                        <img
                          src={featured.image}
                          alt={featured.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#1e3a5f]" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                      <div className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="px-3 py-1 bg-[#1e3a5f] text-white rounded-full text-sm font-medium">
                            {featured.category || "General"}
                          </span>
                          <span className="text-white/80 text-sm">
                            Featured Article
                          </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                          {featured.title}
                        </h2>
                        {featured.excerpt && (
                          <p className="text-xl text-white/90 mb-6 leading-relaxed">
                            {featured.excerpt}
                          </p>
                        )}
                        <div className="flex items-center gap-6 text-white/80 mb-6">
                          <div className="flex items-center gap-2">
                            <Calendar className="size-4" />
                            <span className="text-sm">
                              {formatDate(featured.created_at)}
                            </span>
                          </div>
                          {featured.author && (
                            <span className="text-sm">
                              By {featured.author}
                            </span>
                          )}
                        </div>
                        <button
                          onClick={() => setSelectedPost(featured)}
                          className="inline-flex items-center gap-2 bg-[#e63946] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d62828] transition-all"
                        >
                          Read Full Article
                          <ArrowRight className="size-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Articles Grid */}
              {articles.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {articles.map((article) => (
                    <article
                      key={article.id}
                      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                    >
                      <div className="relative h-48 overflow-hidden">
                        {article.image ? (
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-[#1e3a5f]/20 flex items-center justify-center">
                            <span className="text-[#1e3a5f] font-medium">
                              {article.category || "Article"}
                            </span>
                          </div>
                        )}
                        {article.category && (
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-neutral-900 flex items-center gap-1">
                              <Tag className="size-3" />
                              {article.category}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-4 text-sm text-neutral-500 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="size-3" />
                            <span>{formatDate(article.created_at)}</span>
                          </div>
                          {article.author && (
                            <span className="text-sm">By {article.author}</span>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-neutral-900 group-hover:text-[#e63946] transition-colors">
                          {article.title}
                        </h3>
                        {article.excerpt && (
                          <p className="text-neutral-600 mb-4 leading-relaxed flex-1">
                            {article.excerpt}
                          </p>
                        )}
                        <button
                          onClick={() => setSelectedPost(article)}
                          className="inline-flex items-center gap-2 text-[#e63946] font-medium group-hover:gap-3 transition-all"
                        >
                          Read More
                          <ArrowRight className="size-4" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <section>
        <NewspaperPublications />
      </section>

      {/* Subscribe */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900">
            Stay Updated
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Subscribe to get the latest insights on conflict resolution
            delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
            <button className="px-8 py-3 bg-[#e63946] text-white rounded-lg font-semibold hover:bg-[#d62828] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
