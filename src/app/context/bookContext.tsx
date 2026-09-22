"use client";

import { createContext, useState, ReactNode } from "react";
import iBook from "@/app/type";

interface BookContextType {
  readBook: iBook[];
  wishListBook: iBook[];

  setReadBook: React.Dispatch<React.SetStateAction<iBook[]>>;
  setWishListBook: React.Dispatch<React.SetStateAction<iBook[]>>;
}

export const BookContext = createContext<BookContextType>({
  readBook: [],
  wishListBook: [],
  setReadBook: () => {},
  setWishListBook: () => {},
});

export const BookProvider = ({ children }: { children: ReactNode }) => {
  const [readBook, setReadBook] = useState<iBook[]>([]);
  const [wishListBook, setWishListBook] = useState<iBook[]>([]);

  return (
    <BookContext.Provider
      value={{
        readBook,
        setReadBook,
        wishListBook,
        setWishListBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};