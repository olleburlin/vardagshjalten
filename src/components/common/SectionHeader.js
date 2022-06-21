import React from "react"

export default function SectionHeader({ text, theme }) {
  return (
    <h2
      className={`${
        theme === "light"
          ? "text-third decoration-primary"
          : "text-secondary decoration-primary"
      } underline underline-offset-2 decoration-8 text-7xl font-bold text-center py-4 md:py-8`}
    >
      {text}
    </h2>
  )
}
