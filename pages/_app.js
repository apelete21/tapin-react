import "@/styles/index.css";
import "@/styles/fonts.css";
import "@/styles/alert.css";
import Footer from "@/components/footer";
import { useRouter } from "next/router";
import {} from "next";

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();
  // console.log(pathname);
  return (
    <>
      <Component {...pageProps} />
      {pathname !== "/login" && pathname !== "/register" ? <Footer /> : <></>}
    </>
  );
}
