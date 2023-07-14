import {
  StyledForm,
  Fieldset,
  Legend,
  Label,
  Button,
  Field,
  FieldInput,
  Loading,
  Error,
} from "./styled";

import { useState } from "react";
import { Result } from "../Result";
import { currencies } from "./currencies";
import { Clock } from "../Clock";
import { useRatesData } from "./useRatesData";

export const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].code);
  const [result, setResult] = useState();
  const ratesData = useRatesData();

  const calculateRate = (currency, amount) => {
    const rate = ratesData.rates[currency];

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
    <StyledForm onSubmit={onSubmit}>
      <Fieldset>
        <Legend>Przelicznik walut</Legend>

        {ratesData.status === "loading" ? (
          <>
            <Loading>
              Jeszcze chwilka, Pobieramy aktualne stawki walut na dzisiejszy dzień
            </Loading>
          </>

        ) : ratesData.status === "error" ? (
            <Error>
              Coś posżło nie tak... Sprwadź połączenie z internetem! Jeśli wszystko jes podłączone... Pracujemy nad poprawą błędu! Zajrzyj do nas za chwilę ;D
            </Error>
        ) : (
        
<>
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
        </>
        )}
      </Fieldset>
    </StyledForm>
  );
};

export default Form;
