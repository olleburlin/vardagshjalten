import React from "react"
import { SocialIcon } from "react-social-icons"

function SocialLinks({ fill }) {
  return (
    <nav className="">
      {[
        {
          url: `https://www.instagram.com/vardagshjalten_foretag/`,
        },
        {
          url: `https://www.facebook.com/VardagshjaltenSkane/`,
        },
        {
          url: `https://www.linkedin.com/company/vardagshjälten-skåne-ab/`,
        },
      ].map(link => (
        <SocialIcon
          className="block text-white md:inline-block w-2"
          key={link.title}
          url={link.url}
          fgColor={fill}
          bgColor="transparent"
          style={{ height: 40, width: 40 }}
          target="_blank"
          rel="noreferrer noopener"
        >
          {link.title}
        </SocialIcon>
      ))}
    </nav>
  )
}

export default SocialLinks
