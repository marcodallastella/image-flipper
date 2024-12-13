# Image Flip Extension per Chrome

## Descrizione
Un'estensione Chrome che individua le immagini che contengono una parola chiave scelta dall'utente nel testo alternativo (alt text) e, senza alcun motivo apparente, le ruota di 180 gradi.

## Funzionalità
- Permette di scegliere una parola chiave personalizzata
- Rileva automaticamente le immagini in base all'alt text
- Applica una rotazione di 180 gradi

## Installazione
1. Scarica o clona questa repository
2. Apri Chrome e vai su `chrome://extensions/`
3. Attiva "Modalità sviluppatore" in alto a destra
4. Clicca "Carica non pacchettizzata"
5. Seleziona la cartella con i file dell'estensione

## Configurazione
1. Dopo l'installazione, clicca sull'icona del puzzle nella barra di Chrome
2. Trova l'estensione e clicca sui tre puntini
3. Seleziona "Opzioni"
4. Inserisci la parola chiave che vuoi utilizzare
5. Clicca "Salva"

## File
- `manifest.json`: Configurazione dell'estensione
- `content.js`: Funzionalità principale
- `options.html` e `options.js`: Pagina delle opzioni per impostare la parola chiave

