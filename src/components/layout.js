import Navbar from "./nav";
import Footer from "./footer";
import Head from "next/head";

function Layout({children}) {
    return(<>
    <Head>
        <title>Call For Junior Execom</title>
        <link rel="icon" href="/logo.png" sizes="any" />
    </Head>
        <div className="bg-gradient-to-b from-[#1F316F] to-[#1A4870] min-h-screen text-white font-montserrat flex flex-col">
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </div>
        </>
    );
}

export default Layout;