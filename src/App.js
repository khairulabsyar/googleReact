import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import { Google, About, NoMatch, Admin } from "./Layout/Pages";
import UseAuth from "./Hooks/UseAuth";
import ProtectedRoute from "./Routes/ProtectedRoute";
import "./App.css";

function App() {
  const { user } = UseAuth();
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {/* Default */}
          <Route index element={<Google />} />

          {/* Search */}
          <Route path="google" element={<Google />} />

          {/* About */}
          <Route
            path="about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          ></Route>

          {/* Once Log In */}
          <Route
            path="profile"
            element={
              <ProtectedRoute
                isAllowed={user?.role.includes("admin")}
                redirectPath={"/about"}
              >
                <Admin />
              </ProtectedRoute>
            }
          />
          {/* Error URL */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
