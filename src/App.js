import Form from "./Form";
import Header from "./Header";
import Container from "./Container";
import Fieldset from "./Fieldset";
import Label from "./Label";
import Input from "./Input";
import Select from "./Select";
import Element from "./Element";
import Button from "./Button";
import {useState} from "react";

function App() {

  const CurrencyOptions = () => {
    const currencies = [
      { code: 'EUR', rate: 4.55 },
      { code: 'CHF', rate: 4.71 },
      { code: 'GBP', rate: 5.14 },
      { code: 'USD', rate: 4.32 },
  ];
  return (
    <>
      {currencies.map((currency) => (
        <option key={currency.code} value={currency.code}>
          {currency.code}
        </option>
      ))}
    </>
  );
};

 return (
    <>
    <Container >
      <Element>
      <Form>
            <Fieldset>
                <Header title="Przelicznik walut" />
                  <>
                    <Label text="Waluta">
                      <Select />
                    </Label>
                  </>
                  <>
                    <Label text="Kwota">
                    <Input />
                    </Label>
                  </>
                  <Button text="Przelicz" />
                  <p><a className="form__link" href="https://www.google.pl/search?q=aktualne+kursy+walut&sxsrf=APwXEdchfR1U-81E-QWLdOA1oBqnYxmybw%3A1679774877006&source=hp&ei=nFQfZPKoOqWMlQeDroiQCQ&iflsig=AOEireoAAAAAZB9irQoocohV3Sp8_2uLaCfqQdj4vz21&oq=aktualne+kursy+&gs_lcp=Cgdnd3Mtd2l6EAMYADIECCMQJzIFCAAQgAQyBQgAEIAEMgUIABCABDIICAAQgAQQyQMyCAgAEIoFEJIDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoHCAAQigUQQzoRCC4QgAQQsQMQgwEQxwEQ0QM6CwguEIAEELEDEIMBOgsIABCABBCxAxCDAToLCC4QgAQQxwEQrwE6DgguEIoFELEDEIMBENQCOggIABCABBCxAzoLCAAQigUQsQMQgwE6DggAEIAEELEDEIMBEMkDOgoIABCKBRDJAxBDOgsIABCABBCxAxDJAzoICAAQgAQQkgNQAFjqFmCAJWgAcAB4AIABggGIAYwKkgEEMTMuMpgBAKABAQ&sclient=gws-wiz">Sprawdź aktualny kurs </a></p>
            </Fieldset>
        </Form>
      </Element>
    </Container>
    </>
  );  
};

export default App;
