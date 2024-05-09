import React from 'react'
import ReactDOM from 'react-dom/client'
import EventMap from './components/EventMap.jsx';
import { Popup } from 'react-leaflet';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EventMap
      center={[11.05049, 77.01799]}
      maxBounds={[[11.05181, 77.01623], [11.04953, 77.02044]]}
      events={[{
          position: [11.05049, 77.01799],
          title: "somth"
          // icons, title, description
        },
        {
          position: [11.05079, 77.01999],
          title: "else"
        }
      ]}
      // popupComponent={(
      //   <Popup>
      //     This is a pop-freaking-up!
      //   </Popup>
      // )}
      eventPreviewComponent={(props) => (
        <>
          <img src="../vite.svg"/><code>{props.title}</code>
        </>
      )}
    />
  </React.StrictMode>,
)
