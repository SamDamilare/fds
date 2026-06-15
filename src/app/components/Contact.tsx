// import { Mail, Phone, MapPin, Send, Clock, CheckCircle, MessageCircle } from "lucide-react";
// import { useState } from "react";

// export function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setTimeout(() => setSubmitted(false), 3000);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const contactMethods = [
//     {
//       icon: Mail,
//       title: "Email",
//       value: "info@fisayodayosamuel.com",
//       description: "Reach out anytime",
//     },
//     {
//       icon: Phone,
//       title: "Phone",
//       value: "+234 XXX XXX XXXX",
//       description: "Mon-Fri, 9AM-5PM WAT",
//     },
//     {
//       icon: MapPin,
//       title: "Location",
//       value: "Lagos, Nigeria",
//       description: "Available for virtual & in-person",
//     },
//   ];

//   const services = [
//     "Individual Coaching",
//     "Team Mediation",
//     "Corporate Training",
//     "Conflict Resolution Workshop",
//     "Executive Coaching",
//     "Other",
//   ];

//   return (
//     <div>
//       <section className="relative py-16 md:py-24 bg-[#1e3a5f] text-white overflow-hidden">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="text-center max-w-3xl mx-auto">
//             <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
//               <MessageCircle className="size-4" />
//               <span className="text-sm font-medium">Get in Touch</span>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h1>
//             <p className="text-xl text-white/90">
//               Ready to transform conflict into opportunity? Reach out today to start your journey
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 md:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//             {contactMethods.map((method, index) => {
//               const Icon = method.icon;
//               return (
//                 <div
//                   key={index}
//                   className="group p-8 rounded-2xl bg-white border border-neutral-200 hover:shadow-xl hover:-translate-y-1 transition-all"
//                 >
//                   <div className="size-14 rounded-xl bg-[#1e3a5f] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                     <Icon className="size-7 text-white" />
//                   </div>
//                   <h3 className="text-lg font-semibold mb-2 text-neutral-900">{method.title}</h3>
//                   <p className="text-neutral-900 font-medium mb-1">{method.value}</p>
//                   <p className="text-neutral-600 text-sm">{method.description}</p>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             <div>
//               <div className="inline-flex items-center gap-2 bg-[#1e3a5f]/10 text-[#1e3a5f] px-4 py-2 rounded-full mb-6">
//                 <Send className="size-4" />
//                 <span className="text-sm font-medium">Send a Message</span>
//               </div>
//               <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900">
//                 How Can I Help You?
//               </h2>
//               <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
//                 Fill out the form and I'll get back to you within 24 hours. Whether you're looking for individual coaching, team mediation, or corporate training, I'm here to help you navigate conflict with confidence.
//               </p>
//               <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
//                 <div className="flex items-start gap-4">
//                   <div className="size-12 rounded-lg bg-[#1e3a5f] flex items-center justify-center flex-shrink-0">
//                     <Clock className="size-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-neutral-900 mb-2">Response Time</h3>
//                     <p className="text-neutral-600">
//                       I typically respond within 24 hours during business days. For urgent matters, please call directly.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl shadow-2xl p-8">
//               {submitted ? (
//                 <div className="text-center py-12">
//                   <div className="size-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
//                     <CheckCircle className="size-10 text-green-600" />
//                   </div>
//                   <h3 className="text-2xl font-bold mb-2 text-neutral-900">Message Sent!</h3>
//                   <p className="text-neutral-600">
//                     Thank you for reaching out. I'll get back to you within 24 hours.
//                   </p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       required
//                       value={formData.name}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] transition-all"
//                       placeholder="John Doe"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       required
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] transition-all"
//                       placeholder="john@example.com"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
//                       Phone Number
//                     </label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] transition-all"
//                       placeholder="+234 XXX XXX XXXX"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
//                       Service Interested In *
//                     </label>
//                     <select
//                       id="service"
//                       name="service"
//                       required
//                       value={formData.service}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] transition-all"
//                     >
//                       <option value="">Select a service</option>
//                       {services.map((service, index) => (
//                         <option key={index} value={service}>
//                           {service}
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
//                       Message *
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       required
//                       value={formData.message}
//                       onChange={handleChange}
//                       rows={5}
//                       className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] transition-all resize-none"
//                       placeholder="Tell me about your situation and how I can help..."
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full inline-flex items-center justify-center gap-3 bg-[#e63946] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#d62828] transition-all"
//                   >
//                     Send Message
//                     <Send className="size-5" />
//                   </button>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 md:py-24 bg-neutral-50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900">
//             Prefer a Quick Assessment First?
//           </h2>
//           <p className="text-lg text-neutral-600 mb-8">
//             Not sure where to start? Take our free conflict resolution assessment to understand your current situation and get personalized recommendations.
//           </p>
//           <a
//             href="/assessment"
//             className="inline-flex items-center gap-2 bg-[#e63946] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#d62828] transition-all"
//           >
//             Take Free Assessment
//             <CheckCircle className="size-5" />
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// }

import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

import { useState } from "react";

// IMPORT YOUR EXISTING SUPABASE CLIENT
import { supabase } from "../../Supabase-Client/supabase";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  /* =========================
     HANDLE CHANGE
  ========================= */

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* =========================
     HANDLE SUBMIT
  ========================= */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const { error } = await supabase.from("fds_contact").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
      ]);

      if (error) {
        console.error("SUPABASE ERROR:", error);

        alert("Failed to send message");

        setLoading(false);

        return;
      }

      setSubmitted(true);

      // RESET FORM
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      // HIDE SUCCESS MESSAGE
      setTimeout(() => {
        setSubmitted(false);
      }, 10000);
    } catch (error) {
      console.error("ERROR:", error);

      alert("Something went wrong");
    }

    setLoading(false);
  };

  /* =========================
     CONTACT INFO
  ========================= */

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "fisayofds@gmail.com",
      description: "Reach out anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+234 XXX XXX XXXX",
      description: "Mon-Fri, 9AM-5PM WAT",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "United Kingdom",
      description: "Available for virtual & in-person",
    },
  ];

  const services = [
    "Counselling",
    "Pre-Marital Counselling",
    "Speaking Engagements",
    "Therapy Sessions",
    "Collaborations",
    "Other",
  ];

  return (
    <div>
      {/* HERO */}

      <section className="relative py-16 md:py-24 bg-[#1e3a5f] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MessageCircle className="size-4" />

              <span className="text-sm font-medium">Get in Touch</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Work Together
            </h1>

            <p className="text-xl text-white/90">
              Ready to transform conflict into opportunity?
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* CONTACT CARDS */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;

              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-white border border-neutral-200 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="size-14 rounded-xl bg-[#1e3a5f] flex items-center justify-center mb-6">
                    <Icon className="size-7 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold mb-2 text-neutral-900">
                    {method.title}
                  </h3>

                  <p className="text-neutral-900 font-medium mb-1">
                    {method.value}
                  </p>

                  <p className="text-neutral-600 text-sm">
                    {method.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* MAIN GRID */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT */}

            <div>
              <div className="inline-flex items-center gap-2 bg-[#1e3a5f]/10 text-[#1e3a5f] px-4 py-2 rounded-full mb-6">
                <Send className="size-4" />

                <span className="text-sm font-medium">Send a Message</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900">
                How Can I Help You?
              </h2>

              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Fill out the form and I'll get back to you within 24 hours.
              </p>

              <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-lg bg-[#1e3a5f] flex items-center justify-center flex-shrink-0">
                    <Clock className="size-6 text-white" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">
                      Response Time
                    </h3>

                    <p className="text-neutral-600">
                      I typically respond within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="size-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="size-10 text-green-600" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-neutral-900">
                    Message Sent!
                  </h3>

                  <p className="text-neutral-600">
                    Thank you for reaching out.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* NAME */}

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* EMAIL */}

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>

                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* PHONE */}

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>

                  {/* SERVICE */}

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Service Interested In *
                    </label>

                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]"
                    >
                      <option value="">Select a service</option>

                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* MESSAGE */}

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Message *
                    </label>

                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] resize-none"
                      placeholder="Tell me about your situation..."
                    />
                  </div>

                  {/* BUTTON */}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-3 bg-[#e63946] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#d62828] transition-all disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send Message"}

                    <Send className="size-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
