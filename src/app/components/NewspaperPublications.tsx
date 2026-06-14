// 'use client'

// import { ExternalLink } from 'lucide-react'

// interface Publication {
//   publication: string
//   date?: string
//   title: string
//   url: string
// }

// const publications: Publication[] = [
//   {
//     publication: 'The Guardian Nigeria',
//     date: 'December 25, 2025',
//     title: 'Nigerian Therapist Releases Reflective Healing Journal',
//     url: 'https://guardian.ng/news/nigerian-therapist-releases-reflective-healing-journal/',
//   },
//   {
//     publication: 'Yessiey Magazine',
//     date: 'December 26, 2025',
//     title: 'Nigerian Therapist Fisayo Dayo-Samuel Releases Reflective Healing Journal',
//     url: 'https://yessiey.com/nigerian-therapist-fisayo-dayo-samuel-releases-reflective-healing-journal/',
//   },
//   {
//     publication: 'Our Generator World',
//     date: 'To be confirmed',
//     title: '',
//     url: 'https://www.ourgeneratorworld.com/archives/23664',
//   },
//   {
//     publication: 'UMI for Mothers (Beehiiv Spotlight)',
//     date: 'To be confirmed',
//     title: '',
//     url: 'https://umiformothers.beehiiv.com/p/umi-spotlight-fisayo-dayo-samuel',
//   },
// ]

// export function NewspaperPublications() {
//   const handleRedirect = (url: string) => {
//     window.open(url, '_blank', 'noopener,noreferrer')
//   }

//   return (
//     <section className="w-full py-16 md:py-24 bg-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <h2 className="mb-12 text-3xl md:text-4xl font-bold text-neutral-900">
//           Featured in the Press
//         </h2>

//         <div className="max-h-96 space-y-4 overflow-y-auto">
//           {publications.map((pub, idx) => (
//             <div
//               key={idx}
//               className="flex items-start justify-between gap-6 rounded-2xl bg-white border border-neutral-200 p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
//             >
//               <div className="min-w-0 flex-1 space-y-3">
//                 {pub.title && (
//                   <p className="text-xl font-semibold text-neutral-900 group-hover:text-[#e63946] transition-colors">
//                     {pub.title}
//                   </p>
//                 )}

//                 <div className="flex items-center gap-2 text-sm text-neutral-600">
//                   <span className="font-medium">{pub.publication}</span>
//                   {pub.date && <span>•</span>}
//                   {pub.date && <span>{pub.date}</span>}
//                 </div>
//               </div>

//               <button
//                 onClick={() => handleRedirect(pub.url)}
//                 className="mt-1 flex-shrink-0 rounded-lg p-2 transition-all hover:bg-[#e63946]/10"
//                 aria-label={`Open ${pub.publication} article`}
//               >
//                 <ExternalLink className="h-5 w-5 text-[#1e3a5f] group-hover:text-[#e63946] transition-colors" />
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


'use client'

import { ExternalLink } from 'lucide-react'

interface Publication {
  publication: string
  date?: string
  title: string
  url: string
}

const publications: Publication[] = [
  {
    publication: 'The Guardian Nigeria',
    date: 'December 25, 2025',
    title: 'Nigerian Therapist Releases Reflective Healing Journal',
    url: 'https://guardian.ng/news/nigerian-therapist-releases-reflective-healing-journal/',
  },
  {
    publication: 'Yessiey Magazine',
    date: 'December 26, 2025',
    title: 'Nigerian Therapist Fisayo Dayo-Samuel Releases Reflective Healing Journal',
    url: 'https://yessiey.com/nigerian-therapist-fisayo-dayo-samuel-releases-reflective-healing-journal/',
  },
  {
    publication: 'Our Generator World',
    date: 'December 27, 2025',
    title: 'Therapist Fisayo Dayo-Samuel Releases Healing Journal to Help Nigerians Reconnect and Find Inner Peace',
    url: 'https://www.ourgeneratorworld.com/archives/23664',
  },
  {
    publication: 'UMI for Mothers (Beehiiv Spotlight)',
    date: 'November 2, 2023',
    title: 'Umi Spotlight: Fisayo Dayo-Samuel',
    url: 'https://umiformothers.beehiiv.com/p/umi-spotlight-fisayo-dayo-samuel',
  },
]

export function NewspaperPublications() {
  const handleRedirect = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      {/* Centralized the wrapper max width */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="mb-12 text-3xl md:text-4xl font-bold text-neutral-900">
          Featured in the Press
        </h2>

        {/* - h-[340px]: Displays exactly two items cleanly
          - overflow-hidden hover:overflow-y-auto: Toggles visibility on hover
          - [&::-webkit-scrollbar]:hidden / [scrollbar-width:none]: Hides standard scrollbar look
        */}
        <div className="h-[340px] overflow-hidden hover:overflow-y-auto pr-2 space-y-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden transition-all">
          {publications.map((pub, idx) => (
            <div
              key={idx}
              onClick={() => handleRedirect(pub.url)}
              className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4 rounded-2xl bg-white border border-neutral-200 p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              <div className="min-w-0 flex-1 space-y-2 w-full text-center sm:text-left">
                {pub.title && (
                  <p className="text-xl font-semibold text-neutral-900 group-hover:text-[#e63946] transition-colors line-clamp-2">
                    {pub.title}
                  </p>
                )}

                <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-neutral-600">
                  <span className="font-medium">{pub.publication}</span>
                  {pub.date && <span>•</span>}
                  {pub.date && <span>{pub.date}</span>}
                </div>
              </div>

              <div className="flex-shrink-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation() // Prevents triggering parent div click twice
                    handleRedirect(pub.url)
                  }}
                  className="flex items-center gap-2 rounded-lg bg-neutral-50 px-4 py-2 text-sm font-medium border border-neutral-200 text-[#1e3a5f] transition-all group-hover:bg-[#e63946] group-hover:text-white group-hover:border-[#e63946]"
                  aria-label={`Open ${pub.publication} article`}
                >
                  Read Article
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}