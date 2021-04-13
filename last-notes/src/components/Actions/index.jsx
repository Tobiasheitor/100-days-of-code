import React from 'react';
import { FaPlus, FaPencilAlt, FaTrash } from 'react-icons/fa';
import { useNoteForm } from '../../context/NoteFormContext';
import { useHightLight } from '../../context/HightLightContext';
import { useNoteList } from '../../context/NoteListContext';

import "./styles.css"

export default function Actions() {
    const { visibleForm, setVisibleForm, setTitle, setDescription } = useNoteForm();
    const { hightlight, setHightLight } = useHightLight();
    const { noteList, setNoteList } = useNoteList();

    function createHandler() {
        if (visibleForm) {
            setVisibleForm(false);
        } else {
            setVisibleForm(true);
        }
    }

    function editHandler() {
        if (hightlight) {
            const hightLightedNote = noteList.find((note)=> note.id === hightlight);

            setTitle(hightLightedNote.title);
            setDescription(hightLightedNote.description);
            setVisibleForm(!visibleForm);
        }
    }

    function deleteHandler() {
        if (hightlight) {
            setTitle("");
            setDescription("");
            setHightLight(false);

            const hightLightedNoteIndex = noteList.findIndex((note) => note.id === hightlight);
            noteList.splice(hightLightedNoteIndex, 1);

            setNoteList([...noteList]);
        }
    }

    return (
        <div className="actions">
            <button className="create" onClick={createHandler}>
                <FaPlus className="icon"></FaPlus>
            </button>
            <button className="edit" onClick={editHandler}>
                <FaPencilAlt className={`icon ${!hightlight ? "disabled" : ""}`} />
            </button>
            <button className="delete" onClick={deleteHandler}>
                <FaTrash className={`icon ${!hightlight && "disabled"}`} />
            </button>
        </div>
    )
}