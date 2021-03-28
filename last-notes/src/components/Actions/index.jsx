import React from 'react';
import { FaPlus, FaPencilAlt, FaTrash } from 'react-icons/fa';

import "./styles.css"

export default function Actions() {
    return (
        <div className="actions">
            <button className="create">
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