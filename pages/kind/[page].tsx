import Header from "@/components/Header";
import { datatype } from "@/data/datatype";
import { kindPage } from "@/data/kind";
import { client } from "@/lib/client";
import kindstyle from "@/styles/kindmenu.css";
import { Button } from "@mui/material";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
type Props={
  data:datatype[];
}
export const getStaticPaths:GetStaticPaths<Params>=async()=>{
  const paths:string[]=kindPage.map((kind:string)=>(`/kind/${kind}`));
  return {
    paths,
    fallback:false
  }
}
export const getStaticProps:GetStaticProps=async()=>{
  const data=await client.get({endpoint:'std-tech'});
  return {
    props:{
      data:data.contents,
    },
    revalidate: 5,
  }
}
const Page:NextPage<Props> = ({data}) => {
  const {page}=useRouter().query;
  const newData:datatype[]=data.filter((item:datatype)=>item.kind[0]===page)
  return (
    <>
      <Head>
        <title>{page as string}について</title>
        <meta name="description" content={`${page as string}についてまとめたものです`}/>
      </Head>
      <Header
        link="/"
      />
      <main className={kindstyle.content}>
        <h2 className={kindstyle.title}>{page}</h2>
        {newData[0]?(
          <ol>
            {newData.map((item:datatype,index:number)=>(
              <li key={index} >
                <Button variant="text" sx={{textAlign:"left"}}>
                  <Link href={`/doc/${item.id}`} className={kindstyle.linktxt}>
                    {item.title}
                  </Link>
                </Button>
              </li>
            ))}
          </ol>
        ):(
          <div>
            <p className={kindstyle.stillpost}>まだ投稿はありません</p>
          </div>
        )}
      </main>
    </>
  );
}

export default Page;