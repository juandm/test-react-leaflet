import React, { useState } from 'react';
import './App.css';
import Sidebar from "./components/Sidebar";

function App() {

  const [sidebarState, setSidebarState] = useState({
    docked: true,
    open: true,
    transitions: true,
    pullRight: false,
    shadow: false
  });

  function onSetOpen(open, docked) {
    setSidebarState({ open, docked })
  }

  return (
    <div className="app-container">
      <Sidebar 
        pullRight={sidebarState.pullRight} 
        open={sidebarState.open}
        docked={sidebarState.docked}
        shadow={sidebarState.shadow}
        onSetOpen={onSetOpen}
      />
    </div>
  );
}

export default App;
