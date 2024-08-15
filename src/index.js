const { createSurvey, getSurveyById, getAllSurveys, updateSurvey, deleteSurvey } = require('./surveyModule');
const { createQuestion, getQuestionsBySurveyId, getQuestionById, updateQuestion, deleteQuestion } = require('./questionModule');
const { createAnswer, getAnswersByQuestionId, deleteAnswer } = require('./answerModule');
const {closeConnection} = require('./config/database');

(async () => {
    try {
        await createSurvey({
            id: 1,
            name: "Enquête de Satisfaction 002",
            description: "Nouvelle enquête sur la satisfaction.",
            createdAt: new Date(),
            createdBy: {
                employeeName: "John Doe",
                employeeRole: "Chef de produit"
            },
            questions: []
        });

        console.log(await getSurveyById(1));

        await createQuestion({
            id: 1,
            surveyId: 1,
            title: "Comment évalueriez-vous notre produit ?",
            type: "rating",
            options: {
                minValue: 1,
                maxValue: 5,
                step: 1
            },
            answers: []
        });

        await createQuestion({
            id: 1,
            surveyId: 1,
            title: "Recommanderiez-vous notre service à d'autres personnes ?",
            type: "boolean",
            answers: []
        });

        console.log(await getQuestionsBySurveyId(1));
        console.log('Questions pour l\'enquête:');

        await updateQuestion(1, {
            title: "Comment évalueriez-vous notre service global ?"
        });
        console.log(`Question mise à jour`);

        console.log(await getQuestionById(1));

        await createAnswer({
            id: 1,
            questionId: 1,
            title: "Très satisfait"
        });
        await createAnswer({
            id: 1,
            questionId: 1,
            title: "Satisfait"
        });

        console.log(await getAnswersByQuestionId(1));

        await deleteAnswer(1);
        console.log(`Réponse supprimée`);

        await deleteQuestion(1);
        console.log(`Question supprimée`);

        await updateSurvey(1, {
            description: "Enquête révisée sur la satisfaction."
        });
        console.log(`Enquête mise à jour`);

        console.log(await getAllSurveys())
        console.log('Toutes les enquêtes');

        await deleteSurvey(1);
        console.log(`Enquête supprimée`);

    } catch (error) {
        console.error('Une erreur s\'est produite:', error);
    } finally {
        await closeConnection();
    }
})();