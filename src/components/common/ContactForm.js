import React from "react"

export default function ContactForm() {
  return (
    <div>
      <form action="/boka" className="form space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="form-group">
            <label htmlFor="Namn">
              Namn*
              <input type="text" name="Namn" required />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="Email">
              Email*
              <input type="email" name="Email" required />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="Telefon">
              Telefon
              <input type="text" name="Telefon" />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="Ort">
              Ort
              <input type="text" name="Ort" />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="Adress">
              Adress
              <input type="text" name="Adress" />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="Kvm">
              Antal Kvm
              <input type="number" name="Kvm" />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="Mötestyp">
              Mötestyp
              <select name="Mötestyp" className="appearance-none">
                <option value="">--Välj--</option>
                <option value="Hembesök (trad. Fysiskt möte)">
                  Hembesök (trad. Fysiskt möte)
                </option>
                <option value="Zoommöte (vi skickar en länk till din mejl)">
                  Zoommöte (vi skickar en länk till din mejl)
                </option>
                <option value="Facetime (endast för Iphone)">
                  Facetime (endast för Iphone)
                </option>
                <option value="WhatsApp (kräver APP i telfonen)">
                  WhatsApp (kräver APP i telfonen)
                </option>
              </select>
            </label>
          </div>
        </div>
        <div className="form-group flex flex-row gap-2 items-end ">
          <input type="checkbox" name="Samtycke" />
          <label htmlFor="Samtycke" className="leading-none ">
            Samtycker till att mina personuppgifter behandlas enligt
            integritetspolicyn.
          </label>
        </div>

        <div className="form-group">
          <button className="">Skicka</button>
        </div>
      </form>
    </div>
  )
}
