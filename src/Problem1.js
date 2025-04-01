import React, { useState } from "react";

const Problem1 = () => {
    const [inputText, setInputText] = useState("");
    const [charCounts, setCharCounts] = useState([]);

    const countChars = (str) => {
        const counts = new Map();

        for (const char of str) {
            if (char !== " ") { // Ignore spaces
                counts.set(char, (counts.get(char) || 0) + 1);
            }
        }

        return [...counts.values()]; // Preserve order
    };

    const handleInputChange = (e) => {
        const text = e.target.value;
        setInputText(text);
        setCharCounts(countChars(text));
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>Character Counter</h2>
            <input 
                type="text"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Type something..."
                style={{ padding: "8px", width: "80%", marginBottom: "10px" }}
            />
            <p><strong>Character Counts:</strong> {JSON.stringify(charCounts)}</p>
        </div>
    );
};

export default Problem1;
