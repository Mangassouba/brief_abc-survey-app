// const { ObjectId } = require('mongodb');
const { connectToMongoDB } = require('./config/database');

// Créer une nouvelle réponse
async function createAnswer(answer) {
    const db = await connectToMongoDB();
    const result = await db.collection('Answers').insertOne(answer);
    return result.insertedId;
}

// Lire les réponses pour une question
async function getAnswersByQuestionId(questionId) {
    const db = await connectToMongoDB();
    const answers = await db.collection('Answers').find({ id: questionId }).toArray();
    return answers;
}

// Supprimer une réponse par ID
async function deleteAnswer(answerId) {
    const db = await connectToMongoDB();
    const result = await db.collection('Answers').deleteOne({  id: answerId });
    return result.deletedCount;
}

module.exports = {
    createAnswer,
    getAnswersByQuestionId,
    deleteAnswer
};
