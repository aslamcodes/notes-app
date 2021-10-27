import { FC } from "react";
import { Note } from "../App";
import NoteCard from "./NoteCard";

const Notes: FC<NotesProps> = ({ notes, onDeleteNote }) => {
  return (
    <>
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          deleteNoteById={onDeleteNote}
        ></NoteCard>
      ))}
    </>
  );
};

interface NotesProps {
  notes: Note[];
  onDeleteNote: (noteId: string) => void;
}

export { Notes };
