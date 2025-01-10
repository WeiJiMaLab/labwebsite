import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import Layout, { siteTitle } from '../components/layout';
import Welcome from '../components/welcome';
import About from '../components/about';
import CommunityComponent from '../components/community';
import PubsComponent from '../components/publicationcomponent';
import News from '../components/news';
import Contact from '../components/contact';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Welcome/>
      <About/>
      <PubsComponent/>
      <News/>
      <CommunityComponent/>
      <Contact/>
    </Layout>
  );
}