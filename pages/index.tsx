import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { datatype } from '@/data/datatype'
import { GetStaticProps } from 'next'
import { client } from '@/lib/client'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
type Props={
  data:datatype[];
}
export const getStaticProps:GetStaticProps=async()=>{
  const data=await client.get({endpoint:'std-tech'});
  return {
    props:{
      data:data.contents,
    }
  }
}
export default function Home({data}:Props) {
  return (
    <>
      <Head>
        <title>技術勉強まとめ(座学的なやつ)</title>
        <meta name="description" content="私が技術の勉強をまとめたやつです" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <p>
          こちらは私が勉強したものを簡単にまとめたものです。<br/>
        </p>
        <h2>MENU</h2>
        <ol>
          {data.map((item:datatype,index:number)=>(
            <li key={index}>
              <Link href={`/doc/${item.id}`} key={index}>
                {item.title}
              </Link>
            </li>
          ))}
        </ol>
        
      </section>
    </>
  )
}
