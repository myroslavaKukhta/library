import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {v1} from "uuid";

type Book = {
    id: string;
    title: string;
    author: string;
    isRead: boolean;
    category: string;
}

type BookState = {
    books: Book[]
}

const initialState: BookState = {
    books: [
        {id: v1(), title: "North", author: "J.London", isRead: true, category: "adventure"},
        {id: v1(), title: "Witcher", author: "A.Sapkovsky", isRead: true, category: "fantasy"},
        {id: v1(), title: "Picnic", author: "Strygatsky", isRead: false, category: "science fiction"},
    ]
}

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<Book>) => {
            state.books.push(action.payload)
        },
        removeBook: (state, action: PayloadAction<string>) => {
            state.books = state.books.filter(b => b.id !== action.payload)
        },
        toggleReadStatus: (state, action: PayloadAction<string>) => {
        const book = state.books.find(b=> b.id === action.payload)
        if(book) {
            book.isRead = !book.isRead
        }}
    }
})

export const {addBook, removeBook, toggleReadStatus} = booksSlice.actions;
export default booksSlice.reducer;