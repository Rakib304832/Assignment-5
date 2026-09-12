import BannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center gap-8 px-4 py-8 sm:gap-10 sm:py-10 md:flex-row">
        {/* Banner Content */}
        <div className="flex-1">
          <h1 className="py-4 text-4xl font-extrabold leading-tight text-[#0F172A] sm:py-6 md:text-5xl">
            Build Your Ideal{" "}
            <br />
            <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="pb-6 text-lg leading-relaxed text-[#475569] md:pb-8 md:text-xl">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="text-white bg-linear-to-r from-[#F97316] to-[#EC4899] px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-all">
              Explore Technologies
            </button>

            <button className="text-[#374151] font-medium px-4 py-2 hover:text-[#D81B7E] transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Banner Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={BannerImage}
            alt="Development Stack"
            className="w-full max-w-lg"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mt-8 text-center text-3xl font-bold md:mt-10 md:text-left">
          Explore the
          <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-center text-sm text-slate-500 md:text-left">Pick one technology per caragory to bulild your ideal stack</p>
      </div>
    </>
  );
};

export default Banner;