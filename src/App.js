import React from "react";
import { UserProvider } from "./providers/UserProvider";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
