import React, { FC } from "react";
import { Note } from "../App";

const NoteCard: FC<{ text: string }> = ({ text }) => {
  return <div>{text}</div>;
};

export default NoteCard;
