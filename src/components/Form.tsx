import {
  SyntheticEvent,
  FormEvent,
  useState,
  SetStateAction,
  Dispatch,
  FC,
} from "react";
import { Button } from "./";

const Form: FC<FormProps> = ({ formVisibilityHandler }) => {
  const [noteText, setNoteText] = useState("");

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  const onNoteChange = (e: FormEvent<HTMLTextAreaElement>) => {
    setNoteText(e.currentTarget.value);
  };

  const onSave = () => {};

  const onClose = () => {
    formVisibilityHandler(false);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col items-end text-xl  mx-24 p-3 rounded-lg bg-yellow-200"
    >
      <div className="flex justify-between gap-11 w-full ">
        <p>Your Note</p>
        <textarea
          rows={5}
          cols={33}
          value={noteText}
          onChange={onNoteChange}
          className="px-2 py-1 flex-grow border-2 rounded-lg"
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
  formVisibilityHandler: Dispatch<SetStateAction<boolean>>;
}

export { Form };
