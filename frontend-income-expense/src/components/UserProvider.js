import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState();
  const router = useRouter();

  const token = typeof window !== "undefined" && localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      return router.push("/login");
    }

    const verifyToken = async () => {
      try {
        const result = await axios.get("http://localhost:8000/verify", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        setUserEmail(result?.data);

        router.push("/dashboard");
      } catch (err) {
        console.log(err.message);
        // localStorage.removeItem("token");
        // router.push("/login");
      }
    };
    verifyToken();
  }, []);

  return (
    <UserContext.Provider value={{ userEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export const userContext = () => useContext(UserContext);
