// components/ContentGrid.js
const articles = [
  {
    id: 1,
    image: "/images/rema.png",
    title: "Rema Scores New Certification With Efforts On Victony's 'Stubborn'",
    author: "IAM NOONE",
    category: "MUSIC",
    time: "5 MINS AGO",
  },
  {
    id: 2,
    image: "/images/wizkid.png",
    title: "Wizkid Makes Surprise Nativeland Appearance",
    author: "49TH STREET",
    category: "MUSIC",
    time: "20 MINS AGO",
  },
  {
    id: 3,
    image: "/images/minz.png",
    title: "Minz Stuns For Orange",
    author: "TEMPLE EGEMESI",
    category: "FASHION",
    time: "23 MINS AGO",
  },
];

export default function ContentGrid() {
  return (
    <section className="mx-4 sm:mx-8 md:mx-12 lg:mx-24 mt-16">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm uppercase mb-2 tracking-widest text-white/50">
          /// LATEST
        </p>
        <p className="text-base md:text-lg uppercase font-extrabold text-white">
          Fresh off the press
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
            <div className="w-full h-48 md:h-56 lg:h-64 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text Content */}
            <div className="p-4 md:p-6">
              <h3 className="text-sm md:text-base font-bold text-black mb-3 truncate group-hover:underline leading-tight line-clamp-3">
                {article.title}
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
                <span className="text-xs text-gray-600 font-medium">
                  {article.author}
                </span>
                <span className="hidden sm:inline text-xs text-gray-400 mx-2">•</span>
                <span className="text-xs text-gray-600 font-medium">
                  {article.category}
                </span>
                <span className="hidden sm:inline text-xs text-gray-400 mx-2">•</span>
                <span className="text-xs text-gray-400">
                  {article.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

