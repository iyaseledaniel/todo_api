const moongoose = require('mongoose');

const todoSchema = new moongoose.Schema({
    title: {
        type: String,
        required: true
    },
    details: {
        type: String,
    },
    time : {
        type: Date,
        default: Date.now
    },
    completed: {
        type: Boolean,
        default: false
    }
}, { timestamps: true }); 

const TodoModel  = moongoose.model("Todo", todoSchema);

module.exports = TodoModel;