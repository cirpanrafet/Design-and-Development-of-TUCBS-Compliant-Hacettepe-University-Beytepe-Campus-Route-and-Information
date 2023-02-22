import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import './Map.css';

class MapComponent extends React.Component {
    state = {
        lat:  39.86559212247091,
        lng: 32.73417273791947,
        bounds: 10,
        zoom: 17
    


    };

    render() {
        var center = [this.state.lat, this.state.lng];

        return (
            <MapContainer zoom={this.state.zoom} center={center} style={{ width: '100%', height: '100%' }}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        );
    }
}



export default MapComponent;