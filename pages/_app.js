import "@/styles/index.css";
import "@/styles/fonts.css";
import "@/styles/alert.css";
import "@/styles/profile.css";
import Footer from "@/components/footer";
import { useRouter } from "next/router";
import { UserContextProvider } from "@/contexts/User";

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();
  return (
    <>
    <UserContextProvider>
      <Component {...pageProps} />
      {pathname !== "/login" &&
      pathname !== "/register" &&
      pathname !== "/redirect" &&
      !pathname.startsWith("/user") ? (
        <Footer />
      ) : (
        <></>
      )}
    </UserContextProvider>
    </>
  );
}
