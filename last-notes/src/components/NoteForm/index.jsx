import React, { useEffect } from "react";
import { FaBan, FaCheck } from "react-icons/fa";
import { useNoteForm } from "../../context/NoteFormContext";
import { useNoteList } from "../../context/NoteListContext";
import { useHightLight } from "../../context/HightLightContext";

import "./styles.css"

export default function NoteForm() {
    const {noteList, setNoteList} = useNoteList();
    const {title, setTitle, description, setDescription, setVisibleForm} = useNoteForm();
    const { hightlight } = useHightLight();
    
    useEffect(() => {
        saveLocalNotes();
    }, [noteList]);

    function titleHandler(e) {
        setTitle(e.target.value);
    }

    function descriptionHandler(e) {
        setDescription(e.target.value);
    }

    function submitHandler(e) {
        e.preventDefault();
        if (hightlight) {
            noteList.map((note) => {
                if (note.id === hightlight) {
                    note.title = title;
                    note.description = description;
                }
            })

            setNoteList([...noteList]);
        } else {
            setNoteList([
                ...noteList,
                {
                    id: String(Math.floor(Math.random() * 1000)),
                    title,
                    description,
                }
            ]);
        }
    }

    function cancelHandler(e) {
        e.preventDefault();
        setVisibleForm(false);
    }

    function saveLocalNotes() {
        localStorage.setItem("notes", JSON.stringify(noteList));
    }

    return(
        <form className="note-menu">
            <div>
                <label htmlFor="title">Título</label>
                <input id="title" value={title} onChange={titleHandler} type="text" placeholder="Infome um título"/>
            </div>
            <div>
                <label htmlFor="note">Nota</label>
                <textarea id="note" value={description} onChange={descriptionHandler} rows="10" type="text" placeholder="Escreva a sua nota"/>
            </div>

            <div className="buttons">
                <button className="cancel" onClick={cancelHandler}>
                    <FaBan className="icon" />
                </button>
                <button type="submit" onClick={submitHandler} className="confirm">
                    <FaCheck className="icon" />
                </button>
            </div>
        </form>
    )
}