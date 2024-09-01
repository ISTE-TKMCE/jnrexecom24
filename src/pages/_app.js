import '@/styles/globals.css'
import Layout from '@/components/layout'
import "primereact/resources/themes/lara-light-indigo/theme.css";       
import "primereact/resources/primereact.min.css";                           
import 'primeicons/primeicons.css';
        
export default function App({ Component, pageProps }) {
  return(
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}
