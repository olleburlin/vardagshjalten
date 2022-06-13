import React from "react"

export default function SingleService({ page }) {
  const { title, grundinfo, innefattar, priserTjanst } = page
  return <div className="container mx-auto">{title}</div>
}
