import type { NextPage } from 'next'
import Head from 'next/head'
import { RiDoubleQuotesL, RiDoubleQuotesR, RiQuestionMark } from 'react-icons/ri'
import { data } from '../data'



const Home: NextPage = () => {
  return (
    <div className=" mx-6 ">
      <Head>
        <title>Abdelrhman || About</title>
        <link rel="icon" href="/pr.svg" />
      </Head>
      <div>
        <h1 className='flex text-xl font-bold'>Abdelrhman <RiQuestionMark className='text-lg mt-[5px] rounded-full bg-gradient-to-br from-violet-700 to-red-500 p-[2px] ml-2 ' /></h1>
        <p className=' leading-6'>
          <RiDoubleQuotesL className=' inline text-cyan-100 mr-4' />
          Hi, I am a freelance Web Developer with +3 years of experience, a UI Designer and  Mechanical Engineering student (3rd year), specializing in Web applications. <br />
          I am Egyptian, born in a city at the cost called Damietta. I joined Damietta University in 2019. <br /> I love music, cooking, typing, and coding.
          So <span className='underline cursor-pointer underline-offset-2 text-cyan-100' onClick={() => window.open('mailto:mov2two2001@gmail.com')}>Hire me</span> if you wanna work together on your next project.
          <span className='text-xl mt-[-10px] text-cyan-100 ml-3'>.....</span> <RiDoubleQuotesR className='inline text-cyan-100 ml-[-4px]' />
        </p>
      </div>
      <h1 className='text-center font-bold text-lg md:text-2xl text-transparent bg-clip-text bg-gradient-to-br from-violet-700 to-red-500 cursor-default my-3'>What I Do</h1>
      <div className='flex flex-wrap w-full ' >
        {data.map((e, i) => {
          return (
            <div key={i + 'serviece'} className=' rounded-xl bg-gradient-to-br p-[1.5px] from-violet-700 to-red-500 m-2 flex-grow flex shadow-lg shadow-slate-800'>
              <div className='flex md:w-[200px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] flex-grow   bg-[#252637] rounded-xl h-full px-2' >


                <div className='w-full'>
                  <div className='flex relative '>
                    
                    <h1 className='text-lg md:text-xl lg:text-lg font-bold mt-[revert]' >
                      {e.title}</h1>
                      <e.icon className=' m-2 text-2xl sm:text-3xl  self-center absolute right-0' />
                  </div>
                  <p dangerouslySetInnerHTML={{ __html: e.about }} className='my-1 indent-8 text-sm md:text-base ' />
                </div>
              </div>

            </div>)
        })}
      </div>
    </div>
  )
}

export default Home


