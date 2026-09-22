import iBook from "@/app/type";
import Image from "next/image";
import Link from "next/link";

export interface WishBookCardProps {
  book:iBook
}

const WishBookCard = ({ book }: WishBookCardProps) => {
  
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
      <div className="group w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        
        <div className="flex flex-col sm:flex-row">
          
          {/* Book Image */}
          <div className="relative h-64 w-full shrink-0 overflow-hidden bg-slate-100 sm:h-56 sm:w-40 md:h-60 md:w-44">
            <Image
              src={image}
              alt={bookName}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 176px"
            />
  
            {/* Category */}
            <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow backdrop-blur">
              {category}
            </div>
          </div>
  
          {/* Content */}
          <div className="flex flex-1 flex-col justify-between p-5">
            
            <div>
              {/* Title */}
              <h2 className="line-clamp-1 text-xl font-bold text-slate-900 transition-colors group-hover:text-indigo-600">
                {bookName}
              </h2>
  
              {/* Author */}
              <p className="mt-1 text-sm text-slate-500">
                by <span className="font-medium text-slate-700">{author}</span>
              </p>
  
              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {tags?.slice(0, 3).map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
  
              {/* Year */}
              <p className="mt-4 text-sm text-slate-500">
                Published:{" "}
                <span className="font-semibold text-slate-700">
                  {yearOfPublishing}
                </span>
              </p>
            </div>
  
            {/* Bottom */}
            <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
              
              {/* Rating */}
              <div className="flex items-center gap-1">
                <span className="text-lg">⭐</span>
                <span className="font-bold text-slate-800">
                  {rating}
                </span>
              </div>
  
              {/* Button */}
              <Link href={`/Books/${book.bookId}`}>  <button className="btn btn-primary mt-5 w-full rounded-xl opacity-0 transition-all duration-300 group-hover:opacity-100">
          View Details
        </button></Link>
  
            </div>
          </div>
        </div>
      </div>
    );
}

export default WishBookCard;