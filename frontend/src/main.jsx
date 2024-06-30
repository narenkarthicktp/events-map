import React from 'react'
import ReactDOM from 'react-dom/client'

import EventModifier from './components/EventPreview.jsx';
import EventMap from './components/EventMap.jsx';
import "./style.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EventMap
      center={{lat: 34.47843, lng:136.63153}}
      maxBounds={[{lat:34.48084, lng:136.62253}, {lat:34.47387, lng:136.63938}]}
      zoom={17}
      tileProviderUrl="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      events={[
        {
          position: {lat:34.47591, lng:136.62883},
          title: "Bug Catching Contest",
          description: "\
            To compete, Trainers must catch the single best Bug-type Pokémon they can find.\
            To do this, Trainers are given twenty Sport Balls,\
            and they are only allowed to use a single Pokémon from their party.\
          ",
          img: "../bug-contest.png"
        },
        {
          position: {lat:34.47667, lng:136.63389},
          title: "Pokéathlon",
          description: "\
            Pokéthlon consists of a number of athletic competitions involving Pokémon,\
            in the manner of Olympic track and field competitions.\
            Its name is a portmanteau of Pokémon and decathlon, as there are a total of 10 events.\
          ",
          img: "../pokeathlon.png"
        }
      ]}
      eventPreview={EventModifier}
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
    ></EventMap>
  </React.StrictMode>
);

