const mongoose = require('mongoose');
const Scheama = mongoose.Schema;

const postScheama = new Scheama({
    title: {
        type: String,
        required:[true,'Title is requiered']
    },
    description: {
        type: String,
        required:[true,'Description is required']
    },
   
});

const posts = mongoose.model('post', postScheama);

module.exports = posts