import { Dialog, Transition } from "@headlessui/react"
import React, { Fragment, useState } from "react"
import { navigate } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

export default function MyModal() {
  const data = useStaticQuery(graphql`
    query {
      wpPage(databaseId: { eq: 40 }) {
        id
        popup {
          innehallPopup
          lankKnappPopup
          rubrikPopup
          textKnappPopup
          visaPopup
        }
      }
    }
  `)

  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const popup = data.wpPage.popup
  const {
    innehallPopup,
    lankKnappPopup,
    rubrikPopup,
    textKnappPopup,
    visaPopup,
  } = popup

  return (
    <>
      {popup && visaPopup ? (
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-20" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-teal-900/50" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-secondary p-16 lg:p-24 align-middle shadow-xl transition-all text-center flex flex-col gap-8 lg:gap-12">
                    <Dialog.Title
                      as="h3"
                      className="text-lg lg:text-2xl font-medium leading-6 text-white uppercase"
                    >
                      {rubrikPopup}
                    </Dialog.Title>
                    <div className="">
                      <div className="text-base lg:text-xl text-white">
                        <div
                          dangerouslySetInnerHTML={{ __html: innehallPopup }}
                          className="wp-content"
                        />
                      </div>
                    </div>

                    <div className="">
                      <div className="flex flex-col sm:flex-row gap-4 lg:items-center lg:justify-center">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm lg:text-lg font-medium text-white hover:bg-primary/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-transparent "
                          onClick={() => navigate(lankKnappPopup)}
                        >
                          {textKnappPopup}
                        </button>
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm lg:text-lg font-medium text-secondary hover:bg-stone-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-transparent focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Stäng
                        </button>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      ) : null}
    </>
  )
}
