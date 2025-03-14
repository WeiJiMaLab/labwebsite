import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/layout.module.css';

import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Menu from './menu';

const name = 'Blog Name';
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

{/* <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header> */}
      