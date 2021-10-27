import { FC } from "react";
import { ButtonProps } from "./Button";

const CircularButton: FC<ButtonProps> = ({ children, onClick = () => {} }) => {
  return (
    <button
      className="rounded-full p-2 bg-yellow-600 text-white text-xl shadow-md transform transition duration hover:scale-125"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { CircularButton };
