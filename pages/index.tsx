import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { datatype } from '@/data/datatype'
import { GetStaticProps } from 'next'
import { client } from '@/lib/client'
import Link from 'next/link'
import Header from '@/components/Header'
import home from '@/styles/Home.css'
import { Button } from '@mui/material'

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
      <Header/>
      <section className={home.content}>
        <p className={home.about}>
          こちらは私が勉強したものを簡単にまとめたものです。<br/>
        </p>
        <div className={home.menucontent}>
          <h2 className={home.menutxt}>MENU</h2>
          <ol className={home.menulist}>
            {data.map((item:datatype,index:number)=>(
              <li key={index} className={home.alist}>
                <Button variant='text'>
                  <Link href={`/doc/${item.id}`} className={home.linktxt}>
                    {item.title}
                  </Link>
                </Button>
              </li>
            ))}
          </ol>
        </div>
        
      </section>
    </>
  )
}
