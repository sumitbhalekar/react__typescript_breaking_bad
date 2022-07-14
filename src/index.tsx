import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import App from './App';
import './index.css';
import store from './redux';
import reportWebVitals from './reportWebVitals';
import CharacterDetails from './screens/CharacterDetails/CharacterDetails';
import FavouriteCharacters from './screens/FavouriteCharatcers/FavouriteCharacters';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="CharacterDetails" element={<CharacterDetails />} />
          <Route path="FavouriteCharacters" element={<FavouriteCharacters />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
