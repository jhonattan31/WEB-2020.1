var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

var mongoDB_URI = 'mongodb://127.0.0.1:27017/mogdbs';
mongoose.connect(mongoDB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose connected to' + mongoDB_URI)
});

db.on('disconnected', () => {
    console.log('Mongoose Disconnected to ' + mongoDB_URI)
});

db.on('error', (err) => {
    console.log('Mongosse Error: ' + err)
});