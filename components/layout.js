import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/layout.module.css';

import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Menu from './menu';

export const siteTitle = 'Weiji Ma Lab';

export default function Layout({ children, home }) {
  return (
    <>
    <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
    </Head>
    <Menu/>
    <div className={styles.container}>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
        </div>
      )}
    </div>
    </>
  );
}
      