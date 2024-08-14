// const { MongoClient } = require("mongodb");

// // URL de connexion à MongoDB
// const url = "mongodb://localhost:27017"; 
// const dbName = "enqueteDB"; 

// // Créez une nouvelle instance de MongoClient sans les options obsolètes
// const client = new MongoClient(url);

// async function connectToMongoDB() {
//   try {
//     // Connectez-vous au client MongoDB
//     await client.connect();
//     console.log("Connected successfully to MongoDB");

//     // Sélectionnez la base de données à utiliser
//     const db = client.db(dbName);
//     // const collection = await db.collection('collection1');
//     // const result = await collection.find({}).toArray();
//     // console.log(result);

//     return db;
//   } catch (err) {
//     console.error("Failed to connect to MongoDB", err);
//   }
// }


// // Exportez la fonction de connexion pour l'utiliser ailleurs dans votre application
// module.exports = connectToMongoDB;

// // connectToMongoDB()










const { MongoClient } = require('mongodb');

// URL de connexion à MongoDB
const url = 'mongodb://localhost:27017';
const dbName = 'enqueteDB';  // Remplacez par le nom de votre base de données

let db;

async function connectToMongoDB() {
    if (!db) {
        const client = new MongoClient(url);
        // await client.connectToMongoDB();
        console.log('Connecté à la base de données MongoDB');
        db = client.db(dbName);
    }
    return db;
}

module.exports = { connectToMongoDB };