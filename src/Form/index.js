import {
  StyleForm,
  Fieldset,
  Legend,
  Label,
  Button,
  Field,
  FieldInput,
} from "./styled";

import { useState } from "react";
import { Result } from "../Result";
import { currencies } from "./currencies";
import { Clock } from "../Clock";

export const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].code);
  const [result, setResult] = useState();
  const calculateRate = (currency, amount) => {
    const rate = currencies.find(({ code }) => code === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    calculateRate(currency, amount);
  };

  return (
    <StyleForm onSubmit={onSubmit}>
      <Fieldset>
        <Legend>Przelicznik walut</Legend>
        <Clock />
        <p>
          <label>
            <Label> Waluta </Label>
            <Field
              name="currency"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.code}
                </option>
              ))}
            </Field>
          </label>
        </p>
        <p>
          <label>
            <Label> Kwota </Label>
            <FieldInput
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              type="number"
              min="0.01"
              step="0.01"
              autoFocus
              required
              placeholder="Wpisz kwotę w zł"
            />
          </label>
        </p>
        <Button>Przelicz</Button>
        <p>
          <Result result={result} />
        </p>
        <p>
          <a href="https://www.google.pl/search?q=aktualne+kursy+walut&sxsrf=APwXEdchfR1U-81E-QWLdOA1oBqnYxmybw%3A1679774877006&source=hp&ei=nFQfZPKoOqWMlQeDroiQCQ&iflsig=AOEireoAAAAAZB9irQoocohV3Sp8_2uLaCfqQdj4vz21&oq=aktualne+kursy+&gs_lcp=Cgdnd3Mtd2l6EAMYADIECCMQJzIFCAAQgAQyBQgAEIAEMgUIABCABDIICAAQgAQQyQMyCAgAEIoFEJIDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoHCAAQigUQQzoRCC4QgAQQsQMQgwEQxwEQ0QM6CwguEIAEELEDEIMBOgsIABCABBCxAxCDAToLCC4QgAQQxwEQrwE6DgguEIoFELEDEIMBENQCOggIABCABBCxAzoLCAAQigUQsQMQgwE6DggAEIAEELEDEIMBEMkDOgoIABCKBRDJAxBDOgsIABCABBCxAxDJAzoICAAQgAQQkgNQAFjqFmCAJWgAcAB4AIABggGIAYwKkgEEMTMuMpgBAKABAQ&sclient=gws-wiz">
            Sprawdź aktualny kurs
          </a>
        </p>
      </Fieldset>
    </StyleForm>
  );
};

export default Form;
