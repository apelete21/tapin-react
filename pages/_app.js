import Footer from "@/components/footer";
import "@/styles/index.css";
import { useRouter } from "next/router";

const footerRevockedPath = [
  "login"
]

export default function App({ Component, pageProps }) {
  const route = useRouter()
  console.log(route)
  return (
    <>
      <Component {...pageProps} />
      {footerRevockedPath.forEach((e, i)=> {
        if (e !== route.asPath) return (
          <>
            <Footer />
          </>
        );
      })}
    </>
  );
}
