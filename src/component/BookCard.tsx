import Image from "next/image";
import iBook from "@/app/type";

export interface BookCardProps {
  book: iBook;
}

const BookCard = ({ book }: BookCardProps) => {
  const {
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    yearOfPublishing,
  } = book;

  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-base-200 bg-base-100 p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Book Image */}
      <div className="relative flex h-72 items-center justify-center overflow-hidden rounded-xl bg-base-200/60">

        {/* Background Glow */}
        <div className="absolute h-44 w-44 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />

        <Image
          src={image}
          alt={bookName}
          width={220}
          height={280}
          className="relative h-60 w-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
        />

        {/* Rating Badge */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-base-100/90 px-3 py-1.5 text-sm font-semibold shadow-md backdrop-blur">
          <span className="text-yellow-500">★</span>
          <span>{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="px-1 pt-5">

        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-2">
          {tags?.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Book Name */}
        <h2 className="line-clamp-1 text-xl font-bold tracking-tight transition-colors group-hover:text-primary">
          {bookName}
        </h2>

        {/* Author */}
        <p className="mt-1 text-sm text-base-content/60">
          By <span className="font-medium text-base-content/80">{author}</span>
        </p>

        {/* Divider */}
        <div className="my-4 border-t border-dashed border-base-300" />

        {/* Bottom Info */}
        <div className="flex items-center justify-between text-sm">

          <div className="flex items-center gap-2">
            <span className="rounded-md bg-base-200 px-2.5 py-1 font-medium">
              {category}
            </span>

            <span className="text-base-content/50">
              {yearOfPublishing}
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <span className="font-semibold">{rating}</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.7}
              stroke="currentColor"
              className="h-5 w-5 text-base-content/60"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.75.75 0 011.04 0l2.02 2.054a.75.75 0 00.42.214l2.82.41a.75.75 0 01.416 1.279l-2.04 1.989a.75.75 0 00-.216.664l.482 2.808a.75.75 0 01-1.088.79l-2.524-1.327a.75.75 0 00-.698 0l-2.524 1.327a.75.75 0 01-1.088-.79l.482-2.808a.75.75 0 00-.216-.664L7.242 7.456a.75.75 0 01.416-1.279l2.82-.41a.75.75 0 00.42-.214l2.02-2.054z"
              />
            </svg>
          </div>

        </div>

        {/* View Details Button */}
        <button className="btn btn-primary mt-5 w-full rounded-xl opacity-0 transition-all duration-300 group-hover:opacity-100">
          View Details
        </button>

      </div>
    </div>
  );
};

export default BookCard;