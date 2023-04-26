import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';


const ImgComponent = () => (
  <Image
    src="/images/bologna.jpg" // Route of the image file
    height={260} // Desired size with correct aspect ratio
    width={200} // Desired size with correct aspect ratio
    alt="Zo Ahmed"
  />
);

export default function FirstPost() {
    return (
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">← Back to home</Link>
        </h2>
      </Layout>
    );
  }