const { connectToMongoDB } = require('./config/database');

async function createQuestion(question) {
    try {
        const db = await connectToMongoDB();
        const existingAnswer = await db.collection('Questions').findOne({ id: question.id });
        if (existingAnswer) {
            throw new Error(`L'enquête avec l'ID ${question.id} existe déjà.`);
        }
        const result = await db.collection('Questions').insertOne(question);
        console.log(`Question créée avec l'ID ${result.question.id}`);
        return result.insertedId;
    } catch (error) {
        console.error(`L'enquête avec l'ID ${question.id} existe déjà.`);
    }
}

async function getQuestionById(questionId) {
    const db = await connectToMongoDB();
    const existingAnswer = await db.collection('Questions').findOne({ id: questionId});
    if (existingAnswer) {
        const question = await db.collection('Questions').findOne({id: questionId});
    return question;
    }else{
        console.log("L'ID n'existe pas")
    }
    
}

async function getQuestionsBySurveyId(surveyId) {
    const db = await connectToMongoDB();
    const questions = await db.collection('Questions').find({ id: surveyId}).toArray();
    return questions;
}

async function updateQuestion(questionId, updateData) {
    const db = await connectToMongoDB();
    const result = await db.collection('Questions').updateOne(
        { id: questionId },
        { $set: updateData }
    );
    return result.modifiedCount;
}

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
