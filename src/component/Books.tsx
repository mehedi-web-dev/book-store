import React from "react";
import BookCard from "./BookCard";
import iBook from "@/app/type";

const Booksdata = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");

  if (!res.ok) {
    throw new Error("Failed to fetch books data");
  }

  const data: iBook[] = await res.json();

  return data;
};

const Books = async () => {
  const books = await Booksdata();

  return (
    <section className="px-5 py-16 md:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto container">

        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

          <div>
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              📚 Our Collection
            </span>

            <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
              Explore Our{" "}
              <span className="text-primary">Books</span>
            </h1>

            <p className="mt-3 max-w-xl text-base leading-7 text-base-content/60">
              Discover amazing stories, timeless classics, and exciting new
              reads from our growing collection.
            </p>
          </div>

          {/* Book Count */}
          <div className="rounded-2xl border border-base-200 bg-base-100 px-5 py-3 shadow-sm">
            <p className="text-sm text-base-content/50">
              Available Books
            </p>

            <p className="text-2xl font-bold text-primary">
              {books.length}+
            </p>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.map((book: iBook) => (
            <BookCard
              key={book.bookId}
              book={book}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Books;