import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider, DarkModeProvider, DialogProvider } from "./Providers";
import { Provider as ReduxProvider } from "react-redux";
import store from "./Services/Reducers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <ReduxProvider store={store}>
          <AuthProvider>
            <DialogProvider>
              <App />
            </DialogProvider>
          </AuthProvider>
        </ReduxProvider>
      </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
