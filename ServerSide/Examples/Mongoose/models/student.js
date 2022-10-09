const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: false
    },
    totalMarks: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Student", studentSchema);