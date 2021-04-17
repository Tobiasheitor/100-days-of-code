import React, { useEffect } from "react";
import { useHightLight } from "../../context/HightLightContext";
import { useNoteForm } from "../../context/NoteFormContext";
import { useNoteList } from "../../context/NoteListContext";
import Note from "../Note";

import "./styles.css";

export default function Notes() {
    const {noteList} = useNoteList();
    const {hightlight, setHightLight} = useHightLight();
    const {setTitle, setDescription} = useNoteForm();
    const {setNoteList} = useNoteList();

    useEffect(() => {
        getLocalNotes();
    }, []);

    useEffect(() => {
        if (hightlight) {
            const highlightedNote = noteList.find((note) => note.id === hightlight);
            setTitle(highlightedNote.title);
            setDescription(highlightedNote.description);
        } else {
            setTitle("");
            setDescription("");
        }
    }, [hightlight]);

    function getLocalNotes() {
        let localNotes = localStorage.getItem("notes");

        if (localNotes === null) {
            localStorage.setItem("notes", JSON.stringify([]));
        } else {
            localNotes = JSON.parse(localNotes);
            setNoteList(localNotes);
        }
    }

    return (
        <section className="notes">
            {noteList.map((note) => (
                <Note 
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    description={note.description}
                    hightlight={hightlight}
                    setHighLight={setHightLight}
                />
            ))}
        </section>
    )
}