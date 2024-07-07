import { useRef, useReducer } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './EventMap.css';

const ACTIONS =  {
	SELECT: "select-event",
	RELOCATE: "relocate-event",
};

function reducer(state, action) {
	switch(action.type) {
		case ACTIONS.SELECT:
			console.debug(action.payload);
			state.currMarker = action.payload;
			break;
		case ACTIONS.RELOCATE:
			console.debug(`changed ${state.currMarker}, ${JSON.stringify(state.events)}, ${action.payload}`);
			break;
	}
	return state;
}

function EventMap(props) {
	const [{currMarker, currEvent, events}, dispatch] = useReducer(reducer, {currMarker: null, currEvent: null, events: props.events});
	console.debug(`clicked ${currMarker}`);

	const markerRefs = events.map(()=>useRef(null));
	const eventMarkers = events.map((event, index) => (
		<Marker
			key={`marker-${index}`}
			position={event.position} 
			ref={markerRefs[index]}
			draggable={true}
			eventHandlers={{
				click: () => dispatch({type: ACTIONS.SELECT, payload: index}),
				dragend: () => dispatch({type: ACTIONS.RELOCATE, payload: markerRefs[index].current.getLatLng()})
			}} 
		/>
	));

	return (
		<>
			<MapContainer
				center={props.center}
				maxBounds={props.maxBounds} 
				zoom={props.zoom || 18}
			>
				<TileLayer url={props.tileProviderUrl || "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}/>
				{eventMarkers}
			</MapContainer>
		</>
	);
}

export default EventMap;
