import { useEffect, useState } from "react";
import { Topbar, Form, Notes } from "./components";
import { getNotes, saveNotes } from "./localStoreUtils";

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const notes = getNotes();
    setNotes(notes || [{ id: "Initial Note", text: "Start Adding Notes" }]);
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
      prev.map((note) => (note.id === id ? { ...note, text: newNote } : note))
    );
  };
  return (
    <>
      <Topbar onNewNote={showForm} />
      {isFormVisible && (
        <Form formVisibility={setIsFormVisible} onNewNote={onNewNoteHandler} />
      )}
      <Notes
        notes={notes}
        onDeleteNote={onDeleteNoteHandler}
        onEditNote={onUpdateNoteHandler}
      />
    </>
  );
}

export default App;

export interface Note {
  id: string;
  text: string;
}
