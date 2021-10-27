import {
  SyntheticEvent,
  FormEvent,
  useState,
  SetStateAction,
  Dispatch,
  FC,
} from "react";
import { Note } from "../App";
import { Button } from "./UI";

const Form: FC<FormProps> = ({ formVisibility, onNewNote }) => {
  const [noteText, setNoteText] = useState("");

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  const onNoteChange = (e: FormEvent<HTMLTextAreaElement>) => {
    setNoteText(e.currentTarget.value);
  };

  const onSave = () => {
    onNewNote({ id: Date.now().toString(), text: noteText });
    formVisibility(false);
  };

  const onClose = () => {
    formVisibility(false);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full items-end text-xl p-3 rounded-lg bg-yellow-300"
    >
      <div className="flex justify-center items-center w-full">
        <textarea
          rows={5}
          value={noteText}
          onChange={onNoteChange}
          className="mx-2 p-2 rounded-lg w-full bg-yellow-200 outline-none"
          placeholder="Your Notes here <3"
        />
      </div>
      <div className="flex gap-9 mt-10">
        <Button onClick={onClose}>Close</Button>
        <Button onClick={onSave}>Save Note</Button>
      </div>
    </form>
  );
};

interface FormProps {
  formVisibility: Dispatch<SetStateAction<boolean>>;
  onNewNote: (newNote: Note) => void;
}

export { Form };
