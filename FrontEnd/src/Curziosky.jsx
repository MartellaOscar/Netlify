import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Curziosky() {
    return (
        <div
            style={{
                margin: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100vw",
                height: "100vh",
                backgroundImage: "url('/cuore.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
                textAlign: "center",
                flexDirection: "column",
                fontFamily: "Arial, sans-serif",
                backgroundColor: "#fff",
            }}
        >
            <Link to="/" style={{ textDecoration: "none" }}>
                <h1 style={{  color: "#000", whiteSpace: "pre", fontFamily: "monospace" }}>
                        CHATGPT E' IL 4 MEMBRO DEL GRUPPO
                </h1>


            </Link>
        </div>
    );
}

export default Curziosky;
