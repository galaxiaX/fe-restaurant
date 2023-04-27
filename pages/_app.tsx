import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store";
import axios from "axios";
import "@/styles/globals.css";

axios.defaults.baseURL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:8080";
axios.defaults.withCredentials = true;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />;
      </Provider>
    </>
  );
}
