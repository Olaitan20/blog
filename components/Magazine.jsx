import Image from "next/image";

export default function Magazine() {
  return (
    <section className="hidden md:block mx-28">
      <div className="py-8">
        <p className="text-[12px] uppercase mb-2 tracking-widest text-white/50">
          /// ORANGE MAG
        </p>
        <p className="text-[16px] uppercase font-extrabold">Read Orange Mag</p>
      </div>

      {/* No gap, full quality images */}
      <div className="grid grid-cols-3 gap-0 mb-6">
        <div className="relative w-full h-[586px]">
          <Image
            src="/images/magazine.png"
            alt="magazine cover"
            fill
            className="object-cover"
            quality={100}
            priority
          />
        </div>
        <div className="relative w-full h-[586px]">
          <Image
            src="/images/magazine2.png"
            alt="magazine cover"
            fill
            className="object-cover"
            quality={100}
          />
        </div>
        <div className="relative w-full h-[586px]">
          <Image
            src="/images/magazine.png"
            alt="magazine cover"
            fill
            className="object-cover"
            quality={100}
          />
        </div>
      </div>

      {/* View More */}
      <div className="flex justify-center mb-6">
        <p className="text-[12px] font-medium text-white cursor-pointer hover:underline">
          View more
        </p>
      </div>
    </section>
  );
}
