import React from "react"

import Link from "../common/Link"
export default function NewsItem({ post, context }) {
  const { title, uri, date, content } = post

  return (
    <>
      {context === "sidebar" ? (
        <div>
          <div className="text-base">{date}</div>
          <h5>
            <Link to={"/aktuellt" + uri}>{title}</Link>
          </h5>
        </div>
      ) : context === "pageFeed" ? (
        <div className="grid md:gap-4 border-b-2 last:border-0 border-secondary/50 py-4">
          <div>
            <div className="text-base">{date}</div>
            <h3>
              <Link to={"/aktuellt" + uri}>{title}</Link>
            </h3>
          </div>
          <div
            className="wp-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      ) : context === "indexFeed" ? (
        <div>
          <div className="text-sm md:text-xl">{date}</div>
          <h4>
            <Link to={"/aktuellt" + uri}>{title}</Link>
          </h4>
        </div>
      ) : (
        ""
      )}
    </>
  )
}
