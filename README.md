# Survey App

## Description

Survey App est une application JavaScript simple permettant de gérer les fiches d'enquête de satisfaction des clients. L'application utilise une base de données MongoDB pour stocker les données et permet d'effectuer des opérations CRUD (Create, Read, Update, Delete) sur ces fiches.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)
- [MongoDB](https://www.mongodb.com/try/download/community) (version 4.0 ou supérieure)

## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

1. **Clonez le repository :**

    ```bash
    git clone <https://github.com/Mangassouba/brief_abc-survey-app.git>
    ```

2. **Accédez au dossier du projet :**

    ```bash
    cd brief_abc-survey-app
    ```

3. **Installez les dépendances :**

    ```bash
    npm install
    ```

4. **Configurez la base de données :**

    - Assurez-vous que MongoDB est en cours d'exécution sur votre machine locale.
    - Mettez les paramètres de connexion dans `config/database.js`.

## Documentation des Modules

# 1. surveyModule.js
Ce module gère les opérations CRUD pour les enquêtes.

 **createSurvey(survey)** : Crée une nouvelle enquête.
    Paramètres:
    - survey: Objet contenant les informations de l'enquête.

    exemple: createSurvey({
        id(number),
        name: (string),
        description: (string),
        createdAt: Date,
        createdBy: {
            employeeName: (string),
            employeeRole: (string)
        },
        questions: []
    });

Retour: L'ID de l'enquête insérée.

 **getSurveyById(id)**: Récupère une enquête par son ID.

 - Paramètres : id : L'ID de l'enquête à récupérer.

- Retour : L'objet enquête correspondant à l'ID fourni.

 **getAllSurveys()** : Récupère toutes les enquêtes de la base de données.

- Retour: Une liste d'objets enquêtes.

 **updateSurvey(id, updateData)** : Met à jour une enquête par son ID.

- updateData: Objet contenant les champs à mettre à jour.

        updateSurvey(2, {
                name: (string),
                description: (string),
                createdAt: Date,
                createdBy: {
                    employeeName: (string),
                    employeeRole: (string)
                },
                questions: []
            });
   
- Retour: Le nombre de documents mis à jour.
 **deleteSurvey(serveyId)** : Supprime une enquête par son ID.

- Paramètres : 
 serveyId: L'ID de l'enquête à supprimer.
- Retour: Le nombre de documents supprimés.

# 2. questionModule.js
Ce module gère les opérations CRUD pour les questions associées à une enquête.

 **createQuestion(question)** : Crée une nouvelle question pour une enquête. 

- Paramètres:
    question: Objet contenant les informations de la question.

        createQuestion({
            questionId : (number),
            surveyId: number,
            title: (string),
            type: (string),
            options: {
                minValue: 1,
                maxValue: 5,
                step: 1
            },
            answers: []
        });

- Retour: L'ID de la question insérée.
 **getQuestionById(id)** : Récupère une question par son ID.

- Paramètres:
    id: L'ID de la question à récupérer.
- Retour: L'objet question correspondant à l'ID fourni.
 **getQuestionsBySurveyId(surveyId)** : Récupère toutes les questions associées à une enquête spécifique.

- Paramètres: 
    surveyId: L'ID de l'enquête dont les questions doivent être récupérées.
- Retour: Une liste d'objets questions.
 **updateQuestion(id, updateData)** : Met à jour une question par son ID.

    updateQuestion(1, {surveyId: number,
        title: (string),
        type: (string),
        options: {
            minValue: 1,
            maxValue: 5,
            step: 1
        },
        answers: []
    });

- Retour: Le nombre de documents mis à jour.
 **deleteQuestion(id)** : Supprime une question par son ID.

- Paramètres:
    id: L'ID de la question à supprimer.
- Retour: Le nombre de documents supprimés.

# 3. answerModule.js
Ce module gère les opérations CRUD pour les réponses associées à une question.

 **createAnswer(answer)** : Crée une nouvelle réponse pour une question.

- Paramètres:
  answer: Objet contenant les informations de la réponse.

        exemple: createAnswer({
                id: (number),
                questionId: (number),
                title: (string)
            });
- Retour: L'ID de la réponse insérée.
 **getAnswersByQuestionId(questionId)** : Récupère toutes les réponses associées à une question spécifique.

- Paramètres:
    questionId: L'ID de la question dont les réponses doivent être récupérées.
- Retour: Une liste d'objets réponses.
 **deleteAnswer(id)** : Supprime une réponse par son ID.

- Paramètres:
    id: L'ID de la réponse à supprimer.
- Retour: Le nombre de documents supprimés.

 ## Utilisation

Pour démarrer l'application, exécutez la commande suivante :

```bash
npm start
```

## Authors

Hama Houllah Mangassouba