import "./form.css";
import { useState } from "react";
import { Result } from "../Result";
import { currencies } from "./currencies";

export const Form = ({ calculateRate, result }) => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].code);

  const onSubmit = (event) => {
    event.preventDefault();
    calculateRate(currency, amount);
  };

  return (
    
        <form className="form" onSubmit={onSubmit}>
          <fieldset className="form__fieldset">
            <legend className="form__legend">Przelicznik walut</legend>
            <p>
              <label>
                <span className="form__labelText"> Waluta </span>
                <select
                  className="form__field"
                  name="currency"
                  value={currency}
                  onChange={({ target }) => setCurrency(target.value)}
                >
                  {currencies.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                      {currency.code}
                    </option>
                  ))}
                </select>
              </label>
            </p>
            <p>
              <label>
                <span className="form__labelText"> Kwota </span>
                <input
                  value={amount}
                  onChange={({ target }) => setAmount(target.value)}
                  type="number"
                  className="form__field"
                  min="0.01"
                  step="0.01"
                  autoFocus
                  required
                  placeholder="Wpisz kwotę w zł"
                />
              </label>
            </p>
            <button className="form__button">Przelicz</button>
            <p>
              <Result result={result} />
            </p>
            <p>
              <a
                className="form__link"
                href="https://www.google.pl/search?q=aktualne+kursy+walut&sxsrf=APwXEdchfR1U-81E-QWLdOA1oBqnYxmybw%3A1679774877006&source=hp&ei=nFQfZPKoOqWMlQeDroiQCQ&iflsig=AOEireoAAAAAZB9irQoocohV3Sp8_2uLaCfqQdj4vz21&oq=aktualne+kursy+&gs_lcp=Cgdnd3Mtd2l6EAMYADIECCMQJzIFCAAQgAQyBQgAEIAEMgUIABCABDIICAAQgAQQyQMyCAgAEIoFEJIDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoHCAAQigUQQzoRCC4QgAQQsQMQgwEQxwEQ0QM6CwguEIAEELEDEIMBOgsIABCABBCxAxCDAToLCC4QgAQQxwEQrwE6DgguEIoFELEDEIMBENQCOggIABCABBCxAzoLCAAQigUQsQMQgwE6DggAEIAEELEDEIMBEMkDOgoIABCKBRDJAxBDOgsIABCABBCxAxDJAzoICAAQgAQQkgNQAFjqFmCAJWgAcAB4AIABggGIAYwKkgEEMTMuMpgBAKABAQ&sclient=gws-wiz"
              >
                Sprawdź aktualny kurs
              </a>
            </p>
          </fieldset>
        </form>
   
   
  );
};

export default Form;
