const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://root:tXQ0Qh9eQTr5p0Up@cluster0.eemyp.mongodb.net/AppDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

module.exports = client
