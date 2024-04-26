import Footer from "@/components/footer";
import "@/styles/index.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <>
      <Component {...pageProps} />
      {pathname !== ("/login") ? <Footer /> : <></>}
    </>
  );
}
