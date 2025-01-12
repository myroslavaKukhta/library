import React from 'react';
import {motion, AnimatePresence} from "framer-motion";
import {AddBookForm} from "./AddBookForm";
import s from './BookItem.module.css'
import {useDispatch} from "react-redux";
import {addBook, removeBook, toggleReadStatus} from "./store/booksSlice";

type Book = {
    id: string
    title: string
    author: string
    isRead: boolean
    category: string
}

type ItemProps = {
    books: Book[];
};

export const BookItem = (
    {
        books,
    }: ItemProps) => {

    const dispatch = useDispatch()

    return (
        <div className={s.bookItem}>
            <AnimatePresence>
                {books.map(b => (
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            margin: "10px 0",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                        }}
                        key={b.id} className={s.bookDetails}>
                        <p className={s.bookTitle}>Title: {b.title}</p>
                        <p className={s.bookAuthor}>Author: {b.author}</p>
                        <p>Read: {b.isRead ? "Yes" : "No"}</p>
                        <p className={s.bookCategory}>Category: {b.category}</p>

                        <button onClick={() => dispatch(toggleReadStatus(b.id))}
                                className={`${s.button} ${b.isRead ? s.read : s.unread}`}>
                            {b.isRead ? "Mark as Unread" : "Mark as Read"}
                        </button>

                        <button onClick={() => dispatch(removeBook(b.id))} className={`${s.button} ${s.remove}`}>
                            Remove this book
                        </button>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};
