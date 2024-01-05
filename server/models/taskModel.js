const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    AssignedTo: {
        type: String,
        required: true,
    },
    Deadline: {
        type: String,
        required: true,
    },
    Priority: {
        type: String,
        required: true,
    },
    Status: {
        type: String,
        required: true,
    },

});

const Task = mongoose.model("task", taskSchema, 'task');

module.exports = { Task };