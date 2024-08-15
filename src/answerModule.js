const { connectToMongoDB } = require('./config/database');

// Créer une nouvelle réponse
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

// Lire les réponses pour une question
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
