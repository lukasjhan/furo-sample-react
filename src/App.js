import React, { useEffect } from "react";
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
      clientId={"368070d851a35d76a50ea6da6ac314b7"}
      redirectUri={window.location.origin + "/"}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout auth={false} />}>
            <Route index element={<Home />} />
            {/* <Route path="private" element={<Home />} /> */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FuroProvider>
  );
}
