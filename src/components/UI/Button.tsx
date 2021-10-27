import { FC } from "react";

const Button: FC<ButtonProps> = ({ children, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-between items-center gap-3 bg-yellow-500 text-white p-2 rounded-lg"
    >
      {children}
    </button>
  );
};

interface ButtonProps {
  onClick: () => void;
}

export { Button };
