// components/ContentGrid.js
const articles = [
  {
    id: 1,
    image: "/images/burna.png",
    title: "Victony Scores New Certification With Efforts On Victony's 'Stubborn'",
    author: "IAM NOONE",
    category: "MUSIC",
    time: "5 MINS AGO",
  },
  {
    id: 2,
    image: "/images/olamide.png",
    title: "Wizkid Makes Surprise Nativeland Appearance",
    author: "49TH STREET",
    category: "MUSIC",
    time: "20 MINS AGO",
  },
  {
    id: 3,
    image: "/images/chowdeck.png",
    title: "Minz Stuns For Orange",
    author: "TEMPLE EGEMESI",
    category: "FASHION",
    time: "23 MINS AGO",
  },
];

export default function Latest() {
  return (
    // Wrapper that changes background depending on screen size
    <div className="bg-white md:bg-transparent">
      <section className="sm:mx-8 md:mx-12 lg:mx-24 pt-[24px] md:pt-0 md:mt-20">
        {/* Header */}
        <div className="mb-4 md:mb-8 px-4 md:px-0">
          <p className="text-[12px] uppercase mb-1 tracking-widest text-black md:text-white/50">
            /// MUSIC
          </p>
          <p className="text-base md:text-[16px] uppercase font-extrabold text-black md:text-white">
            Latest in the world of music
          </p>
        </div>

        {/* Articles Grid - NO GAPS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white hover:shadow-lg transition-shadow cursor-pointer group"
            >
              {/* Image */}
              <div className="w-full h-48 md:h-48 lg:h-50 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Text Content */}
              <div className="p-4 md:p-6">
                <p className="text-sm md:text-[16px] font-bold text-black mb-3 leading-tight truncate">
                  {article.title}
                </p>
                <div className="flex sm:flex-row sm:items-center gap-1 sm:gap-0">
                  <span className="text-[12px] text-black/50 font-medium">
                    {article.author}
                  </span>
                  <span className="hidden sm:inline text-xs text-gray-400 mx-2">
                    •
                  </span>
                  <span className="text-[12px] text-black/50 font-medium">
                    {article.category}
                  </span>
                  <span className="hidden sm:inline text-xs text-gray-400 mx-2">
                    •
                  </span>
                  <span className="text-[12px] text-black/50">{article.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
