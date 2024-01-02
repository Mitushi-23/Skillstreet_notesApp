import React, { useState } from "react";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import TextDecreaseIcon from "@mui/icons-material/TextDecrease";

const ButtonGrp = ({ onStyleChange }) => {
  const [textAlign, settextAlign] = useState("start");
  const [fontSize, setfontSize] = useState(20);
  const [fontWeight, setfontWeight] = useState(false);
  const [fontStyle, setfontStyle] = useState(false);
  const [textDecoration, settextDecoration] = useState(false);

  const handleAlignLeft = () => {
    settextAlign("start");
    onStyleChange("textAlign", "start");
  };

  const handleAlignCenter = () => {
    settextAlign("center");
    onStyleChange("textAlign", "center");
  };

  const handleAlignRight = () => {
    settextAlign("end");
    onStyleChange("textAlign", "end");
  };

  const handleAlignJustify = () => {
    settextAlign("justify");
    onStyleChange("textAlign", "justify");
  };

  const handleToggleBold = () => {
    setfontWeight(!fontWeight);
    onStyleChange("fontWeight", !fontWeight);
  };

  const handleToggleItalic = () => {
    setfontStyle(!fontStyle);
    onStyleChange("fontStyle", !fontStyle);
  };

  const handleToggleUnderline = () => {
    settextDecoration(!textDecoration);
    onStyleChange("textDecoration", !textDecoration);
  };

  const handleDecreaseFont = () => {
    setfontSize(fontSize - 2);
    onStyleChange("fontSize", fontSize - 2);
  };

  const handleIncreaseFont = () => {
    setfontSize(fontSize + 2);
    onStyleChange("fontSize", fontSize + 2);
  };

  return (
    <div>
      <div
        className="text-[grey]"
        style={{
          display: "flex",
          margin: "auto",
          flexWrap: "wrap",
          padding: "5px 5px",
          borderRadius: "10px",
        }}
      >
        <button className="mx-2" type="button" onClick={handleAlignCenter}>
          <FormatAlignCenterIcon />
        </button>
        <button className="mx-2" type="button" onClick={handleAlignLeft}>
          <FormatAlignLeftIcon />
        </button>
        <button className="mx-2" type="button" onClick={handleAlignRight}>
          <FormatAlignRightIcon />
        </button>
        <button className="mx-2" type="button" onClick={handleAlignJustify}>
          <FormatAlignJustifyIcon />
        </button>
        <button className="mx-2" type="button" onClick={handleToggleBold}>
          <FormatBoldIcon />
        </button>
        <button className="mx-2" type="button" onClick={handleToggleItalic}>
          <FormatItalicIcon />
        </button>
        <button className="mx-2" type="button" onClick={handleToggleUnderline}>
          <FormatUnderlinedIcon />
        </button>
        <button className="mx-2" type="button" onClick={handleDecreaseFont}>
          <TextDecreaseIcon />
        </button>
        <button className="mx-2" type="button" onClick={handleIncreaseFont}>
          <TextIncreaseIcon />
        </button>
      </div>
    </div>
  );
};

export default ButtonGrp;
