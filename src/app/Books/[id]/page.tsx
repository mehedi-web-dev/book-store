import Image from "next/image";
import iBook from "@/app/type";
import ReadButton from "@/component/ReadButton";
import WishButton from "@/component/WishButton";

const Booksdata = async (): Promise<iBook[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`
    );

    const data: iBook[] = await res.json();

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const BookDetailsPage = async ({params,}: {params: Promise<{ id: string }>;}) => {
  const { id } = await params;
  const books = await Booksdata();

  const book = books.find((b: iBook) => String(b.bookId) === String(id) )as iBook;



  return (
    <main className="min-h-screen px-5 py-10 md:px-8 lg:py-16">
    
      <div className="mx-auto max-w-6xl">

        <div className="grid overflow-hidden rounded-3xl border border-base-200 bg-base-100 shadow-xl md:grid-cols-2">

          {/* Book Image */}
          <div className="flex min-h-112.5 items-center justify-center bg-base-200/60 p-8 md:min-h-152 md:p-12">
            <Image
              src={book.image}
              alt={book.bookName}
              width={400}
              height={550}
              priority
              className="max-h-125 w-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Book Details */}
          <div className="p-7 md:p-10 lg:p-12">

            {/* Category */}
            <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              {book.category}
            </span>

            {/* Title */}
            <h1 className="mt-5 text-3xl font-extrabold leading-tight md:text-4xl">
              {book.bookName}
            </h1>

            {/* Author */}
            <p className="mt-3 text-base text-base-content/60">
              By{" "}
              <span className="font-semibold text-base-content">
                {book.author}
              </span>
            </p>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-2">
              <span className="rounded-full bg-yellow-100 px-3 py-1.5 font-semibold">
                ⭐ {book.rating}
              </span>

              <span className="text-sm text-base-content/50">
                Rating
              </span>
            </div>

            <div className="my-6 border-t border-base-200" />

            {/* Review */}
            <div>
              <h2 className="mb-2 font-bold">
                Review
              </h2>

              <p className="text-sm leading-7 text-base-content/60">
                {book.review}
              </p>
            </div>

            {/* Tags */}
            <div className="mt-6">
              <h2 className="mb-3 font-bold">
                Tags
              </h2>

              <div className="flex flex-wrap gap-2">
                {book.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Information */}
            <div className="my-6 border-y border-base-200 py-5">
              <div className="grid grid-cols-2 gap-y-4 text-sm">

                <span className="text-base-content/50">
                  Number of Pages
                </span>
                <span className="font-semibold">
                  {book.totalPages}
                </span>

                <span className="text-base-content/50">
                  Publisher
                </span>
                <span className="font-semibold">
                  {book.publisher}
                </span>

                <span className="text-base-content/50">
                  Year of Publishing
                </span>
                <span className="font-semibold">
                  {book.yearOfPublishing}
                </span>

                <span className="text-base-content/50">
                  Rating
                </span>
                <span className="font-semibold">
                  {book.rating}
                </span>

              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
            <ReadButton book={book}></ReadButton>

             <WishButton book={book}></WishButton>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default BookDetailsPage;