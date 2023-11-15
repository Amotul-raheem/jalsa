import React from 'react';
import "./App.css"
import {MainPage} from "./components/mainPage/MainPage";
import {EventSchedule} from "./components/eventSchedulePage/EventSchedule";

export const App = () => {
  return (
    <div className="App">
        {/*<MainPage/>*/}
        <EventSchedule/>

    </div>
  );
}

export default App;
