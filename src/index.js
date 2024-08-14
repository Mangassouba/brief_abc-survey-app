const { createSurvey, getSurveyById, getAllSurveys, updateSurvey, deleteSurvey } = require('./surveyModule');
const { createQuestion, getQuestionsBySurveyId, getQuestionById, updateQuestion, deleteQuestion } = require('./questionModule');
const { createAnswer, getAnswersByQuestionId, deleteAnswer } = require('./answerModule');

(async () => {
    // Créer une enquête
    // const surveyId = await createSurvey({
    //     id : 2,
    //     name: "Enquête de Satisfaction 002",
    //     description: "Nouvelle enquête sur la satisfaction.",
    //     createdAt: new Date(),
    //     createdBy: {
    //         employeeName: "John Doe",
    //         employeeRole: "Chef de produit"
    //     },
    //     questions: []
    // });
    // console.log(`Nouvelle enquête créée avec ID: ${surveyId}`);

    // // Lire l'enquête créée
    const survey = await getSurveyById(1);
    console.log('Enquête récupérée:', survey);

    // // Créer des questions pour l'enquête
    // const question1Id = await createQuestion({
    //     id : 1,
    //     surveyId: surveyId,
    //     title: "Comment évalueriez-vous notre produit ?",
    //     type: "rating",
    //     options: {
    //         minValue: 1,
    //         maxValue: 5,
    //         step: 1
    //     },
    //     answers: []
    // });

    // const question2Id = await createQuestion({
    //     id : 1,
    //     surveyId: 1,
    //     title: "Recommanderiez-vous notre service à d'autres personnes ?",
    //     type: "boolean",
    //     answers: []
    // });

    // console.log(`Questions créées avec IDs: ${question1Id}, ${question2Id}`);

    // // Lire toutes les questions de l'enquête
    const questions = await getQuestionsBySurveyId(1);
    console.log('Questions pour l\'enquête:', questions);

    // // Mettre à jour une question
    // const updateCount = await updateQuestion(1, {
    //     title: "Comment évalueriez-vous notre service global ?"
    // });
    // console.log(`Nombre de questions mises à jour: ${updateCount}`);

    // // Lire la question mise à jour
    // const updatedQuestion = await getQuestionById(1);
    // console.log('Question mise à jour:', updatedQuestion);

    // // Créer des réponses pour la première question
    // await createAnswer({
    //     id : 1,
    //     questionId: question1Id,
    //     title: "Très satisfait"
    // });
    // await createAnswer({
    //     id: 1,
    //     questionId: question2Id,
    //     title: "Satisfait"
    // });

    // // Lire les réponses pour une question
    const answers = await getAnswersByQuestionId(1);
    console.log('Réponses pour la question 1:', answers);

    // // Supprimer une réponse
    // const deletedAnswerCount = await deleteAnswer(1);
    // console.log(`Nombre de réponses supprimées: ${deletedAnswerCount}`);

    // // Supprimer une question
    // const deletedQuestionCount = await deleteQuestion(1);
    // console.log(`Nombre de questions supprimées: ${deletedQuestionCount}`);

    // // Mettre à jour l'enquête
    // const surveyUpdateCount = await updateSurvey(2, {
    //     description: "Enquête révisée sur la satisfaction."
    // });
    // console.log(`Nombre d'enquêtes mises à jour: ${surveyUpdateCount}`);

    // // Lire toutes les enquêtes
    // const allSurveys = await getAllSurveys();
    // console.log('Toutes les enquêtes:', allSurveys);

    // Supprimer l'enquête
    // const deletedSurveyCount =  await deleteSurvey('2');
    // console.log(`Nombre d'enquêtes supprimées: ${deletedSurveyCount}`);

})();
