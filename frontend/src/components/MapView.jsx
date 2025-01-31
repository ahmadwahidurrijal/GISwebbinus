import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import PropTypes from "prop-types";
import markerIconPng from "leaflet/dist/images/marker-icon.png"; // Menggunakan ikon default Leaflet

const MapView = ({ requests }) => {
    return (
        <MapContainer center={[-6.200000, 106.816666]} zoom={6} className="map">
            {/* Tile Layer (Peta Dasar) */}
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {/* Loop Data Requestor & Tambahkan Marker */}
            {requests.map((request, index) => (
                <Marker
                    key={index}
                    position={[request.latitude, request.longitude]}
                    icon={L.icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}
                >
                    <Popup>
                        <h3>{request.title}</h3>
                        <p>{request.description}</p>
                        <p><strong>Kebutuhan:</strong> {request.amountNeeded.toLocaleString()} IDR</p>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

// Validasi tipe props
MapView.propTypes = {
    requests: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            amountNeeded: PropTypes.number.isRequired,
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default MapView;
