import { datatype } from "@/data/datatype";
import { client } from "@/lib/client";
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
    }
  }
}

const Doc:NextPage<Props> = ({data}) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="discription" content={`${data.title}のページです`}/>
      </Head>
      <div>
        <h1>{data.title}</h1>
        <div dangerouslySetInnerHTML={{__html:`${data.detail}`}}></div>
        <div>
          <Link href={"/"}>
            ホームへ！
          </Link>
        </div>
      </div>
    </>
  );
}

export default Doc;