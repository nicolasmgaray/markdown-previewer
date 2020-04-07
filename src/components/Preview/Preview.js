import React from "react";
import marked from "marked";
import "./Preview.css";
import "./Github.css";

const Preview = ({ text }) => {
  return (
    <div id="preview-panel">
      <h2>
        <span role="img" aria-label="magnify-glass">
          🔎
        </span>
        <strong>Preview: </strong> See the result here
      </h2>
      <div
        id="preview"
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: marked(text, { breaks: true }) }}
      ></div>
    </div>
  );
};

export default Preview;
