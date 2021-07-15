import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
export interface IPosition {
    x: number,
    y: number
}

function SetViewOnClick({ x, y }: IPosition) {
    const map = useMap();
    map.setView([x, y], map.getZoom());

    return null;
}

function Map({ x, y }: IPosition) {
    const position: [number, number] = [x, y]
    return (
        <div className="playGround">
            <MapContainer center={position} zoom={8} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <SetViewOnClick x={x} y={y} />
            </MapContainer>
        </div>)
}
export default Map;