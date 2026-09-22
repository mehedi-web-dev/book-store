
'use client'
import { createContext, ReactNode, useState } from "react";

export interface BookContextProps {

    children: ReactNode;
}
export const BookContext =createContext({})
const BookProvider = ({children }: BookContextProps) => {
   const [readBook,setReadBook]=useState([])
   const [wishListBook,setWishListBook]=useState([])
   const shareData={
    readBook,setReadBook,wishListBook,setWishListBook
   }
  
  return (
    <div>
      <BookContext.Provider value={shareData} >{children}</BookContext.Provider>
    </div>
  )
}

export default BookProvider;