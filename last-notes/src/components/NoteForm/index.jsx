import React from "react";
import {FaBan, FaCheck} from "react-icons/fa";

import "./styles.css"

export default function NoteForm() {
    return(
        <form className="note-menu">
            <div>
                <label htmlFor="title">Título</label>
                <input id="title" type="text" placeholder="Infome um título"/>
            </div>
            <div>
                <label htmlFor="note">Nota</label>
                <textarea id="note" rows="10" type="text" placeholder="Escreva a sua nota"/>
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