import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "./context/context";
import App from "./App";
import { SpeechProvider } from "@speechly/react-client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider>
    <SpeechProvider
      appId="3aff6bbd-5cad-4b3b-af12-117017a184b4"
      language="en-us"
    >
      <App />
    </SpeechProvider>
  </Provider>
);
