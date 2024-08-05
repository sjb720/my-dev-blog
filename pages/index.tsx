import Head from "next/head";
import { Share_Tech_Mono } from "next/font/google";
import ArticleFeed from "@/components/ArticleFeed";
import ArticleButton from "@/components/ArticleButton";
import ARTICLES from "@/articles";


const shareTechMono = Share_Tech_Mono({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Who asked?</title>
        <meta name="description" content="Stephen Joseph, dev blog. Nobody asked but i'll be posting all my coding adventures here." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className={shareTechMono.className} style={{ height: 200, borderRadius: 8, background: 'black', display: 'flex', flexFlow:'column', alignItems: 'center', justifyContent: 'center', fontSize: 30 }}>
        <div>
        // Who asked?
        </div>
        <div style={{opacity: 0.3}}>Stephen's coding adventures</div>
      </div>
      <ArticleFeed>
        {Object.keys(ARTICLES).map(key => {
          const article = ARTICLES[key];
          return <ArticleButton href={`article/${key}`} date={article.date} img="" name={article.title}/>
        })}
      </ArticleFeed>
    </>
  );
}