import { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './EventMap.css';

function EventMap(props) {
  // center, maxBounds of the map to be displayed
  // events to be marked [should contain position of the marker named as position]
  // Popup component for the marker

  let [selectedItem, setSelectedItem] = useState();
  const eventsList = props.events.map((event, index) => (
    <Marker
      key={`marker-${index}`}
      position={event.position}
      eventHandlers={{
        click: () => { setSelectedItem(event); console.log(selectedItem)}
      }}
    >
      if(props.popupComponent !== undefined)
        {props.popupComponent}
    </Marker>
  ));
  return (
    <>
      <MapContainer
        center={props.center}
        maxBounds={props.maxBounds}
        zoom={props.zoom || 18}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        {eventsList}
      </MapContainer>
      {
        selectedItem &&
        <div id="event-preview-container">
            { props.eventPreviewComponent !== undefined ? <props.eventPreviewComponent title={selectedItem.title}/> : null }
        </div>
      }
    </>
  );
}

export default EventMap;
