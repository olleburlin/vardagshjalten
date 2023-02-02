import React from "react"

export default function JobForm() {
  return (
    <div>
      <form
        action="https://getform.io/f/19ade4f5-7531-4b97-904e-c6e0b8cfac2e"
        method="POST"
        className="form space-y-8"
        enctype="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="form-group">
            <label htmlFor="Namn">
              Namn*
              <input
                type="text"
                name="Namn"
                required
                className="bg-secondary/10 block mt-2 w-full p-4 text-black"
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="Email">
              Email*
              <input
                type="email"
                name="Email"
                required
                className="bg-secondary/10 block mt-2 w-full p-4 text-black"
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="Telefon">
              Telefon*
              <input
                type="text"
                name="Telefon"
                required
                className="bg-secondary/10 block mt-2 w-full p-4 text-black"
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="Ort">
              Ort
              <input
                type="text"
                name="Ort"
                className="bg-secondary/10 block mt-2 w-full p-4 text-black"
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="Referens">
              Referens
              <input
                type="text"
                name="Referens"
                className="bg-secondary/10 block mt-2 w-full p-4 text-black"
              />
            </label>
          </div>

          <div className="form-group col-span-2">
            <p>Körkort*</p>
            <div className="flex flex-row gap-2">
              <input id="ja" type="radio" name="License" value="Ja" required />
              <label htmlFor="ja">Ja</label>
              <input id="nej" type="radio" name="License" value="Nej" />
              <label htmlFor="nej">Nej</label>
            </div>
          </div>
          <div className="form-group ">
            <p>Ladda upp CV</p>
            <div className="flex flex-row gap-2">
              <input type="file" name="cv" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Meddelande">
            Meddelande
            <textarea
              name="Meddelande"
              rows="4"
              className="block bg-secondary/10 mt-2 w-full p-4 text-black"
            />
          </label>
        </div>
        <div className="form-group flex flex-row gap-4 items-center md:items-end ">
          <input type="checkbox" name="Samtycke" required />
          <label htmlFor="Samtycke" className="leading-none ">
            Samtycker till att mina personuppgifter behandlas enligt
            integritetspolicyn.
          </label>
        </div>

        <div className="form-group">
          <button className="bg-primary text-white text-xl px-3 md:px-4 py-2 md:py-3 rounded-md font-bold uppercase shadow-sm">
            Skicka
          </button>
        </div>
      </form>
    </div>
  )
}
