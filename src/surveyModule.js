const { connectToMongoDB } = require('./config/database');

async function createSurvey(survey) {
    try {
        const db = await connectToMongoDB();
        const existingAnswer = await db.collection('Surveys').findOne({ id: survey.id });
        if (existingAnswer) {
            throw new Error(`L'enquête avec l'ID ${survey.id} existe déjà.`);
        }
        const result = await db.collection('Surveys').insertOne(survey);
        console.log(`Vous avez créé une nouvelle enquête`);
        return result.insertedId;
    } catch (error) {
        console.error(`L'enquête avec l'ID ${survey.id} existe déjà.`);
        
    }
}

async function getSurveyById(surveyId) {
    const db = await connectToMongoDB();
    const existingAnswer = await db.collection('Surveys').findOne({ id: surveyId });
    if (existingAnswer) {
        const survey = await db.collection('Surveys').findOne({id: surveyId });
    return survey;
    }else{
        console.log("L'ID n'existe pas")
    }
    
}

async function getAllSurveys() {
    const db = await connectToMongoDB();
    const surveys = await db.collection('Surveys').find().toArray();
    return surveys;
}

// Mettre à jour une enquête par ID
async function updateSurvey(surveyId, updateData) {
    const db = await connectToMongoDB();
    const result = await db.collection('Surveys').updateOne(
        {id: surveyId},
        { $set: updateData }
    );
    return result.modifiedCount;
}

async function deleteSurvey(surveyId) {
    const db = await connectToMongoDB();
    const result = await db.collection('Surveys').deleteOne({ id: surveyId });
    return result.deletedCount;
}

module.exports = {
    createSurvey,
    getSurveyById,
    getAllSurveys,
    updateSurvey,
    deleteSurvey
};

