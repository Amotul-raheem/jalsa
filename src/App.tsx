import React from 'react';
import "./App.css"
import {MainPage} from "./components/mainPage/MainPage";
import {EventSchedule} from "./components/eventSchedulePage/EventSchedule";
import {SpeakersPage} from "./components/speakersPage/SpeakersPage";
import {AuthPage} from "./components/authPage/AuthPage";

export const App = () => {
  return (
    <div className="App">
        {/*<MainPage/>*/}
        {/*<EventSchedule/>*/}
        {/*<SpeakersPage/>*/}
        <AuthPage/>

    </div>
  );
}

export default App;
