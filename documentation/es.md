<!-- ELUCENIA technical documentation · srq-20 · es · no clinical/professional/rights approval -->

# SRQ-20 (cuestionario de autorreporte)

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/srq-20)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### En los últimos 30 días… 1. ¿Ha tenido dolores de cabeza frecuentes?

`q1`

### 2. ¿Tiene falta de apetito?

`q2`

### 3. ¿Duerme mal?

`q3`

### 4. ¿Se asusta con facilidad?

`q4`

### 5. ¿Le tiemblan las manos?

`q5`

### 6. ¿Se siente nervioso, tenso o preocupado?

`q6`

### 7. ¿Tiene mala digestión?

`q7`

### 8. ¿Tiene dificultades para pensar con claridad?

`q8`

### 9. ¿Se ha sentido triste últimamente?

`q9`

### 10. ¿Ha llorado más de lo habitual?

`q10`

### 11. ¿Tiene dificultades para realizar satisfactoriamente sus actividades diarias?

`q11`

### 12. ¿Tiene dificultades para tomar decisiones?

`q12`

### 13. ¿Tiene dificultades en el trabajo (le resulta penoso o le causa sufrimiento)?

`q13`

### 14. ¿Es incapaz de desempeñar un papel útil en su vida?

`q14`

### 15. ¿Ha perdido el interés por las cosas?

`q15`

### 16. ¿Se siente una persona inútil, sin valor?

`q16`

### 17. ¿Ha pensado en acabar con su vida?

`q17`

### 18. ¿Se siente cansado todo el tiempo?

`q18`

### 19. ¿Tiene sensaciones desagradables en el estómago?

`q19`

### 20. ¿Se cansa con facilidad?

`q20`

## Edición del método

SRQ-20/OMS; brasileño Mari–Williams 1986:20 binarias,0–20, corte≥8; alarma ítem 17

## Fórmula documentada

Un punto por “sí” (marque afirmativas). Total: 0–20. Corte brasileño (Mari, Williams 1986): ≥ 8 = sospecha de trastorno mental común.

“sí” en ítem 17 exige evaluación suicida independientemente del total.

## Límites y población

Cribado de trastornos mentales comunes en atención primaria, seguido de evaluación clínica cuando esté indicada. El estudio brasileño encontró diferencias de rendimiento según sexo. Una suma no sustituye una entrevista diagnóstica; la ventana de recuerdo y el punto de corte deben corresponder a la versión y la población estudiadas.

## Referencias

- [Mari JJ, Williams P. A validity study of a psychiatric screening questionnaire (SRQ-20) in primary care in the city of Sao Paulo. Br J Psychiatry, 1986.](https://doi.org/10.1192/bjp.148.1.23)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

La información siguiente conserva las salidas del método para ejemplos sintéticos. No constituye una validación clínica independiente.

### 1

Cribado negativo

Instrumento de cribado: no diagnostica ni indica qué trastorno. Los casos positivos requieren evaluación clínica.


### 2

Cribado positivo: sospecha de trastorno mental común

Instrumento de cribado: no diagnostica ni indica qué trastorno. Los casos positivos requieren evaluación clínica.


### 3

Cribado negativo. Ideas de acabar con la vida: evaluar ahora el riesgo de suicidio

Pensamientos de muerte o de hacerse daño: pregunte directamente sobre ideación, plan y medios, y no deje a la persona sola si el riesgo es inminente. Apoyo emocional gratuito 24 h: CVV 188 (o cvv.org.br). Riesgo inmediato: SAMU 192 o urgencias.

