import { UserContext } from "@/components/UserProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return;
  <UserContext.Provider>
    <Component {...pageProps} />;
  </UserContext.Provider>;
}
