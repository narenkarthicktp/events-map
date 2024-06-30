
function EventDetails(props) {
  const event = props.event;
  return (
    <div className="event-preview-content">
      <img className="event-preview-icon" src={event.img}/>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
    </div>
  );
}

export default function EventModifier({event, setEvent}) {
  return (
    <>
      <EventDetails event={event}>
        <code> somth </code>
      </EventDetails>
      <button
        onClick={() => setEvent({...event, draggable:!event.draggable})}
      >
        {event.draggable ? "Set event location" : "Change event location"}
      </button>
    </>
  );
}
