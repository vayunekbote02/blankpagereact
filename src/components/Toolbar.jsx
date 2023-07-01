import React from "react";
import { MdAddAlarm } from "react-icons/md";
import { MdSpellcheck } from "react-icons/md";
import { MdRemoveRedEye } from "react-icons/md";
import { MdBrightness4 } from "react-icons/md";
import { MdFullscreen } from "react-icons/md";

const Toolbar = () => {
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
        <MdBrightness4 />
      </h1>
      <h1>
        <MdFullscreen />
      </h1>
    </div>
  );
};

export default Toolbar;
