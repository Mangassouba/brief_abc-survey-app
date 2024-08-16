const { connectToMongoDB } = require('./config/database');

async function createAnswer(answer) {
    try {
        const db = await connectToMongoDB();
        const existingAnswer = await db.collection('answers').findOne({ answerId: answer.answerId });
        if (existingAnswer) {
            throw new Error(`La réponse avec l'ID ${answer.answerId} existe déjà.`);
        }
        const result = await db.collection('answers').insertOne(answer);
        console.log(`Réponse créée avec l'ID ${result.answer.answerId}`);
        return result.insertedId;
    } catch (error) {
        console.error(`La réponse avec l'ID ${answer.answerId}`);
    }
}

async function getAnswersByQuestionId(questionId) {
    const db = await connectToMongoDB();
    const existingAnswer = await db.collection('answers').findOne({ questionId: questionId});
    if (existingAnswer) {
        const answers = await db.collection('answers').find({ questionId: questionId }).toArray();
        return answers;
    }else{
        console.log("L'ID n'existe pas")
    }
}

async function updateAnswer(answerId, updateData) {
    const db = await connectToMongoDB();
    const result = await db.collection('answers').updateOne(
        { questionId: answerId },
        { $set: updateData }
    );
    return result.modifiedCount;
}

async function deleteAnswer(answerId) {
    const db = await connectToMongoDB();
    const result = await db.collection('answers').deleteOne({  answerId: answerId });
    return result.deletedCount;
}

module.exports = {
    createAnswer,
    getAnswersByQuestionId,
    updateAnswer,
    deleteAnswer
};
