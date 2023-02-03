const { getCollection } = require('./connection');

async  function  findOne(collectionName, query, options = {}) {
	try {
		const  collection = getCollection(collectionName);
		const  result = await  collection.findOne(query, options);
		return  result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction findOne avec les parametres suivants: ${query}`);
		console.log(e);
		throw  e;
	}
}

async  function  findAll(collectionName, query, options = {}) {
	try {
		const  collection = getCollection(collectionName);
		const  result = await  collection.find(query, options).toArray();
		return  result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction findAll avec les parametres suivants: ${query}`);
		console.log(e);
		throw  e;
	}
}

async  function  insertOne(collectionName, document) {
	try {
		const  collection = getCollection(collectionName);
		const  result = await  collection.insertOne(document);
		return  result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction insertOne avec les parametres suivants: ${document}`);
		console.log(e);
		throw  e;
	}
}

async  function  insertMany(collectionName, documents) {
	try {
		const  collection = getCollection(collectionName);
		const  result = await  collection.insertMany(documents);
		return  result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction insertMany avec les parametres suivants: ${documents}`);
		console.log(e);
		throw  e;
	}
}
async  function  updateOne(collectionName, query, document) {
	try {
		const collection = getCollection(collectionName);
		const result = await collection.updateOne(query, document);
		return result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction updateOne avec les parametres suivants: ${query}`);
		console.log(e);
		throw e;
	}
}

async  function  updateMany(collectionName, query, document) {
	try {
		const collection = getCollection(collectionName);
		const result = await collection.updateMany(query, document);
		return result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction updateMany avec les parametres suivants: ${query}`);
		console.log(e);
		throw e;
	}
}

async  function  replace(collectionName, query, document) {
	try {
		const collection = getCollection(collectionName);
		const result = await collection.replaceOne(query, document);
		return result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction replace avec les parametres suivants: ${query}`);
		console.log(e);
		throw e;
	}
}

async  function  deleteOne(collectionName, query) {
	try {
		const collection = getCollection(collectionName);
		const result = await collection.deleteOne(query);
		return result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction deleteOne avec les parametres suivants: ${query}`);
		console.log(e);
		throw e;
	}
}

async  function  deleteMany(collectionName, query) {
	try {
		const collection = getCollection(collectionName);
		const result = await collection.deleteMany(query);
		return result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction deleteMany avec les parametres suivants: ${query}`);
		console.log(e);
		throw e;
	}
}
async function find(collectionName, query, options = {}){
	try{
		const collection = getCollection(collectionName);
		const result = collection.find(query, options);
		return result;

	}
	catch(error){
		console.log(`Erreur lors de l execution de la fonction find avec les parametres suivants: ${query}`);
	}
}

module.exports = {
	findOne, 
	insertOne, 
	insertMany, 
	updateOne, 
	updateMany, 
	replace, 
	deleteOne, 
	deleteMany, 
	find,
	findAll
};

