import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { getIncidents } from "../services/api";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaURL: require('leaflet/dist/images/marker-icon-2x.png'),
    iconURL: require('leaflet/dist/images/marker-icon.png'),
    iconShadow: require('leaflet/dist/images/marker-shadow.png'),
});

const MapView = () => {
    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        getIncidents()
            .then(res => setIncidents(res.data))
            .catch(err => console.error(err));
    }, []);

    const defaultPosition = [28.6139, 77.2090]; // Example: Delhi coordinates
    return (
        <MapContainer center={defaultPosition} zoom={13} style={{ height: '90vh', width: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {incidents.map((incident, i) => (
                <Marker key={i} position={[incident.location.lat, incident.location.lng]}>
                    <Popup>
                        <strong>{incident.type}</strong><br />
                        {incident.description}<br />
                        {new Date(incident.timestamp).toLocaleString()}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default MapView;