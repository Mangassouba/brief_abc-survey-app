const { connectToMongoDB } = require('./config/database');

async function createAnswer(answer) {
    try {
        const db = await connectToMongoDB();
        const existingAnswer = await db.collection('Answers').findOne({ id: answer.id });
        if (existingAnswer) {
            throw new Error(`La réponse avec l'ID ${answer.id} existe déjà.`);
        }
        const result = await db.collection('Answers').insertOne(answer);
        console.log(`Réponse créée avec l'ID ${result.answer.id}`);
        return result.insertedId;
    } catch (error) {
        console.error(`La réponse avec l'ID ${answer.id}`);
    }
}

async function getAnswersByQuestionId(questionId) {
    const db = await connectToMongoDB();
    const existingAnswer = await db.collection('Answers').findOne({ id: questionId});
    if (existingAnswer) {
        const answers = await db.collection('Answers').find({ id: questionId }).toArray();
        return answers;
    }else{
        console.log("L'ID n'existe pas")
    }
}

async function updateAnswer(answerId, updateData) {
    const db = await connectToMongoDB();
    const result = await db.collection('Answers').updateOne(
        { id: answerId },
        { $set: updateData }
    );
    return result.modifiedCount;
}

async function deleteAnswer(answerId) {
    const db = await connectToMongoDB();
    const result = await db.collection('Answers').deleteOne({  id: answerId });
    return result.deletedCount;
}

module.exports = {
    createAnswer,
    getAnswersByQuestionId,
    updateAnswer,
    deleteAnswer
};
