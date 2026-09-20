import Image from "next/image";

const Hero = () => {
  return (
    <section className="px-5 md:px-0">
      <div className="mx-auto flex w-7xl flex-col items-center justify-between gap-10 overflow-hidden rounded-3xl bg-linear-to-br from-primary/10 via-base-100 to-secondary/10 px-6 py-12 shadow-sm md:flex-row md:px-12 md:py-16">

        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            📚 Discover Your Next Favorite Book
          </span>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Books to
            <span className="text-primary"> freshen up </span>
            your bookshelf
          </h1>

          <p className="mt-5 max-w-lg text-base leading-7 text-base-content/60 md:text-lg">
            Explore a collection of inspiring stories, timeless classics,
            and exciting new reads made for every kind of reader.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a
              href="#books"
              className="btn btn-primary rounded-xl px-7 text-base shadow-lg shadow-primary/20"
            >
              View The List
            </a>

            <a
              href="#categories"
              className="btn btn-outline rounded-xl px-7 text-base"
            >
              Explore Categories
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex shrink-0 items-center justify-center">
          {/* Glow */}
          <div className="absolute h-56 w-56 rounded-full bg-primary/20 blur-3xl md:h-72 md:w-72" />

          <div className="relative">
            <Image
              src="/pngwing 1.png"
              alt="Book collection"
              width={350}
              height={350}
              priority
              className="relative drop-shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;