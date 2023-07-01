import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Editor = ({ data, setData }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <textarea
      value={data}
      onChange={(e) => setData(e.target.value)}
      placeholder="Start typing..."
      className={`editor-box ${theme}`}
    />
  );
};

export default Editor;
