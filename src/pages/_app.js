import { wrapper } from "../Redux/Store"
function MyApp({ Component, pageProps }) {
  return (

      <Component {...pageProps} />

  )
}

export default wrapper.withRedux(MyApp);
