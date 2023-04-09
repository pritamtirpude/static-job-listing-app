import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { JobContextProvider } from "./context/job.context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <JobContextProvider>
      <App />
    </JobContextProvider>
  </React.StrictMode>
);
