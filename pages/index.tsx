import Head from "next/head";
import { Inter } from "next/font/google";
import Markdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [article, setArticle] = useState("");

  // Loads a markdown article
  useEffect(() => {
    fetch('/api/article')
    .then(resp => resp.text())
    .then(data => 
      setArticle(data.substring(1, data.length-1).replaceAll("\\r\\n","\n").replaceAll(`\\"`,`"`))
    )
  },[])

  return (
    <>
      <Head>
        <title>Dev Blog</title>
        <meta name="description" content="Stephen Joseph, dev blog." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={inter.className} style={{padding:24}}>
        <Markdown remarkPlugins={[remarkGfm]}>{article}</Markdown>
      </div>
    </>
  );
}