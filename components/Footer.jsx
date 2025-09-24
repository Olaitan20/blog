import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#F26509] mt-20 text-white py-16 overflow-hidden">
      {/* Left Illustration (absolute bottom-left) */}
      <div className="absolute bottom-0 left-0">
        <Image
          src="/images/footerimg.png"
          alt="Newsletter illustration"
          width={500}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Container to push content right */}
      <div className="container mr-24 mx-auto flex justify-end">
        <div className="relative  max-w-lg">
          <h2 className="text-3xl md:text-4xl text-end font-extrabold mb-2 uppercase">
            Signup For Our Newsletter
          </h2>
          <p className="text-sm text-end text-white/80 mb-6">
            Signup for blah blah blah! Text goes here.
          </p>

          {/* Signup Form */}
          <form className="flex w-full">
            <input
              type="email"
              className="flex-1 px-4 py-3 text-black bg-white  focus:outline-none"
            />
            <button
              type="submit"
              className="bg-black px-6 py-3 font-bold uppercase "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

