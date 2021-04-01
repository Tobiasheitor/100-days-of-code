import React, {useState} from "react";

import "./styles.css";

export default function Note() {
    const [hightlight, setHighlight] = useState(false);

    return(
        <div className={`note ${hightlight ? "hightlight" : ""}`}
            onClick={() => {
                setHighlight(!hightlight);
            }}
        >
            <h2 className="title">Titulo exemplo zap zap zap zap zap</h2>
            <hr/>
            <p className="note-description">
                Descrição de exemplo Descrição de exemplo Descrição de exemplo Descrição de exemplo
                Descrição de exemplo Descrição de exemplo Descrição de exemplo Descrição de exemplo
                Descrição de exemplo Descrição de exemplo Descrição de exemplo Descrição de exemplo
                Descrição de exemplo Descrição de exemplo Descrição de exemplo Descrição de exemplo
                Descrição de exemplo Descrição de exemplo Descrição de exemplo Descrição de exemplo
            </p>
        </div>
    )
}