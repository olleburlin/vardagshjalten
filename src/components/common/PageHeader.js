import React from "react"

export default function PageHeader({ text }) {
  return (
    <h1 className="text-center text-4xl md:text-7xl text-white font-bold underline decoration-8 decoration-primary">
      {text}
    </h1>
  )
}
