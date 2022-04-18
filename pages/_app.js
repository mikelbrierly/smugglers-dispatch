import "../styles/global.scss";

// You can use this App component to keep state when navigating between pages
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
