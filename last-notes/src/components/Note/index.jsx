import React from "react";
import { useHightLight } from "../../context/HightLightContext";
import { useNoteForm } from "../../context/NoteFormContext";

import "./styles.css";

export default function Note({ id, title, description }) {
    const { hightlight, setHightLight } = useHightLight();
    const { setVisibleForm } = useNoteForm();

    return(
        <div id = {id} className={`note ${hightlight === id ? "hightlight" : ""}`}
            onClick={() => {
                if (hightlight === id) {
                    setHightLight(false);
                    setVisibleForm(false);
                } else {
                    setHightLight(id);
                    setVisibleForm(true);
                }
            }}
        >
            <h2 className="title">{title}</h2>
            <hr/>
            <p className="note-description">
                {description}
            </p>
        </div>
    )
}