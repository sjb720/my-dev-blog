import Head from "next/head";
import { Inter } from "next/font/google";
import Blog from '../articles/7.2.2024.mdx'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Dev Blog</title>
        <meta name="description" content="Stephen Joseph, dev blog." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{padding:24}}>
        <Blog/>
      </div>
    </>
  );
}