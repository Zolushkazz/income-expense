import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState("");

  const token = typeof window !== "undefined" && localStorage.getItem("token");

  const handleChange = (ev) => {
    setUserData(ev.target.value);
  };
};
