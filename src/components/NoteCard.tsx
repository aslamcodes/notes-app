import { FC, FormEvent, MouseEvent, useState } from "react";
import { GiPencil } from "react-icons/gi";
import { BsTrash } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { CircularButton } from "./UI";
import { Note } from "../App";

const NoteCard: FC<NoteCardProps> = ({
  note,
  deleteNoteById,
  updateNoteById,
}) => {
  const [isOnFocus, setIsOnFocus] = useState(false);
  const [noteText, setNoteText] = useState(note.text);
  const [isOnEdit, setIsOnEdit] = useState(false);
  const onFocusHandler = () => {
    setIsOnFocus(true);
  };

  const onFocusOutHandler = () => {
    setIsOnFocus(false);
  };

  const onDeleteHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    deleteNoteById(note.id);
  };

  const toggleEditMode = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOnEdit(true);
  };

  const onEditSave = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    updateNoteById(note.id, noteText);
    setIsOnEdit(false);
  };

  const onNoteTextChangeHandler = (e: FormEvent<HTMLTextAreaElement>) => {
    setNoteText(e.currentTarget.value);
  };

  return (
    <div
      className="flex text-lg justify-between items-center relative bg-yellow-300 rounded px-4 py-7 m-3 shadow-lg cursor-pointer"
      onMouseEnter={onFocusHandler}
      onMouseLeave={onFocusOutHandler}
    >
      {/* Displaying the Note */}
      {!isOnEdit && <div>{noteText}</div>}

      {isOnEdit && (
        <div className="text-yellow-900 text-sm absolute bottom-1 left-4  ">
          {!note.isEdited ? (
            <p>Created on {note.dateCreated?.toLocaleString("en")}</p>
          ) : (
            <p>Edited on {note.lastEdited?.toLocaleString("en")}</p>
          )}
        </div>
      )}

      {/* Edit Controls */}
      {isOnEdit && (
        <textarea
          className="rounded-md p-3 bg-yellow-200 outline-none w-10/12 h-36 lg:h-32"
          value={noteText}
          onChange={onNoteTextChangeHandler}
        ></textarea>
      )}
      {/* Note Controls */}
      <div
        className={`flex flex-col lg:flex-row gap-5 transition-opacity duration-500 ease-in-out lg:${
          isOnFocus ? "opacity-100" : "opacity-0"
        }`}
      >
        {isOnEdit && (
          <CircularButton onClick={onEditSave}>
            <TiTick />
          </CircularButton>
        )}
        <CircularButton onClick={toggleEditMode}>
          <GiPencil />
        </CircularButton>
        <CircularButton onClick={onDeleteHandler}>
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
  updateNoteById: (noteId: string, newNoteText: string) => void;
}
