import React, { useState } from "react"
import Hamburger from "hamburger-react"
import MenuOverlay from "./MenuOverlay"
import Link from "./Link"
import { Transition } from "@headlessui/react"
import LoggaMono from "./LoggaMono"

export default function HeaderBar() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="bg-black text-white md:h-screen flex flex-row md:flex-col justify-between items-center p-4 md:p-0">
      <div className="relative md:pt-8 ">
        <>
          <div className="z-30 relative">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              currentColor
              label="Visa navigation"
            />
          </div>

          <Transition
            show={isOpen}
            enter="duration-300 "
            enterFrom=" opacity-0"
            enterTo=" opacity-100"
          >
            <div
              onClick={() => setOpen(false)}
              className={`${
                isOpen ? "opacity-40 fixed inset-0" : "opacity-0"
              } bg-black`}
            />

            <div className="absolute z-20">
              {isOpen && (
                <div onClick={e => e.stopPropagation()}>
                  {" "}
                  <MenuOverlay />
                </div>
              )}
            </div>
          </Transition>
        </>
      </div>

      {/* Logo */}
      <div className="transform md:-rotate-90 text-white whitespace-nowrap md:mb-24 relative z-30">
        <Link to="/" title="Gå till startsida">
          <div className="w-24 md:w-48 relative">
            <LoggaMono />
          </div>
        </Link>
      </div>
    </div>
  )
}
