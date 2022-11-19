import React from "react";

interface ButtonProps {
  style?: React.CSSProperties;
  icon?: string;
  children: string;
}
export const Button = (props: ButtonProps) => {
  return (
    <div
      className="h-14 w-[100%] border-2 rounded-lg  border-gray-300 flex items-center justify-center"
      style={{ ...props.style }}>
      {props.children}
    </div>
  );
};
