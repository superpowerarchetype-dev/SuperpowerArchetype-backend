const mongoose = require('mongoose')

const UserInfoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Please add a name'],
        // unique: true,
        trim: true,
        maxlength: [50,'Name can not be more than 50 characters']
    },

    email: {
        type: String,
        required: [false],
        trim: true,
        maxlength: [50, 'Email can not be more than 50 characters'],
        
      },

    age: {
        type: Number,
        required: [true, 'Please add an age'],
        min: [0, 'Age must be greater than 0']
    },

    gender: {
        type: String,
        required: [true, 'Please add a gender'],
        trim: true,
    },

    archetype: {
        type: String,
        required: [true,'Please add a archetype'],
        trim: true,
    } 
})

module.exports = mongoose.model('UserInfo',UserInfoSchema)