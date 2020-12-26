const mongoose = require('mongoose');
const Scheama = mongoose.Schema;


const userScheama = new Scheama({
    firstName: {
        type: String,
        required:[true,'first name is requiered']
    },
    lastName: {
        type: String,
        required:[true,'last name is required']
    },
    email: {
        type: String,
        required: [true, 'email is required']
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    photo: {
        type: String,
        required: [true, 'photo is required']
    },
    todos:[{ type: Scheama.Types.ObjectId, ref: 'post' }]
});

const userModel = mongoose.model('user', userScheama);

module.exports = userModel