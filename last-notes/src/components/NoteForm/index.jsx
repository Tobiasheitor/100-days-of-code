import React, { useState } from "react";
import {FaBan, FaCheck} from "react-icons/fa";

import "./styles.css"

export default function NoteForm() {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    function titleHandler(event) {
        setTitle(event.target.value);

        console.log(title);
    }

    function descriptionHandler(event) {
        setDescription(event.target.value);
        console.log(description);
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
                <button className="cancel">
                    <FaBan className="icon" />
                </button>
                <button type="submit" className="confirm">
                    <FaCheck className="icon" />
                </button>
            </div>
        </form>
    )
}