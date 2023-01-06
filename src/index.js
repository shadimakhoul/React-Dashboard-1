import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";import App from './Components/App';
import dataReducer from "./Components/features/data"

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: {
    data: dataReducer
  },
});

root.render(<div>
            <Provider store={store}>
              <App />
            </Provider>
            </div>)
