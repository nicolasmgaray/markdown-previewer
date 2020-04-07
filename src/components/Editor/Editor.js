import React from "react";
import "./Editor.css";

const Editor = ({ text, updateMarkdown }) => {
  return (
    <div id="editor-panel">
      <h2>
      <span  role='img' aria-label="pencil">✏️</span> <strong> Editor:</strong>Add your markdown here 
      </h2>
      <textarea
        type="text"
        onChange={updateMarkdown}
        value={text}
        id="editor"
      ></textarea>
    </div>
  );
};

export default Editor;
