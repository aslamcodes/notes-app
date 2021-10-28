import { FC } from "react";

import { Button } from "./UI";

export const Topbar: FC<TopbarProps> = ({ onNewNote }) => {
  return (
    <div className="flex justify-between items-center fixed top-0 w-full px-6 py-4 text-xl bg-yellow-400 shadow-xl">
      <h2 className="font-bold text-yellow-900">NOTES</h2>
      <Button onClick={onNewNote}>Add Note</Button>
    </div>
  );
};

interface TopbarProps {
  onNewNote: () => void;
}
