const { connectToMongoDB } = require('./config/database');

async function createQuestion(question) {
    try {
        const db = await connectToMongoDB();
        const existingAnswer = await db.collection('questions').findOne({ questionId: question.questionId });
        if (existingAnswer) {
            throw new Error(`L'enquête avec l'ID ${question.questionId} existe déjà.`);
        }
        const result = await db.collection('questions').insertOne(question);
        console.log(`Question créée avec l'ID ${result.question.questionId}`);
        return result.insertedId;
    } catch (error) {
        console.error(`L'enquête avec l'ID ${question.questionId} existe déjà.`);
    }
}

async function getQuestionById(questionId) {
    const db = await connectToMongoDB();
    const existingAnswer = await db.collection('questions').findOne({ questionId: questionId});
    if (existingAnswer) {
        const question = await db.collection('questions').findOne({questionId: questionId});
    return question;
    }else{
        console.log("L'ID n'existe pas")
    }
    
}

async function getQuestionsBySurveyId(surveyId) {
    const db = await connectToMongoDB();
    const questions = await db.collection('questions').find({ questionId: surveyId}).toArray();
    return questions;
}

async function updateQuestion(questionId, updateData) {
    const db = await connectToMongoDB();
    const result = await db.collection('questions').updateOne(
        { questionId: questionId },
        { $set: updateData }
    );
    return result.modifiedCount;
}

async function deleteQuestion(questionId) {
    const db = await connectToMongoDB();
    const result = await db.collection('questions').deleteOne({ questionId: questionId });
    return result.deletedCount;
}

module.exports = {
    createQuestion,
    getQuestionById,
    getQuestionsBySurveyId,
    updateQuestion,
    deleteQuestion
};
