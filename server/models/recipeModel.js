const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    comments: [{
        user: { type: String }, 
        content: { type: String }, 

    }]
}, {timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);
