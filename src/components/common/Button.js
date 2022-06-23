import React from "react"
import Link from "./Link"

export default function Button({ text, theme, url }) {
  return (
    <Link to={url}>
      <div
        className={`${
          theme === "light" ? "bg-white text-primary" : "bg-primary text-white"
        } text-xl px-3 md:px-4 py-2 md:py-3 rounded-md font-bold uppercase shadow-sm`}
      >
        {text}
      </div>
    </Link>
  )
}
