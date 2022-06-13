import React, { useLayoutEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { flatListToHierarchical } from "../../utils/flatListToHierarchical"
import Link from "./Link"
import { Disclosure } from "@headlessui/react"
import { ChevronUpIcon } from "@heroicons/react/outline"
export default function MenuOverlay() {
  const data = useStaticQuery(graphql`
    {
      mainMenu: wpMenu(databaseId: { eq: 44 }) {
        id
        name
        menuItems {
          nodes {
            url
            parentId
            label
            id
          }
        }
      }
    }
  `)
  const menuItems = data.mainMenu.menuItems?.nodes
  const mobileMenu = flatListToHierarchical(menuItems)
  useLockBodyScroll()
  return (
    <div className=" z-20 flex flex-col items-center justify-center ">
      <div className="font-medium text-2xl md:text-4xl bg-primary w-full md:w-[40rem] fixed top-0 left-0 md:overflow-x-hidden z-40  inset-0 h-screen ">
        <div className="   h-full py-12">
          <div className="h-full ">
            <div className="flex flex-col justify-between items-start h-full pt-16 px-8 md:p-24 md:px-32">
              <div className="space-y-8 md:max-w-xl w-full pb-32">
                {mobileMenu.map(menuItem => {
                  return (
                    <div key={menuItem.id}>
                      {menuItem.children.length === 0 ? (
                        <div className="">
                          <Link to={menuItem.url} className="block">
                            {menuItem.label}
                          </Link>
                        </div>
                      ) : (
                        <div className="w-full" key={menuItem.id}>
                          <Disclosure as="div" className="w-full">
                            {({ open }) => (
                              <>
                                <Disclosure.Button className="w-full font-medium">
                                  <div className="flex flex-row items-center justify-between w-full  relative">
                                    <div>{menuItem.label}</div>
                                    <div className="w-10  overflow-hidden absolute right-0">
                                      <ChevronUpIcon
                                        className={`${
                                          open
                                            ? "transition-all"
                                            : "transition-all  transform rotate-180"
                                        } `}
                                      />
                                    </div>
                                  </div>
                                </Disclosure.Button>
                                <Disclosure.Panel
                                  as="div"
                                  className="space-y-4 my-8 pl-8 text-xl md:text-2xl"
                                >
                                  {menuItem.children.map(post => {
                                    return (
                                      <div key={post.id}>
                                        <Link to={post.url}>
                                          <div key={post.id} className="">
                                            {post.label}
                                          </div>
                                        </Link>
                                      </div>
                                    )
                                  })}
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
function useLockBodyScroll() {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow
    // Prevent scrolling on mount
    document.body.style.overflow = "hidden"
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle)
  }, []) // Empty array ensures effect is only run on mount and unmount
}
