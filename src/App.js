import Form from "./Form";
import Header from "./Header";
import Container from "./Container";
import Fieldset from "./Fieldset";
import Label from "./Label";
import Input from "./Input";
import Select from "./Select";

function App() {
 return (
    <Container>
      <div className="element">
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
                  <button className="form__button">Przelicz</button>
                  <p><strong><span></span><span></span></strong></p>
                  <p><a className="form__link" href="https://www.google.pl/search?q=aktualne+kursy+walut&sxsrf=APwXEdchfR1U-81E-QWLdOA1oBqnYxmybw%3A1679774877006&source=hp&ei=nFQfZPKoOqWMlQeDroiQCQ&iflsig=AOEireoAAAAAZB9irQoocohV3Sp8_2uLaCfqQdj4vz21&oq=aktualne+kursy+&gs_lcp=Cgdnd3Mtd2l6EAMYADIECCMQJzIFCAAQgAQyBQgAEIAEMgUIABCABDIICAAQgAQQyQMyCAgAEIoFEJIDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoHCAAQigUQQzoRCC4QgAQQsQMQgwEQxwEQ0QM6CwguEIAEELEDEIMBOgsIABCABBCxAxCDAToLCC4QgAQQxwEQrwE6DgguEIoFELEDEIMBENQCOggIABCABBCxAzoLCAAQigUQsQMQgwE6DggAEIAEELEDEIMBEMkDOgoIABCKBRDJAxBDOgsIABCABBCxAxDJAzoICAAQgAQQkgNQAFjqFmCAJWgAcAB4AIABggGIAYwKkgEEMTMuMpgBAKABAQ&sclient=gws-wiz">Sprawdź aktualny kurs </a></p>
            </Fieldset>
        </Form>
      </div>
    </Container>   
  );  
};

export default App;
