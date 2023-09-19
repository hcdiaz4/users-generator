import Header from "@/app/component/header/header";
import '@/app/styles/main.scss';

function MyApp({ Component, pageProps }) {

    return (
        <>
            <Header />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;