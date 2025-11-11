const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = require('./config/db');
const incidentRoutes = require('./routes/incidentRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('./api/incidents', incidentRoutes);

app.get('/',(req,res) => {
    res.send('SafeZone server running');
});

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});