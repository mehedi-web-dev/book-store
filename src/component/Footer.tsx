import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="mx-auto container px-5 sm:px-8 lg:px-10">

        {/* Main Footer */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold">
              <span className="text-[#4932D4]">Book</span>
              <span className="text-gray-900">Vibe</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500">
              Discover amazing stories, timeless classics, and exciting
              new reads. Find your next favorite book with BookVibe.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-sm font-semibold text-gray-600 transition hover:bg-[#4932D4] hover:text-white"
              >
                f
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-sm font-semibold text-gray-600 transition hover:bg-[#4932D4] hover:text-white"
              >
                X
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-sm font-semibold text-gray-600 transition hover:bg-[#4932D4] hover:text-white"
              >
                in
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-sm font-semibold text-gray-600 transition hover:bg-[#4932D4] hover:text-white"
              >
                GH
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-5 font-semibold text-gray-900">
              Explore
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-500 transition hover:text-[#4932D4]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/Books"
                  className="text-gray-500 transition hover:text-[#4932D4]"
                >
                  Books
                </Link>
              </li>

              <li>
                <Link
                  href="/listedbook"
                  className="text-gray-500 transition hover:text-[#4932D4]"
                >
                  ListedBook
                </Link>
              </li>

              <li>
                <Link
                  href="/readbook"
                  className="text-gray-500 transition hover:text-[#4932D4]"
                >
                  ReadBook
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-5 font-semibold text-gray-900">
              Categories
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-gray-500 transition hover:text-[#4932D4]"
                >
                  Fiction
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-gray-500 transition hover:text-[#4932D4]"
                >
                  Romance
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-gray-500 transition hover:text-[#4932D4]"
                >
                  Technology
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-gray-500 transition hover:text-[#4932D4]"
                >
                  Self Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 font-semibold text-gray-900">
              Get in Touch
            </h3>

            <p className="text-sm leading-6 text-gray-500">
              Have a question or suggestion? Feel free to contact us.
            </p>

            <p className="mt-4 text-sm font-medium text-[#4932D4]">
              hello@bookvibe.com
            </p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mb-10 rounded-2xl bg-[#F5F3FF] p-6 sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Stay in the loop
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Get updates about new books and latest collections.
              </p>
            </div>

            <form className="flex w-full flex-col gap-3 sm:flex-row lg:max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-11 flex-1 rounded-lg border border-gray-200 bg-white px-4 text-sm outline-none focus:border-[#4932D4]"
              />

              <button
                type="submit"
                className="h-11 rounded-lg bg-[#4932D4] px-6 text-sm font-semibold text-white transition hover:bg-[#3924b8]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-gray-200 py-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} BookVibe. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="#"
              className="hover:text-[#4932D4]"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="hover:text-[#4932D4]"
            >
              Terms
            </Link>

            
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;