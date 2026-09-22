
"use client";

import { useContext } from "react";
import { BookContext } from "@/app/context/bookContext";
import iBook from "@/app/type";
import { toast } from "react-toastify";

export interface ReadButtonProps {
  book: iBook;
}

const ReadButton = ({ book }: ReadButtonProps) => {
  const { readBook, setReadBook } = useContext(BookContext);

  const handleRead = (): void => {
    // Check if the book is already in the Read Book list
    const alreadyRead = readBook.some(
      (item:iBook) => item.bookId === book.bookId
    );

    if (alreadyRead) {
      toast.info(`${book.bookName} is already in your read list`);
      return;
    }

    // Add book
    setReadBook([...readBook, book]);

    toast.success(`${book.bookName} added to read list`);
  };

  return (
    <button
      onClick={handleRead}
      className="btn btn-primary flex-1 rounded-xl"
    >
      Read
    </button>
  );
};

export default ReadButton;