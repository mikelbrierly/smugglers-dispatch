import "../styles/global.scss";
import { AppProps } from "next/app";

// You can use this App component to keep state when navigating between pages
function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
