import { FC } from "react";
import { Note } from "../App";
import NoteCard from "./NoteCard";

const Notes: FC<NotesProps> = ({ notes, onDeleteNote, onEditNote }) => {
  return (
    <>
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          deleteNoteById={onDeleteNote}
          updateNoteById={onEditNote}
        ></NoteCard>
      ))}
    </>
  );
};

interface NotesProps {
  notes: Note[];
  onDeleteNote: (noteId: string) => void;
  onEditNote: (id: string, newNote: string) => void;
}

export { Notes };
