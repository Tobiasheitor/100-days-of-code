import React from 'react';
import { FaPlus, FaPencilAlt, FaTrash } from 'react-icons/fa';
import { useNoteForm } from '../../context/NoteFormContext';

import "./styles.css"

export default function Actions() {
    const { visibleForm, setVisibleForm } = useNoteForm();

    function createHandler() {
        if (visibleForm) {
            setVisibleForm(false);
        } else {
            setVisibleForm(true);
        }
    }
    return (
        <div className="actions">
            <button className="create" onClick={createHandler}>
                <FaPlus className="icon"></FaPlus>
            </button>
            <button className="edit">
                <FaPencilAlt className="icon disabled"></FaPencilAlt>
            </button>
            <button className="delete">
                <FaTrash className="icon disabled"></FaTrash>
            </button>
        </div>
    )
}