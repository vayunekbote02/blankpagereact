import React from "react";

const Editor = ({ data, setData }) => {
  return (
    <textarea
      value={data}
      onChange={(e) => setData(e.target.value)}
      placeholder="Start typing..."
      className="editor-box"
    />
  );
};

export default Editor;
