import "../styles/globals.css";
import Header from "../components/Header";
import Head from "next/head";
import Tele from "../assests/tele.svg";
import Image from "next/image";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative h-fit w-full bg-black text-white">
      {/* scripts */}
      <script src="https://cdn.sellix.io/static/js/embed.js" async></script>
      <link
        href="https://cdn.sellix.io/static/css/embed.css"
        rel="stylesheet"
      />
      <div className="stars-background small-stars"></div>
      <div className="stars-background medium-stars"></div>
      <div className="stars-background big-stars"></div>
      <div className="flex flex-col items-center">
        <div className="container fit_background">
          <Link href={"https://t.me/nardoalts"}>
            <div className="h-16 w-16 fixed right-3 bottom-3 cursor-pointer">
              <Image
                title="Telegram" 
                src={Tele}
                alt="telegram"
              />
            </div>
          </Link>
          <Header />
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
