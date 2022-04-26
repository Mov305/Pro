import type { GetServerSidePropsContext, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'



const Home: NextPage = ({services}:any) => {
  console.log(services)
  return (
    <div className="">
      <Head>
        <title>Abdelrhman || About</title>
        <link rel="icon" href="/pr.svg" />
      </Head>
       <div>this is mov's app</div>
    </div>
  )
}

export default Home

export const getStaticProps = async (context:GetStaticProps) =>{

  const res = await fetch('http://Localhost:3000/api/data')
  const Data = await res.json()



  return {
    props:{services:Data}
}
            
}

