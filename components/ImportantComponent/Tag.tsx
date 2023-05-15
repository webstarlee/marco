import React from "react";

interface TagProps {
  tag: string;
  index: number;
}

export function Tag({ tag, index }: TagProps): JSX.Element {
  return (
    <div className="tagSmallDiv">
      {tag}
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  )
}
