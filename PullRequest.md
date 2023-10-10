# Gjør dette _før_ du begynner på dine endringer.

1. Gå til din fork av prosjektet fintech-enigma-web.

2. Klikk _Sync fork_ (dersom det står _your fork is up to date_ så kan du ignorere dette) ![Sync1](https://github.com/fintech-enigma/fintech-enigma-web/assets/70739893/47749a5c-7aac-4e9d-b407-29b1a1b1d223)

3. Velg _Update branch_ ![Sync2](https://github.com/fintech-enigma/fintech-enigma-web/assets/70739893/899f6935-6646-42c0-9ba1-a9c26a4a8eba)

4. Åpne prosjektet i VS - Code

5. Åpne terminalen i VS-Code, bruk Ctrl + j (Win), cmd + j (Mac)
![Terminal](https://github.com/fintech-enigma/fintech-enigma-web/assets/70739893/4bd13371-07ce-4aef-98cb-b5eee0f2e49f)

6. Skriv inn følgende i Terminalen og trykk enter. 
    ````
    git branch --set-upstream-to=origin/main
    ````

7. Skriv så inn følgende og trykk enter.
    ````
    git pull
    ````

8. Du kan nå starte å gjøre dine endringer

# Gjør dette når du er ferdig med dine endringer.

1. TEST at alt du har gjort virker og at det ikke ødelegger noe annet på siden. 

2. Skriv inn de følgende komandoene:

    1. Bytt ut &lt;navn-paa-branch&gt; med navnet på din endring, dette må være i ett ord. 
        ````
        git checkout -b <navn-paa-branch>
        ````

    2.  ````
        git add .
        ````

    3. Skriv inn en kort melding av hva du har gjort. 
        ````
        git commit -m 'Dette har jeg gjort'
        ````


    4. Viktig at du benytter samme navn i som i steg 1. 
        ````
        git push origin <navn-paa-branch>
        ````

3. Gå tilbake til github repository'et ditt og oppdater siden. 

    Da vil noe slikt komme opp. 

    ![](https://user-images.githubusercontent.com/70739893/197613553-899d135c-3360-4717-8ae3-52e30205cc96.png)

4. Klikk på _Compare and pull request_. 

    ![](https://user-images.githubusercontent.com/70739893/197613683-000284c6-66b1-421b-b2eb-1aaf72167bfb.png)


5. Skriv inn en mer detaljert beskrivelse av hva du har gjort. 

    - **NB:** sørg for at _Allow edits by maintainers_ er aktivert. 

    ![](https://user-images.githubusercontent.com/70739893/197613794-329e5657-e61b-4f79-8516-afe75bf1e2dd.png)


6. Klikk på _Create pull request_. 

    ![](https://user-images.githubusercontent.com/70739893/197614033-aa9864d5-e93d-4898-943c-7b326f7b8ab1.png)

7. Takk for ditt bidrag, din endring vil være oppe på siden så fort den har blitt vurdert. 