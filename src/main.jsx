// Import React library
import React from "react";

// Import ReactDOM for rendering
import ReactDOM from "react-dom/client";

// Import the main App component
import App from "./App";

// Import the BrowserRouter for routing
import { BrowserRouter } from "react-router-dom";

// Import the Redux store
import store from "./redux/store";

// Import the Provider for Redux
import { Provider } from "react-redux";

// Import the ToastContainer for notifications
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Create a root element and render the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Wrapping the app in BrowserRouter to enable routing */}
    <BrowserRouter>
      {/* Notification toast container */}
      <ToastContainer
        theme="dark"
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnHover={false}
      />

      {/* Providing the Redux store to the app */}
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
