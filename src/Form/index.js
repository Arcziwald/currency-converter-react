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
  Footer,
} from "./styled";

import { useState } from "react";
import { Result } from "../Result";
import { Clock } from "../Clock";
import { useRatesData } from "./useRatesData";

export const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [result, setResult] = useState(null);
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
  const currencyDate = ratesData.date;

  return (
    <StyledForm onSubmit={onSubmit}>
      <Fieldset>
        <Legend>Przelicznik walut</Legend>

        {ratesData.state === "loading" ? (
          <Loading>
            Momencik 😎... <br />
            Ładuję kursy walut z Europejskiego Banku Centralnego
          </Loading>
        ) : ratesData.state === "error" ? (
          <Error>
            Hmm 🤔... Coś poszło nie tak. <br />Sprawdź, czy masz połączenie z
            internetem.
            <br />
            Jeśli masz ... to wygląda na to, że to nasza wina. <br /> Może spróbuj
            później😜
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
                  {!!ratesData.rates &&
                    Object.keys(ratesData.rates).map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
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

            <Footer>
              Kursy walut pobierane są z Europejskiego Banku Centralnego <br />{" "}
              Aktualne na dzień: <b>{currencyDate}</b>
            </Footer>
          </>
        )}
      </Fieldset>
    </StyledForm>
  );
};

export default Form;
