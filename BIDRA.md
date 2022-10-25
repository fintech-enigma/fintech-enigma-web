# Bidra

Dersom du er ny til _open source contribution_, følg prosessen **nøye**.

## DEL 1. Gjøres kun første gang. 

### 1. Gå til <a href="https://github.com/fintech-enigma/fintech-enigma-web" target="_blank">Fintech Enigma Web repository'et.</a>

<br>

### 2. Start med å forke prosjektet.

Klikk på Fork-knappen oppe i høyre hjørne.

<img width="947" alt="Bilde 1" src="https://user-images.githubusercontent.com/70739893/197612673-a5ad93ff-19d4-4e2b-b147-4a49817fd831.png">

<br>

### 3. Klikk _Create new fork_. 

<img width="949" alt="Bilde 2" src="https://user-images.githubusercontent.com/70739893/197612856-9dbd5868-7388-4946-b623-5c077bf7d24c.png">

<br>

### 4. Finn **din** fork under **dine** repositories.

<img width="946" alt="Bilde 3" src="https://user-images.githubusercontent.com/70739893/197613004-c3bd4b0e-ff17-4730-bb86-9503e255308a.png">

<br>

### 5. Klikk på _Code_ knappen. 

<img width="947" alt="Bilde 4" src="https://user-images.githubusercontent.com/70739893/197613118-b11433f3-3ecf-4882-89bf-7b71a3f7698d.png">

### 6. Klikk på _kopier_-knappen. 

<img width="948" alt="Bilde 5" src="https://user-images.githubusercontent.com/70739893/197613296-4e715489-382c-4e7f-a2c5-f9127696e79a.png">

<br>

### 7. Åpne Terminal (på Mac) eller Powershell (på Windows).

<br>

### 8. Naviger inn i din ønskede mappe.

- For eksempel:

    ````
    cd Dokumenter/Kodeprosjekter
    ````

<br>

### 9. Klon git-repoet:

- **NB:** Lim inn den lenken du kopierte. 
    ````
    git clone https://github.com/<username>/fintech-enigma-web.git
    ````

<br>

### 10. Naviger inn i repoet.

````
cd fintech-enigma-web
````

<br>

### 11. Kjør installasjonsprosessen.

- **NB:** Pass på at du fortsatt er i riktig mappe. 

    ````
    npm install
    ````

<br>

<br>

## DEL 2. Gjøres for hver gang du skal bidra med en endring. 

### 1. Sjekk at din fork er up-to-date.

- Se [stegene](#16-endringene-dine-er-tatt-med-i-prosjektet-gå-til-github-repositoryet-ditt-og-oppdater-siden) (steg 16 - 19) for å synke forken. 

<br>

### 2. Åpne prosjektet i VS-Code. 

<br>

### 3. Trykk cmd + j (på Mac), ctrl + j (på Windows)

- Dette åpner terminalen for prosjeket. 

<br>

### 4. _Pull inn_ de nye endringene som er gjort på prosjektet. 

````
git pull
````

<br>

### 5. Lag en ny brach.
- 
    ````
    git checkout -b <navn-paa-endring>
    ````

- **NB:** Bytt ut `<navn-paa-endring>` med navnet på den endringen du har tenkt å gjøre, **IKKE** ta med '<' og '>' på start og sluten. 

<br>

### 6. Gjør dine endringer :)

<br>

### 7. Klar til å foreslå endringene dine?

#### Følg sjekkelisten _nøye_. 

1. Sjekk at koden din fungerer som den skal, ingen errors eller potensielle bugs. 

2. Sjekk at koden din ikke ødelegger for noen andres arbeid. 

3. Sjekk at du har skrevet forklarende kommentarer til koden din, har brukt menigsfulle variabelnavn og at koden din er skrevet på en ryddig og oversiktlig måte. Dette er for at det skal være lett for andre å forstå. 

4. Skriv hva du jobber med, fullført med initialer og dato i [UTVIKLING.md](./UTVIKLING.md). (Se i filen hvordan du skal føre). 

<br>

### 8. Legg til endringene dine. 

- Skriv følgende i terminalen i VS-Code. 

    ````
    git add .
    ````

- Legger til alle filene i mappen du er navigert i (skal være ./fintech-enigma-web). 

<br>

### 9. Utfør endringene.

- Skriv inn din egen tekst om hva du har gjort:

    ````
    git commit -m 'kort hva jeg har gjort'. 
    ````

- **NB:** Hold det kort ellers vil det ikke virke!

<br>

### 10. Push endringene dine til din brach.

- **NB:** Bruk navnet på branchen du lagde før du begynte på endringene. 

    ````
    git push origin <navn-paa-branch>
    ````

- **IKKE** ta med '<' og '>' på start og slutten. 

<br>

### 11. Gå tilbake til github repository'et ditt og oppdater siden. 

Da vil noe slikt komme opp. 

<img width="949" alt="Bilde 6" src="https://user-images.githubusercontent.com/70739893/197613553-899d135c-3360-4717-8ae3-52e30205cc96.png">

<br>

### 12. Klikk på _Compare and pull request_. 

<img width="947" alt="Bilde 7" src="https://user-images.githubusercontent.com/70739893/197613683-000284c6-66b1-421b-b2eb-1aaf72167bfb.png">

<br>

### 13. Skriv inn en mer detaljert beskrivelse av hva du har gjort. 

- **NB:** sørg for at _Allow edits by maintainers_ er aktivert. 

<img width="947" alt="Bilde 8" src="https://user-images.githubusercontent.com/70739893/197613794-329e5657-e61b-4f79-8516-afe75bf1e2dd.png">

<br>

### 14. Klikk på _Create pull request_. 

<img width="943" alt="Bilde 9" src="https://user-images.githubusercontent.com/70739893/197614033-aa9864d5-e93d-4898-943c-7b326f7b8ab1.png">

<br>

### 15. Da har vi mottatt dine endringer og vi vil svare så fort vi kan! 

<br>


### 16. Endringene dine er tatt med i prosjektet, gå til github repository'et ditt og oppdater siden.

- Noe slikt vil komme opp, da din fork er utdatert. 

<img width="944" alt="Bilde 10" src="https://user-images.githubusercontent.com/70739893/197614209-68d0800e-1c25-4c3f-be14-6f0fe2360b99.png">

<br>

### 17. Klikk på _Sync fork_. 

<img width="944" alt="Bilde 11" src="https://user-images.githubusercontent.com/70739893/197614316-48c5c1e2-cbda-47cb-baed-be47dde62d80.png">

<br>

### 18. Klikk på _Update branch_.

<img width="947" alt="Bilde 12" src="https://user-images.githubusercontent.com/70739893/197614401-f80abfaa-1415-4d31-b344-6a1961400ea7.png">

<br>

### 19. Åpne Terminalen i VS-Code for prosjektet og _pull inn_ de nye endringene. 

````
git pull
````

<br>

### 20. Gratulerer, takk for ditt bidrag!
