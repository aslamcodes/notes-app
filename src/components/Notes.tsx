import { FC } from "react";
import { Note } from "../App";
import NoteCard from "./NoteCard";

const Notes: FC<NotesProps> = ({ notes }) => {
  return (
    <>
      {notes.map((note) => (
        <NoteCard key={note.id} text={note.text}></NoteCard>
      ))}
    </>
  );
};

interface NotesProps {
  notes: Note[];
}

export { Notes };
