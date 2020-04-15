import React, { useEffect } from 'react';
import Sidebar from "react-sidebar";
import L from "leaflet";

const SidebarComponent = ({ onSetOpen, open, docked, pullRigth }) => {

  useEffect(() => {
    let map = L.map('map').setView([2.433, -76.617], 4.5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([2.433, -76.617]).addTo(map)
    .bindPopup('Popayán.')
    .openPopup();
  }, []);

  return (
    <Sidebar
      sidebar={<b>Sidebar content</b>}
      open={open}
      docked={docked}
      pullRigth={pullRigth}
      shadow={false}
      onSetOpen={onSetOpen}
      styles={{ sidebar: { background: "gray" } }}
    >
      <div className="header">
        <button onClick={() => onSetOpen(!open, !docked)}>
          { open ? 'Close' : 'Open'}
        </button>
        <p>Lealeft Test</p>
      </div>
      <div id="map" className="map-container">
        Loading map
      </div>
    </Sidebar>
  );
};

export default SidebarComponent;