import React, { useState } from "react";
import Editor from "../Editor";
import Preview from "../Preview";
import "./Container.css";

const Container = () => {
  const [text, setText] = useState(defaultMD);

  const updateMarkdown = ({ target }) => {
    setText(target.value);
  };

  return (
    <div id="container">
      <header><i class="fab fa-github"></i>Markdown Previewer</header>
      <Editor text={text} updateMarkdown={updateMarkdown} />
      <Preview text={text} />
    </div>
  );
};

const defaultMD = `
# Markdown Previewer Live demo

![VERSION](https://img.shields.io/github/package-json/v/NICOLASMGARAY/markdown-previewer?style=for-the-badge) ![STATUS](https://img.shields.io/github/deployments/nicolasmgaray/markdown-previewer/production?label=STATUS&logo=zeit&style=for-the-badge) ![COMMIT](https://img.shields.io/github/last-commit/nicolasmgaray/markdown-previewer?logo=github&style=for-the-badge)

Changes are automatically rendered as you type, markdown styled as github md.
Supports all **types** of _tags_

## Unordered List

* This
* Is
* A
* List

## Ordered List

1. This
2. Is
3. Another
4. List

## Blockquote

> This is a Block Quote!

## Code Fragment

Heres some code, \`<div></div>\`, between 2 backticks.

And a code block:

\`\`\`
const React = require('react');
const App = require('./App.js');

React.render(
  <App />,
  document.getElementById('root')
);
\`\`\`

## Tables

| Feature   | Support |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |
| github style      | ✔ |

## Images

![React Logo w/ Text](https://goo.gl/Umyytc)

---------------

Made by Nicolas Garay, using [marked](https://github.com/markedjs/marked) for md parsing
`;

export default Container;
