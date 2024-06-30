import { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './EventMap.css';

const inactive = new Icon({
  iconUrl: "/marker.png",
  iconSize: [54, 60]
});
const active = new Icon({
  iconUrl: "/active.png",
  iconSize: [63, 70]
});

function EventMarker({event, setEvent, setSelectedEvent, PopupContent, icon}) {
  const markRef = useRef(null);
  return (
    <Marker
      ref={markRef}
      icon={icon}
      position={event.position}
      draggable={event.draggable || false}
      eventHandlers={{
        click: () => setSelectedEvent(),
        dragend: () => markRef.current && setEvent({...event, position:markRef.current.getLatLng()})
      }}
    >
      {
        PopupContent !== undefined &&
          <Popup> <PopupContent event={event} setEvent={setEvent}/> </Popup>
      }
    </Marker>
  );
}

function EventMap(props) {

  const [selectedEvent, setSelectedEvent] = useState(0);
  const [events, setEvents] = useState(props.events);
  
  function setEvent(index, event) {
    let buffer = [...events];
    buffer[index] = event;
    setEvents(buffer);
  }
  
  const eventsList = events.map((event, index) => (
    <EventMarker
      key={`marker-${index}`}
      event={event}
      icon={selectedEvent === index ? active : inactive}
      setEvent={(new_event) => setEvent(index, new_event)}
      setSelectedEvent={() => setSelectedEvent(index)}
      PopupContent={props.PopupContent}
    />
  ));

  return (
    <>
      <MapContainer
        center={props.center}
        maxBounds={props.maxBounds}
        zoom={props.zoom || 18}
      >
        <TileLayer url= {props.tileProviderUrl || "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"} />
        {eventsList}
        {
          selectedEvent !== undefined &&
            <div className="event-preview-container"> {
                  props.eventPreview !== undefined
                  ? <props.eventPreview event={events[selectedEvent]} setEvent={(new_event) => setEvent(selectedEvent, new_event)} />
                  /* default preview? */
                  : null
            } </div>
        }
      </MapContainer>
    </>
  );
}

export default EventMap;
