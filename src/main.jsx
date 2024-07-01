import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./font.css";
import "./index.css";
import "react-image-crop/dist/ReactCrop.css";
import "./colorVaiables.css";
import ScrollToTop from "./components/common/ScrollToTop";
import { Provider } from "react-redux";
import reduxStore from "./core/provider/redux";
import { AnimatePresence } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
