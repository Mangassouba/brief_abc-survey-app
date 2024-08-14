// const { ObjectId } = require('mongodb');
const { connectToMongoDB } = require('./config/database');

// Créer une nouvelle question
async function createQuestion(question) {
    const db = await connectToMongoDB();
    // const existingAnswer = await db.collection('Questions').findOne({ id: question.id });
    // if (existingAnswer) {
    //     throw new Error(`La réponse avec l'ID ${question.id} existe déjà.`);
    // }
    const result = await db.collection('Questions').insertOne(question);
    return result.insertedId;
}

// Lire une question par ID
async function getQuestionById(questionId) {
    const db = await connectToMongoDB();
    const question = await db.collection('Questions').findOne({id: questionId});
    return question;
}

// Lire toutes les questions d'une enquête
async function getQuestionsBySurveyId(surveyId) {
    const db = await connectToMongoDB();
    const questions = await db.collection('Questions').find({ id: surveyId}).toArray();
    return questions;
}

// Mettre à jour une question par ID
async function updateQuestion(questionId, updateData) {
    const db = await connectToMongoDB();
    const result = await db.collection('Questions').updateOne(
        { id: questionId },
        { $set: updateData }
    );
    return result.modifiedCount;
}

// Supprimer une question par ID
async function deleteQuestion(questionId) {
    const db = await connectToMongoDB();
    const result = await db.collection('Questions').deleteOne({ id: questionId });
    return result.deletedCount;
}

module.exports = {
    createQuestion,
    getQuestionById,
    getQuestionsBySurveyId,
    updateQuestion,
    deleteQuestion
};
