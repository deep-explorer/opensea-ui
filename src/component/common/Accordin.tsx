import React, { useEffect, useState } from "react";

type AccordinProps = {
  caption: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};
export const Accordin = (props: AccordinProps) => {
  const [isOpened, setOpenStatus] = useState(false);

  return (
    <div className="w-[100%]" style={{ ...props.style }}>
      <div
        className="flex justify-between h-10 hover:bg-zinc-200 cursor-pointer rounded-lg p-2 items-center"
        onClick={() => setOpenStatus(!isOpened)}>
        <span>{props.caption}</span>
        {isOpened ? (
          <svg
            className="h-6 w-6 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round">
            {" "}
            <line x1="12" y1="19" x2="12" y2="5" />{" "}
            <polyline points="5 12 12 5 19 12" />
          </svg>
        ) : (
          <svg
            className="h-6 w-6 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round">
            {" "}
            <line x1="12" y1="5" x2="12" y2="19" />{" "}
            <polyline points="19 12 12 19 5 12" />
          </svg>
        )}
      </div>
      {isOpened && (
        <div className="p-3 w-[100%]">
          {props.children}
          <hr className="mt-1" />
        </div>
      )}
    </div>
  );
};
