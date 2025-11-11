import React from "react";
import MapView from "../components/MapView";

const Home = () => {
    return (
        <div>
            <h2 style={{textAlign : "center"}}>SafeZone - Public Safety Map</h2>
            <MapView />
        </div>
    );
}

export default Home;