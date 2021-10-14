const mongoose = require('mongoose');


const dbConnect = () => {
  // connection URI
  const MONGO_URI = "mongodb+srv://jsuldev:Makoto97%21@soloproject.8gnpp.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-2h027k-shard-0&readPreference=primary&appname=mongodb-vscode%200.6.12&ssl=true"

  // using connect to ensure db is set up
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'soloproject'
  })
    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));
};

module.exports = dbConnect;
