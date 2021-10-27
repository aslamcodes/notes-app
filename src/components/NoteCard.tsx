import { FC, useState } from "react";
import { GiPencil } from "react-icons/gi";
import { BsTrash } from "react-icons/bs";
import { CircularButton } from "./UI";
import { Note } from "../App";

const NoteCard: FC<NoteCardProps> = ({ note, deleteNoteById }) => {
  const [isOnFocus, setIsOnFocus] = useState(false);

  const onFocusHandler = () => {
    setIsOnFocus(true);
  };

  const onFocusOutHandler = () => {
    setIsOnFocus(false);
  };

  const onDelteHandler = () => {
    deleteNoteById(note.id);
  };

  return (
    <div
      className="flex justify-between items-center bg-yellow-300 rounded px-4 py-7 m-3"
      onMouseEnter={onFocusHandler}
      onMouseLeave={onFocusOutHandler}
    >
      <div>{note.text}</div>

      <div
        className={`flex gap-5 transition-opacity duration-500 ease-in-out ${
          isOnFocus ? "opacity-100" : "opacity-0"
        }`}
      >
        <CircularButton>
          <GiPencil />
        </CircularButton>
        <CircularButton onClick={onDelteHandler}>
          <BsTrash />
        </CircularButton>
      </div>
    </div>
  );
};

export default NoteCard;

interface NoteCardProps {
  note: Note;
  deleteNoteById: (noteId: string) => void;
}
