import { Dialog, Transition } from "@headlessui/react"
import React, { Fragment, useState } from "react"
import { navigate } from "gatsby"

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
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
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg lg:text-2xl font-medium leading-6 text-primary"
                  >
                    Äntligen öppnar vi i Halland! 🎉
                  </Dialog.Title>
                  <div className="mt-4">
                    <p className="text-base lg:text-xl text-secondary">
                      Vi har ett fantastiskt öppningserbjudande! Vi bjuder de
                      första 50 kunderna i Halland på första städtillfället.
                      <br />
                    </p>
                  </div>

                  <div className="mt-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm lg:text-lg font-medium text-white hover:bg-primary/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-transparent "
                        onClick={() => navigate("/boka")}
                      >
                        Boka
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-secondary/10 px-4 py-2 text-sm lg:text-lg font-medium text-secondary hover:bg-secondary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-transparent focus-visible:ring-offset-2"
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
    </>
  )
}
