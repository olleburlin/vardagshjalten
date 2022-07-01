import React from "react"

export default function SectionHeader({ text, theme }) {
  return (
    <h2
      className={`${
        theme === "light" ? "text-secondary" : "text-primary"
      } uppercase text-xl md:text-2xl font-bold py-4 md:py-8`}
    >
      {text}
    </h2>
  )
}
