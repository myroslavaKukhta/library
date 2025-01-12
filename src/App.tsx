import React from "react";

import {BookItem} from "./BookItem";
import s from './App.module.css'
import {useSelector} from "react-redux";
import {RootState} from "./store/store";
import {AddBookForm} from "./AddBookForm";

type Props = {
    id: string;
    title: string;
    author: string;
    isRead: boolean;
    category: string;
};

export const App = () => {

const books = useSelector((state: RootState) => state.books.books)
    return (
        <div className={s.container}>
            <div className={s.header}>Space Library</div>
            <BookItem
                books={books}
            />
            <AddBookForm />
        </div>
    );
};
