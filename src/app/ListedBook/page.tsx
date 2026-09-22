'use client'

import { useContext } from "react";
import { BookContext } from "../context/bookContext";
import ReadBookCard from "@/component/ReadBookCard";
import iBook from "../type";

const Page = () => {
  const { readBook, wishListBook } = useContext(BookContext);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Hero */}
      <div className="mb-10 rounded-3xl bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-500 p-8 text-white shadow-2xl">
        <p className="mb-2 text-sm uppercase tracking-[0.25em] text-indigo-100">
          My Library
        </p>

        <h1 className="text-3xl font-bold md:text-5xl">
          Listed Books
        </h1>

        <p className="mt-3 max-w-2xl text-indigo-100">
          Keep track of the books you have finished reading and the ones you want to read next.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <div className="rounded-2xl bg-white/15 px-5 py-3 backdrop-blur">
            <p className="text-xs text-indigo-100">Read Books</p>
            <h3 className="text-2xl font-bold">{readBook.length}</h3>
          </div>

          <div className="rounded-2xl bg-white/15 px-5 py-3 backdrop-blur">
            <p className="text-xs text-indigo-100">Wish List</p>
            <h3 className="text-2xl font-bold">{wishListBook.length}</h3>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-lg">
        <div className="tabs tabs-box bg-slate-100 p-1">
          <input
            type="radio"
            name="book_tabs"
            className="tab rounded-xl font-semibold"
            aria-label={`Read (${readBook.length})`}
            defaultChecked
          />

          <div className="tab-content mt-6">
            {readBook.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 py-20 text-center">
                <div className="mb-4 text-6xl">📚</div>
                <h3 className="text-xl font-bold text-slate-800">
                  No Read Books Yet
                </h3>
                <p className="mt-2 text-slate-500">
                  Books you mark as read will appear here.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {readBook.map((book: iBook, index: number) => (
                  <ReadBookCard book={book} key={index} />
                ))}
              </div>
            )}
          </div>

          <input
            type="radio"
            name="book_tabs"
            className="tab rounded-xl font-semibold"
            aria-label={`Wish List (${wishListBook.length})`}
          />

          <div className="tab-content mt-6">
            {wishListBook.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 py-20 text-center">
                <div className="mb-4 text-6xl">💙</div>
                <h3 className="text-xl font-bold text-slate-800">
                  Your Wish List is Empty
                </h3>
                <p className="mt-2 text-slate-500">
                  Save books you want to read later.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {wishListBook.map((book: iBook, index: number) => (
                  <ReadBookCard book={book} key={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;