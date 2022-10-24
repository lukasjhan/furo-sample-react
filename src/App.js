import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { FuroProvider } from "furo-react";

import Layout from "./screens/Layout";
import NoMatch from "./screens/NoMatch";
import Home from "./screens/Home";

export default function App() {
  return (
    <FuroProvider
      domain={"https://dev.auth.furo.one"}
      clientId={process.env.REACT_APP_CLIENT_ID}
      redirectUri={window.location.origin + "/"}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout auth={false} />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FuroProvider>
  );
}
