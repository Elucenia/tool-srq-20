<!-- ELUCENIA technical documentation · srq-20 · en · no clinical/professional/rights approval -->

# SRQ-20 (Self-Reporting Questionnaire)

[conditions, sources and permissions](https://elucenia.org/en/tools/srq-20)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### In the last 30 days… 1. Have you had frequent headaches?

`q1`

### 2. Do you have a poor appetite?

`q2`

### 3. Do you sleep poorly?

`q3`

### 4. Are you easily frightened?

`q4`

### 5. Do your hands shake?

`q5`

### 6. Do you feel nervous, tense or worried?

`q6`

### 7. Do you have poor digestion?

`q7`

### 8. Do you have difficulty thinking clearly?

`q8`

### 9. Have you felt sad recently?

`q9`

### 10. Have you been crying more than usual?

`q10`

### 11. Do you have difficulty performing your daily activities satisfactorily?

`q11`

### 12. Do you have difficulty making decisions?

`q12`

### 13. Do you have difficulties at work (is your work distressing or does it cause you suffering)?

`q13`

### 14. Are you unable to play a useful role in your life?

`q14`

### 15. Have you lost interest in things?

`q15`

### 16. Do you feel that you are useless or of no worth?

`q16`

### 17. Have you had thoughts of ending your life?

`q17`

### 18. Do you feel tired all the time?

`q18`

### 19. Do you have unpleasant sensations in your stomach?

`q19`

### 20. Do you tire easily?

`q20`

## Method edition

SRQ-20/WHO; Brazilian Mari–Williams 1986:20 binary questions,0–20, cutoff≥8; item 17 alert

## Documented formula

One point for each “yes” (select affirmative answers). Total: 0–20. Brazilian validation cutoff (Mari, Williams 1986): ≥ 8 = suspected common mental disorder.

“yes” on item 17 requires suicide-risk assessment regardless of total.

## Limits and population

Screening for common mental disorders in primary care, followed by clinical assessment when indicated. The Brazilian study found performance differences by sex. A total does not replace a diagnostic interview; the recall window and cutoff must match the version and population studied.

## References

- [Mari JJ, Williams P. A validity study of a psychiatric screening questionnaire (SRQ-20) in primary care in the city of Sao Paulo. Br J Psychiatry, 1986.](https://doi.org/10.1192/bjp.148.1.23)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Documented results

The information below preserves the method outputs for synthetic examples. It does not constitute independent clinical validation.

### 1

Negative screening

Screening instrument: does not make a diagnosis or indicate which disorder. Positive cases require clinical evaluation.


### 2

Positive screening: suspicion of common mental disorder

Screening instrument: does not make a diagnosis or indicate which disorder. Positive cases require clinical evaluation.


### 3

Negative screening. Thoughts of ending one’s life: assess suicide risk now

Thoughts of death or self-harm: ask directly about ideation, plan, and means, and do not leave the person alone if the risk is imminent. 24 h free emotional support: CVV 188 (or cvv.org.br). Immediate risk: SAMU 192 or emergency department.

