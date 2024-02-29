import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState();
  const router = useRouter();

  useEffect(() => {
    const token =
      typeof window !== "undefined" && localStorage.getItem("Token");

    if (!token) {
      router.push("/login");
      return;
    }

    const verifyToken = async () => {
      try {
        const result = await axios.post(
          "http://localhost:8000/verify",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setUserEmail(result?.data);
        router.push("/dashboard");
      } catch (err) {
        localStorage.removeItem("token");
        router.push("/login");
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
