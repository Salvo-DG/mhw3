# MiniHomework3: RestAPI
> Proseguimento dell'idea progettuale del secondo homework (mhw2) con l'obiettivo di integrare chiamate ad API Rest tramite fetch.

## Introduzione
In questo minihomework, lo scopo è quello di migliorare il secondo homework (mhw2) con l'introduzione di nuove funzionalità e ottimizzazioni ottenute tramite chiamate ad API REST, al fine di arricchire l'applicazione e renderla più dinamica e interattiva.
Si mantiene la scelta di replicare a scopi didattici la homepage del sito di GetYourGuide, con l'aggiunta di alcuni elementi finalizzata a rispettare i requisiti dell'homework.

## Descrizione del progetto
Il minihomework3 introduce la possibilità di effettuare il login (client-side) dal menù a tendina che appare cliccando o passando sopra l'icona "Profilo" -> "Accedi o Registrati".
Inoltre la homepage presenta ora la visualizzazione (tramite click sul bottone 'Vai!') di una playlist Spotify a tema viaggio.
Entrambe le funzionalità aggiunte prevedono l'utilizzo di API.

### API utilizzate

* Email Validation API by Abstract API: Questa API con autenticazione tramite API Key, permette di verificare che l'email inserita dall'utente sia valida. Qualora dovessero essere riscontrate delle irregolarità si è impossibilitati a procedere alla fase successiva del login.
* Spotify Web API: Questa API con autenticazione con OAuth2, permette di visualizzare nella homepage una playlist a tema viaggio.

## Utilizzo
Una volta aperto il file [mhw3.html](mhw3.html) con il browser Chrome, è possibile verificare il funzionamento delle chiamate ad API ponendo particolare attenzione ai seguenti elementi della pagina web:
* Login(client-side): appare quando con il mouse si passa sopra l'icona "Profilo" e si clicca su "Accedi o registrati" - Si prevede solo per utenti web. Qui viene richiesto di inserire una mail per l'accesso, la chiamata alla API "Email validation API" verifica che l'email inserita sia valida. **ATTENZIONE, il servizio è gratuito fino a 100 richieste: ne sono state utilizzate 20/100** (ne mancano 80).
* Visualizzazione playlist Spotify "In Viaggio": Basta cliccare su **"Vai!"** per visualizzare la playlist ottenuta tramite la WEB Api di Spotify.
