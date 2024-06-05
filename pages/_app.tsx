import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { Header } from '@/components/common/Header';
<<<<<<< HEAD
import { isHeader } from '@/utils/is-header';
=======
import { isHeader } from '@/utils/IsHeader';
import { isNav } from '@/utils/is-nav';
>>>>>>> develop
import { useRouter } from 'next/router';
import Nav from '@/components/common/nav/nav';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div id="__wrap">
      <main id="__container">
        {!isHeader(router) && <Header />}
        <Component {...pageProps} />
        {!isNav(router) && <Nav />}
      </main>
    </div>
  );
}
