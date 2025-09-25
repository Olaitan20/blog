import { articles } from "@/data/article";
import Image from "next/image";

export default function ArticlePage({ params }) {
  const { slug } = params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="mx-4 md:mx-12 lg:mx-24 py-8 text-white">
        <h1 className="text-xl font-bold">Article not found</h1>
      </div>
    );
  }

  return (
    <div className="mx-4 md:mx-12 lg:mx-24 py-2 text-white">
      {/* Cover Image */}
      <div className="w-full h-[60vh] relative mb-6">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Metadata */}
      <p className="uppercase text-[12px] text-white/50 mb-2">
        /// {article.category}
      </p>
      <p className="text-2xl md:text-[40px] font-extrabold mb-2">
        {article.title}
      </p>
      <p className="text-[12px] text-white/60 mb-6">
        {article.author} • {article.date} • {article.time}
      </p>

      {/* Content */}
      <div className="w-2/4 prose prose-invert max-w-none">
        {article.content.split("\n").map((p, i) => (
          <p key={i} className="mb-4 text-[15px] font-normal leading-relaxed">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}
