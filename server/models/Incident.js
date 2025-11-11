const mongoose = require('mongoose');

const incidentSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        description: true
    },
    location: {
        lat: {
            type: Number,
            description: true
        },
        lng: {
            type: Number,
            description: true
        },
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});