import { handleResponse, handleError } from './apiUtils';

const MongoClient = require('mongodb').MongoClient;
const mongoUrl =
  'mongodb+srv://matt-liu:Kevin0122@jhu-help.eax6k.mongodb.net/JHU-Help?retryWrites=true&w=majority';
const uri = mongoUrl;

export function getData() {
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect((err) => {
    const collection = client.db('test').collection('devices');
    // perform actions on the collection object
    client.close();
  });
}

// For JSON-based api
// const baseUrl = process.env.REACT_APP_API_URL + "/SGASurveyResults/";

// export function getData() {
//     return fetch(baseUrl)
//         .then(handleResponse)
//         .catch(handleError);
// }

// export function saveData(data) {
//     return fetch(baseUrl + (data.id || ""), {
//         method: data.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify({
//             ...data,
//             // Parse authorId to a number (in case it was sent as a string).
//             authorId: parseInt(data.authorId, 10)
//         })
//     })
//         .then(handleResponse)
//         .catch(handleError);
// }

// export function deleteData(dataId) {
//     return fetch(baseUrl + dataId, { method: "DELETE" })
//         .then(handleResponse)
//         .catch(handleError);
// }
