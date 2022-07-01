import React from "react"
import Link from "./Link"

export default function Button({ text, theme, url }) {
  return (
    <Link to={url}>
      <div
        className={`${
          theme === "light"
            ? "bg-secondary text-white"
            : "bg-primary text-white"
        } text-xl px-4 md:px-6 py-3 md:py-4 rounded-md font-bold uppercase shadow-sm inline-block`}
      >
        {text}
      </div>
    </Link>
  )
}
