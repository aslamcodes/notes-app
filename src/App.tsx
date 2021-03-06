import { useEffect, useState } from "react";
import { Topbar, Form, Notes } from "./components";
import { getNotes, saveNotes } from "./localStoreUtils";

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const notes = getNotes();
    const initialNote = {
      id: "Initial Note",
      text: "Start Adding Notes",
    };
    setNotes(notes || initialNote);
  }, []);

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const showForm = () => {
    setIsFormVisible(true);
  };

  const onNewNoteHandler = (newNote: Note) => {
    setNotes((prev) => [newNote, ...prev]);
  };

  const onDeleteNoteHandler = (noteId: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== noteId));
  };

  const onUpdateNoteHandler = (id: string, newNote: string) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? { ...note, text: newNote, lastEdited: new Date(), isEdited: true }
          : note
      )
    );
  };
  return (
    <>
      <Topbar onNewNote={showForm} />
      <div className="flex flex-col px-3">
        {isFormVisible && (
          <Form
            formVisibility={setIsFormVisible}
            onNewNote={onNewNoteHandler}
          />
        )}
        <Notes
          notes={notes}
          onDeleteNote={onDeleteNoteHandler}
          onEditNote={onUpdateNoteHandler}
        />
      </div>
    </>
  );
}

export default App;

export interface Note {
  id: string;
  text: string;
  dateCreated?: Date;
  lastEdited?: Date;
  isEdited?: boolean;
}
