# Utvklingsnotater Fintech Enigma Web.

### Kontaktskjema bedrifter

Trenger et skjema på siden [_kontakt oss_](./docs/Kontakt_oss.mdx) hvor personer og bedrifter kan ta direkte kontakt med oss. Det må ha GUI ca. slik:

````
navn: |<navn input>|
epost: |<epost input>
tittel: |<tittel input>|
melding: 
+------------------------------+
| <skriv her>                  | 
|                              | 
|                              | 
|                              | 
+------------------------------+
            <Send>
````

- Lag GUIen og skriv CSS slik at det ser fint ut på alle skjermoppløsninger

    * Tips; kopier noe ferdig fra nett og modifiser.

    * Bruk fargekoder som er spesifisert i [GrafiskProfil01.pdf](./docs/graphics/GrafiskProfil01.pdf) slik at skjemaet matcher temafargen på nettsiden. 

##

- Importer nødvendige bibliotek øverst i filen:
    ````javascript
    import { useState, useEffect } from 'react';
    import axios from 'axios';
    ````


- Lag en funksjon som responderer på _send_ knappen. Implimenter følgende kode i funksjonen:

    ````javascript
    const melding = {
        navn: "navn her",
        epost: "epost her",
        tittel: "tittel her",
        melding: "melding her"
    };
    const URL = 'https://www.fintechenigmaapi.onrender.com/KontaktFintechEnigma/'
    const [ status, setStatus ] = useState({});
    useEffect(() => {
        axios.post(URL, melding)
        .then(res => setStatus(res.data.status))
    }, []);
    if(status && status === "OK"){
        // Bytt ut skjemaet med en `Takk for at du tok kontakt` melding av noe slag
    }
    else if (status && status !== "OK"){
        alert(status);
    }
    ````


- Merk at javascrit koden skrives i [mdx](https://docusaurus.io/docs/markdown-features/react), litt anderledes syntax enn vanlig .js-fil. 