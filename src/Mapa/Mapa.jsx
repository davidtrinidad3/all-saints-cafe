import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Mapa.css';

const Mapa = () => {
	return (
		<>
			<MapContainer center={{lat: '-12.0681498', lng: '-77.036128'}} zoom={14}>
				<TileLayer
					url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>

				<Marker position={{lat: '-12.0680398', lng: '-77.035958'}}>
					<Popup>Aquí se encuentra la Cafetería</Popup>
				</Marker>
			</MapContainer>
		</>
	);
};

export default Mapa;
