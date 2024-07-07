import React from 'react'
import ReactDOM from 'react-dom/client'

import EventMap from './components/EventMap.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<EventMap
			center={{lat: 34.47843, lng:136.63153}}
			maxBounds={[{lat:34.48084, lng:136.62253}, {lat:34.47387, lng:136.63938}]}
			zoom={17}
			tileProviderUrl="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
			events={[
				{
					position: {lat:34.47591, lng:136.62883},
					queue: {
						"live": [
							{
								eventId: 0,
								name: "Bug catching contest",
								starts: "20240509T20:00",
								ends: "20240509T21:00",
							}
						],
						"upcoming": [
							{
								eventId: 1,
								name: "Bug catching contest",
								starts: "20240516T20:00",
								ends: "20240516T21:00",
							}
						]
					}
				},
				{
					position: {lat:34.47653, lng:136.63163},
					queue: {
						"live": [
							{
								eventId: 2,
								name: "Relay Run",
								starts: "20240509T20:00",
								ends: "20240509T21:00",
							}
						],
						"upcoming": [
							{
								eventId: 3,
								name: "Hurdle Dash",
								starts: "20240509T21:30",
								ends: "20240509T22:30",
							},
							{
								eventId: 4,
								name: "Disc Catch",
								starts: "20240509T23:00",
								ends: "20240509T23:30"
							}
						]
					}
				},
			]}
		/>
	</React.StrictMode>
)
      // eventPreview={({event, setEvent}) => {
      //   return (
      //     <div className="event-preview-content">
      //       <img className="event-preview-icon" src={event.img}/>
      //       <h3>{event.title}</h3>
      //       <p>{event.description}</p>
      //       <button
      //         onClick={() => setEvent({...event, draggable:!event.draggable})}
      //       >
      //         {event.draggable ? "Set event location" : "Change event location"}
      //       </button>
      //       <button
      //         onClick={() => setEvent({...event, draggable:!event.draggable})}
      //       >
      //         {event.draggable ? "Set event location" : "Change event location"}
      //       </button>
      //     </div>
      //   );
      // }}
