import React from "react";
import { useHightLight } from "../../context/HightLightContext";

import "./styles.css";

export default function Note({ title, description }) {
    const {hightlight, setHightLight} = useHightLight();

    return(
        <div className={`note ${hightlight ? "hightlight" : ""}`}
            onClick={() => {
                setHightLight(!hightlight);
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