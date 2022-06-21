import React from "react"

export default function OfferForm() {
  return (
    <div>
      <form action="/boka" className="form space-y-8">
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
              Telefon
              <input
                type="text"
                name="Telefon"
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
            <label htmlFor="Tjänst">
              Tjänst
              <select
                name="Tjänst"
                className="bg-secondary/10 block mt-2 w-full p-4 text-black appearance-none"
              >
                <option value="">--Välj--</option>
                <option value="Hemstädning">Hemstädning</option>
                <option value="Storstädning">Storstädning</option>
                <option value="Flyttstädning">Flyttstädning</option>
                <option value="Fönsterputs">Fönsterputs</option>
                <option value="Trädgårdsarbete">Trädgårdsarbete</option>
                <option value="Snöskottning">Snöskottning</option>
                <option value="Fastighetsskötsel">Fastighetsskötsel</option>
                <option value="Kontorsstäd">Kontorsstäd</option>
                <option value="Annat">Annat</option>{" "}
              </select>
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Meddelande">
            Meddelande
            <textarea
              name="Meddelande"
              rows="4"
              className="block bg-secondary/10 block mt-2 w-full p-4 text-black"
            />
          </label>
        </div>
        <div className="form-group flex flex-row gap-4 items-center md:items-end ">
          <input type="checkbox" name="Samtycke" />
          <label htmlFor="Samtycke" className="leading-none ">
            Samtycker till att mina personuppgifter behandlas enligt
            integritetspolicyn.
          </label>
        </div>

        <div className="form-group">
          <button className="px-3 py-2 bg-primary text-white font-medium rounded-md">
            Skicka
          </button>
        </div>
      </form>
    </div>
  )
}