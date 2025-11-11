import React, { useState } from "react";
import { reportIncident } from "../services/api";

const ReportForm = () => {
    const [formData, setFormData] = useState({
        type: '',
        description: '',
        location: { lat: '', lng: '' }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const { lat, lng } = formData.location;

        try {
            await reportIncident(formData);
            alert("Incident reported successfully!");
            setFormData({ type: '', description: '', location: { lat: '', lng: '' } });
        } catch (error) {
            alert("Error reporting incident!");
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
            <label>Type of incident</label><br />
            <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                required
            >
                <option value="">Select</option>
                <option value="Robbery">Robbery</option>
                <option value="Vandalism">Vandalism</option>
                <option value="Harassment">Harassment</option>
                <option value="Other">Other</option>

            </select><br /><br />

            <label>Description </label><br />
            <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows="3"
                required
            ></textarea><br /><br />

            <label>Latitude</label><br />
            <input
                type="number"
                step="any"
                value={formData.location.lat}
                onChange={(e) => setFormData({ ...formData.location, lat: parseFloat(e.target.value) })}
            ></input><br /><br />

            <label>Longitude</label><br />
            <input
                type="number"
                step="any"
                value={formData.location.lng}
                onChange={(e) => setFormData({ ...formData.location, lng: parseFloat(e.target.value) })}
            ></input><br /><br />

            <button type="submit">Submit Report</button>
        </form>
    );
};

export default ReportForm;