import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '../styles/globals.css';
import { ThemeProvider } from '../context/ThemeContext';
NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

Router.events.on('routeChangeError', () => {
  NProgress.done();
});

function MyApp({ Component, pageProps }) {
  return(
  <>
   <Head> 
        <meta content="" name="keywords"/>
        <meta content="Explore and download a wide selection of comics and books at comicnova. Your one-stop platform for entertainment and enjoyment!" name="description" />
        <meta name="theme-color" content="#fd7e14" />
        <meta name="description"
        content="Explore and download a wide selection of comics and books at comicnova. Your one-stop platform for entertainment and enjoyment!" />
        <meta content="width=device-width, initial-scale=1.0, shrink-to-fit=no" name="viewport" />
        <title>comicnova | Read and Download Comics and Books for Free</title>
        <meta name="google-adsense-account" content="ca-pub-2821662885315177"></meta>
   </Head>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  </>);
}
export default MyApp;
