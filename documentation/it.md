<!-- ELUCENIA technical documentation · srq-20 · it · no clinical/professional/rights approval -->

# SRQ-20 (questionario di autovalutazione)

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/srq-20)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Negli ultimi 30 giorni… 1. Ha avuto frequenti mal di testa?

`q1`

### 2. Ha poco appetito?

`q2`

### 3. Dorme male?

`q3`

### 4. Si spaventa facilmente?

`q4`

### 5. Le tremano le mani?

`q5`

### 6. Si sente nervoso, teso o preoccupato?

`q6`

### 7. Ha una cattiva digestione?

`q7`

### 8. Ha difficoltà a pensare con chiarezza?

`q8`

### 9. Si è sentito triste ultimamente?

`q9`

### 10. Ha pianto più del solito?

`q10`

### 11. Ha difficoltà a svolgere in modo soddisfacente le sue attività quotidiane?

`q11`

### 12. Ha difficoltà a prendere decisioni?

`q12`

### 13. Ha difficoltà al lavoro (il lavoro è penoso o le causa sofferenza)?

`q13`

### 14. È incapace di svolgere un ruolo utile nella sua vita?

`q14`

### 15. Ha perso interesse per le cose?

`q15`

### 16. Si sente una persona inutile, senza valore?

`q16`

### 17. Ha avuto pensieri di porre fine alla sua vita?

`q17`

### 18. Si sente stanco tutto il tempo?

`q18`

### 19. Ha sensazioni spiacevoli allo stomaco?

`q19`

### 20. Si stanca facilmente?

`q20`

## Edizione del metodo

SRQ-20/OMS; brasiliano Mari–Williams 1986:20 binarie,0–20, soglia≥8; item 17 allarme

## Formula documentata

Un punto per “sì” (selezionare affermative). Totale: 0–20. Soglia brasiliana (Mari, Williams 1986): ≥ 8 = sospetto disturbo mentale comune.

“sì” all’item 17 richiede valutazione suicidaria indipendentemente dal totale.

## Limiti e popolazione

Screening dei disturbi mentali comuni nell’assistenza primaria, seguito da valutazione clinica quando indicata. Lo studio brasiliano ha riscontrato differenze di prestazioni per sesso. Un totale non sostituisce il colloquio diagnostico; periodo di riferimento e soglia devono corrispondere alla versione e alla popolazione studiate.

## Riferimenti

- [Mari JJ, Williams P. A validity study of a psychiatric screening questionnaire (SRQ-20) in primary care in the city of Sao Paulo. Br J Psychiatry, 1986.](https://doi.org/10.1192/bjp.148.1.23)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Risultati documentati

Le informazioni seguenti conservano gli output del metodo per esempi sintetici. Non costituiscono una validazione clinica indipendente.

### 1

Screening negativo

Strumento di screening: non fa diagnosi né indica quale disturbo. I casi positivi richiedono valutazione clinica.


### 2

Screening positivo: sospetto di disturbo mentale comune

Strumento di screening: non fa diagnosi né indica quale disturbo. I casi positivi richiedono valutazione clinica.


### 3

Screening negativo. Idee di porre fine alla propria vita: valutare ora il rischio di suicidio

Pensieri di morte o di farsi del male: chieda direttamente di ideazione, piano e mezzi, e non lasci la persona sola se il rischio è imminente. Supporto emotivo gratuito 24 h: CVV 188 (o cvv.org.br). Rischio immediato: SAMU 192 o pronto soccorso.

