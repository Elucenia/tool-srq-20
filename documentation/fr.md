<!-- ELUCENIA technical documentation · srq-20 · fr · no clinical/professional/rights approval -->

# SRQ-20 (questionnaire auto-administré)

[conditions, sources et autorisations](https://elucenia.org/fr/outils/srq-20)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Au cours des 30 derniers jours… 1. Avez-vous eu des maux de tête fréquents ?

`q1`

### 2. Manquez-vous d’appétit ?

`q2`

### 3. Dormez-vous mal ?

`q3`

### 4. Êtes-vous facilement effrayé ?

`q4`

### 5. Avez-vous des tremblements des mains ?

`q5`

### 6. Vous sentez-vous nerveux, tendu ou inquiet ?

`q6`

### 7. Digérez-vous mal ?

`q7`

### 8. Avez-vous du mal à penser clairement ?

`q8`

### 9. Vous êtes-vous senti triste dernièrement ?

`q9`

### 10. Avez-vous pleuré plus que d’habitude ?

`q10`

### 11. Avez-vous du mal à réaliser vos activités quotidiennes de manière satisfaisante ?

`q11`

### 12. Avez-vous du mal à prendre des décisions ?

`q12`

### 13. Avez-vous des difficultés au travail (votre travail est-il pénible ou vous cause-t-il de la souffrance) ?

`q13`

### 14. Êtes-vous incapable de jouer un rôle utile dans votre vie ?

`q14`

### 15. Avez-vous perdu votre intérêt pour les choses ?

`q15`

### 16. Vous sentez-vous inutile, sans valeur ?

`q16`

### 17. Avez-vous eu l’idée de mettre fin à vos jours ?

`q17`

### 18. Vous sentez-vous fatigué tout le temps ?

`q18`

### 19. Avez-vous des sensations désagréables dans l’estomac ?

`q19`

### 20. Vous fatiguez-vous facilement ?

`q20`

## Édition de la méthode

SRQ-20/OMS ; brésilien Mari–Williams 1986:20 binaires,0–20, seuil≥8 ; alerte item 17

## Formule documentée

Un point par “oui” (cocher affirmatives). Total: 0–20. Seuil brésilien (Mari, Williams 1986): ≥ 8 = suspicion de trouble mental courant.

“oui” à l’item 17 exige évaluation suicidaire quel que soit total.

## Limites et population

Dépistage des troubles mentaux courants en soins primaires, suivi d’une évaluation clinique si indiquée. L’étude brésilienne a retrouvé des différences de performance selon le sexe. Une somme ne remplace pas l’entretien diagnostique ; la période de rappel et le seuil doivent correspondre à la version et à la population étudiées.

## Références

- [Mari JJ, Williams P. A validity study of a psychiatric screening questionnaire (SRQ-20) in primary care in the city of Sao Paulo. Br J Psychiatry, 1986.](https://doi.org/10.1192/bjp.148.1.23)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
