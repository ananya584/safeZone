const Incident = require('../models/Incident');

const getIncident = async (req, res) => {
    try {
        const incidents = await Incident.find().sort({ timestamp: -1 });    //arranging the incidents in descending order;i.e.;latest incidents comes first
        res.json(incidents);
    } catch (error) {
        res.status(500).json({ message: "Error fetching incidents" });
    }
};

const createIncident = async (req, res) => {
    const { type, description, location } = req.body;
    if(!type || !description || !location || !location.lat || !location.lng){
        return res.status(400).json({message: "Missing required fields"});
    }

    try {
        const incident = new Incident({type, description, location});
        await incident.save();
        res.status(201).json(incident);
    } catch (error) {
        res.status(500).json({message: "Error creating incident"});
    }
};

module.exports = { getIncident, createIncident };