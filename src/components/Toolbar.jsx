import React, { useContext } from "react";
import { MdAddAlarm } from "react-icons/md";
import { MdSpellcheck } from "react-icons/md";
import { MdRemoveRedEye } from "react-icons/md";
import { MdBrightness4 } from "react-icons/md";
import { MdFullscreen } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";

const Toolbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div className="toolbar">
      <h1>
        <MdAddAlarm />
      </h1>
      <h1>
        <MdSpellcheck />
      </h1>
      <h1>
        <MdRemoveRedEye />
      </h1>
      <h1>
        <MdBrightness4 onClick={toggleTheme} />
      </h1>
      <h1>
        <MdFullscreen />
      </h1>
    </div>
  );
};

export default Toolbar;
