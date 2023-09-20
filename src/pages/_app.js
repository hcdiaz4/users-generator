import Credits from "@/app/component/credits/credits";
import Header from "@/app/component/header/header";
import '@/app/styles/main.scss';

function MyApp({ Component, pageProps }) {

    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Credits />
        </>
    );
}

export default MyApp;