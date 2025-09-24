import Image from "next/image";

export default function Magazine() {
  return (
    <section className="mx-[110px] ">
        <div className="py-[32px]">
            <p className="text-[14px] uppercase mb-[8px] tracking-widest text-[#FFFFFF80]">/// ORANGE MAG</p>
            <p className="text-[16px] uppercase font-[800]">Read Orange Mag</p>
        </div>
        <div className=" grid grid-cols-3 gap-[5px] mb-[10px] ">
            <Image
                src="/images/magazine.svg"
                width="100"
                height="100"
                alt="add to cart"
                className=" w-[413px] h-[586px]  "
            />
            <Image
                src="/images/magazine2.svg"
                width="100"
                height="100"
                alt="add to cart"
                className=" w-[413px] h-[586px]  "
            />
            <Image
                src="/images/magazine.svg"
                width="100"
                height="100"
                alt="add to cart"
                className=" w-[413px] h-[586px]  "
            />
        </div>
        {/* View More */}
      <div className="flex justify-center mb-6">
        <p className="text-sm font-medium text-white/80 cursor-pointer hover:underline">
          View more
        </p>
      </div>
      
    </section>
  );
}