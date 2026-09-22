'use client'
import { BookContext } from "@/app/context/bookContext";
import iBook from "@/app/type";
import { useContext } from "react";
import { toast } from "react-toastify";
export interface WishButtonProps {
 book:iBook
}

const WishButton = ({ book}: WishButtonProps) => {
  const {wishListBook,setWishListBook}=useContext(BookContext)
  

  const handleWish=()=>{
     const alreadyRead = wishListBook.some(
          (item:iBook) => item.bookId === book.bookId
        );
    
        if (alreadyRead) {
          toast.info(`${book.bookName} is already in your wish list`);
          return;
        }
    setWishListBook([...wishListBook,book])
    toast.success(`${book.bookName} add wishlist list`)
  }
  return (
     <button onClick={handleWish} className="btn btn-outline flex-1 rounded-xl">Wishlist</button>
  )
}

export default WishButton;