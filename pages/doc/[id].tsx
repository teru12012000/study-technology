import Header from "@/components/Header";
import { datatype } from "@/data/datatype";
import { client } from "@/lib/client";
import doc from "@/styles/doc.css";
import { IconButton } from "@mui/material";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Head from "next/head";
import Link from "next/link";

type Props={
  data:datatype
}
export const getStaticPaths:GetStaticPaths<Params>=async()=>{
  const data=await client.get({endpoint:"std-tech"});
  const paths:string[]=data.contents.map((content:datatype)=>(`/doc/${content.id}`));
  return {
    paths,
    fallback:false
  }
}
export const getStaticProps:GetStaticProps<Props,Params>=async(context)=>{
  const id=context.params?.id;
  const data=await client.get({
    endpoint:"std-tech",
    contentId:id,
  })
  return {
    props:{
      data:data,
    },
    revalidate: 5
  }
}

const Doc:NextPage<Props> = ({data}) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content="私が技術の勉強をまとめたやつです" />
      </Head>

      <Header
        link={`/kind/${data.kind[0]}`}
      />
      <section>
        <h1 className={doc.titletxt}>{data.title}</h1>
        <div dangerouslySetInnerHTML={{__html:`${data.detail}`}} className={doc.content}></div>
      </section>
    </>
  );
}

export default Doc;