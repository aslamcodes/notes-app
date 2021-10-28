import { FC, MouseEvent } from "react";

const Button: FC<ButtonProps> = ({ children, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-between items-center gap-3 bg-yellow-600 text-white p-2 rounded-lg shadow-lg transform transition duration hover:scale-110"
    >
      {children}
    </button>
  );
};

export interface ButtonProps {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export { Button };
