import { BsPatchPlus } from "react-icons/bs";
import Button from "./UI/Button";
export const Topbar = () => {
  return (
    <div className="flex justify-between items-center fixed w-full px-16 py-4 text-xl bg-yellow-400">
      <h2 className="font-bold text-yellow-900">NOTES</h2>
      <Button onClick={() => {}}>
        New Note <BsPatchPlus />
      </Button>
    </div>
  );
};
