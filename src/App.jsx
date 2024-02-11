/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Game from "./components/Game/Game";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Game />
      </PersistGate>
    </Provider>
  );
}

export default App;
