import React, {useState} from 'react';
import s from './AddBookForm.module.css'
import {useDispatch} from "react-redux";
import {v1} from 'uuid';
import { addBook } from './store/booksSlice';


export const AddBookForm = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [isRead, setIsRead] = useState(false);
    const [category, setCategory] = useState("Adventure");

    const dispatch = useDispatch();

    const onAddHandler = () => {
        if (title.trim() !== "" && author.trim() !== "") {
            // @ts-ignore
            dispatch(
                addBook({
                    id: v1(),
                    title,
                    author,
                    isRead,
                    category
                }));
            setTitle("");
            setAuthor("");
            setIsRead(false);
            setCategory("Adventure")
        }
    };

    return (
        <div className={s.form}>
            <input className={s.input}
                   type="text"
                   value={title}
                   placeholder="Title"
                   onChange={(e) => setTitle(e.target.value)}
            />
            <input className={s.input}
                   type="text"
                   value={author}
                   placeholder="Author"
                   onChange={(e) => setAuthor(e.target.value)}
            />
            <label>
                <input
                    type="checkbox"
                    checked={isRead}
                    onChange={(e) => setIsRead(e.target.checked)}
                />
                Read
            </label>
            <input className={s.input}
                   type="text"
                   value={category}
                   placeholder="Category"
                   onChange={(e) => setCategory(e.target.value)}
            />
            <button className={s.button}
                    type="submit" onClick={onAddHandler}>
                Add
            </button>

            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Adventure">Adventure</option>
                <option value="Science">Science</option>
                <option value="Science fiction">Science fiction</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Mystery">Mystery</option>
                <option value="Detective">Detective</option>
            </select>
        </div>
    );
};

