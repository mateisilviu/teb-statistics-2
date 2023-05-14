'use client';

import L from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { MapProps } from '@/types/map';

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
});



const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const MapComponent: React.FC<MapProps> = ({ center, markers }) => {
    return (
        <MapContainer
            center={center as L.LatLngExpression || [44.45, 26.09]}
            zoom={center ? 4 : 2}
            scrollWheelZoom={false}
            className="h-full rounded-lg w-full z-0"
        >
            <TileLayer
                url={url}
                attribution={attribution}
            />
            {center && (
                <Marker position={center as L.LatLngExpression} />
            )}
        </MapContainer>
    )
}

export default MapComponent