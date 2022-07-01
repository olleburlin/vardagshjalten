import React from "react"

export default function SubHeader({ text, theme }) {
  return (
    <h5
      className={`${
        theme === "light" ? "text-white" : "text-secondary"
      }  text-2xl md:text-6xl font-bold`}
    >
      {text}
    </h5>
  )
}
