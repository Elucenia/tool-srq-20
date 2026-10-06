<!-- ELUCENIA technical documentation · srq-20 · de · no clinical/professional/rights approval -->

# SRQ-20 (Selbstbeurteilungsfragebogen)

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/srq-20)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### In den letzten 30 Tagen… 1. Hatten Sie häufig Kopfschmerzen?

`q1`

### 2. Haben Sie wenig Appetit?

`q2`

### 3. Schlafen Sie schlecht?

`q3`

### 4. Erschrecken Sie leicht?

`q4`

### 5. Zittern Ihre Hände?

`q5`

### 6. Fühlen Sie sich nervös, angespannt oder besorgt?

`q6`

### 7. Haben Sie Verdauungsbeschwerden?

`q7`

### 8. Haben Sie Schwierigkeiten, klar zu denken?

`q8`

### 9. Haben Sie sich in letzter Zeit traurig gefühlt?

`q9`

### 10. Haben Sie mehr als gewöhnlich geweint?

`q10`

### 11. Haben Sie Schwierigkeiten, Ihre täglichen Aktivitäten zufriedenstellend auszuführen?

`q11`

### 12. Haben Sie Schwierigkeiten, Entscheidungen zu treffen?

`q12`

### 13. Haben Sie Schwierigkeiten bei der Arbeit (ist Ihre Arbeit belastend oder verursacht sie Leiden)?

`q13`

### 14. Sind Sie nicht in der Lage, in Ihrem Leben eine nützliche Rolle zu erfüllen?

`q14`

### 15. Haben Sie das Interesse an Dingen verloren?

`q15`

### 16. Fühlen Sie sich nutzlos oder wertlos?

`q16`

### 17. Hatten Sie Gedanken daran, Ihr Leben zu beenden?

`q17`

### 18. Fühlen Sie sich die ganze Zeit müde?

`q18`

### 19. Haben Sie unangenehme Empfindungen im Magen?

`q19`

### 20. Werden Sie leicht müde?

`q20`

## Fassung der Methode

SRQ-20/WHO; Brasilien Mari–Williams 1986:20 binäre Fragen,0–20, Schwelle≥8; Frage 17 Warnung

## Dokumentierte Formel

Ein Punkt je “ja” (Ja-Antworten markieren). Gesamt: 0–20. Brasilianische Schwelle (Mari, Williams 1986): ≥ 8 = Verdacht auf häufige psychische Störung.

“ja” bei Frage 17 erfordert Suizidrisikobeurteilung unabhängig vom Gesamtwert.

## Grenzen und Population

Screening auf häufige psychische Störungen in der Primärversorgung mit anschließender klinischer Beurteilung bei Indikation. Die brasilianische Studie fand geschlechtsbezogene Leistungsunterschiede. Eine Summe ersetzt kein diagnostisches Interview; Erinnerungszeitraum und Schwelle müssen zur untersuchten Version und Population passen.

## Referenzen

- [Mari JJ, Williams P. A validity study of a psychiatric screening questionnaire (SRQ-20) in primary care in the city of Sao Paulo. Br J Psychiatry, 1986.](https://doi.org/10.1192/bjp.148.1.23)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Dokumentierte Ergebnisse

Die folgenden Angaben bewahren die Ausgaben der Methode für synthetische Beispiele. Sie stellen keine unabhängige klinische Validierung dar.

### 1

Negatives Screening

Screening-Instrument: stellt keine Diagnose und gibt nicht an, um welche Störung es sich handelt. Positive Fälle erfordern eine klinische Abklärung.


### 2

Positives Screening: Verdacht auf häufige psychische Störung

Screening-Instrument: stellt keine Diagnose und gibt nicht an, um welche Störung es sich handelt. Positive Fälle erfordern eine klinische Abklärung.


### 3

Negatives Screening. Gedanken daran, das Leben zu beenden: Suizidrisiko jetzt einschätzen

Gedanken an den Tod oder an Selbstverletzung: fragen Sie direkt nach Suizidgedanken, Plan und Mitteln und lassen Sie die Person bei unmittelbarer Gefahr nicht allein. Kostenlose emotionale Unterstützung rund um die Uhr: CVV 188 (oder cvv.org.br). Unmittelbare Gefahr: SAMU 192 oder Notaufnahme.

