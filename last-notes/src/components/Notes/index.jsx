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

    useEffect(() => {
        if (hightlight) {
            const highlightedNote = noteList.find((note) => note.id === hightlight);
            setTitle(highlightedNote.title);
            setDescription(highlightedNote.description);
        } else {
            setTitle("");
            setDescription("");
        }
    }, [hightlight])
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