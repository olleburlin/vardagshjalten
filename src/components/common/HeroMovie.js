import React from "react"

export default function HeroMovie() {
  return (
    <div className="video-wrapper h-full w-full overflow-hidden cover object-cover">
      <video
        className="object-cover max-h-auto inset-0 w-full h-full"
        autoPlay
        playsInline
        muted
        loop
      >
        <source
          src="https://cms.vardagshjalten.se/wp-content/uploads/2023/08/2bbb8844-ec86-4a4c-91f4-fa5e52526fdd-2.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  )
}
