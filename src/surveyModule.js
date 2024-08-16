const { connectToMongoDB } = require('./config/database');

async function createSurvey(survey) {
    try {
        const db = await connectToMongoDB();
        const existingAnswer = await db.collection('surveys').findOne({ surveyId: survey.surveyId });
        if (existingAnswer) {
            throw new Error(`L'enquête avec l'ID ${survey.surveyId} existe déjà.`);
        }
        const result = await db.collection('surveys').insertOne(survey);
        console.log(`Vous avez créé une nouvelle enquête`);
        return result.insertedId;
    } catch (error) {
        console.error(`L'enquête avec l'ID ${survey.surveyId} existe déjà.`);
        
    }
}

async function getSurveyById(surveyId) {
    const db = await connectToMongoDB();
    const existingAnswer = await db.collection('surveys').findOne({ surveyId: surveyId });
    if (existingAnswer) {
        const survey = await db.collection('surveys').findOne({surveyId: surveyId });
    return survey;
    }else{
        console.log("L'ID n'existe pas")
    }
    
}

async function getAllSurveys() {
    const db = await connectToMongoDB();
    const surveys = await db.collection('surveys').find().toArray();
    return surveys;
}

// Mettre à jour une enquête par ID
async function updateSurvey(surveyId, updateData) {
    const db = await connectToMongoDB();
    const result = await db.collection('surveys').updateOne(
        {surveyId: surveyId},
        { $set: updateData }
    );
    return result.modifiedCount;
}

async function deleteSurvey(surveyId) {
    const db = await connectToMongoDB();
    const result = await db.collection('surveys').deleteOne({ surveyId: surveyId });
    return result.deletedCount;
}

module.exports = {
    createSurvey,
    getSurveyById,
    getAllSurveys,
    updateSurvey,
    deleteSurvey
};

