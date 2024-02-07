import { createContext, useContext, useState } from "react";

const UserContext = createContext()

export const UserProvider = ({children}) =>{
const [userData, setUserData] = useState("");

const handleChange = (ev) =>{
    setUserData(ev.target.value)
}
}