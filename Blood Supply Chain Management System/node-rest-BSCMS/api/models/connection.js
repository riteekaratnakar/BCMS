const mongoose = require('mongoose');

const connectionSchems = mongoose.Schema({
    userOneEmailId : String,
    userTwoEmailId : String,
    status : String
});

module.exports = mongoose.model('Connection', connectionSchems);