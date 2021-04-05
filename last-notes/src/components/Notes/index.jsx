import React from "react";
import { useHightLight } from "../../context/HightLightContext";
import { useNoteList } from "../../context/NoteListContext";
import Note from "../Note";

import "./styles.css";

export default function Notes() {
    const {noteList} = useNoteList();
    const {hightlight, setHightLight} = useHightLight();

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