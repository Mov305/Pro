import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { TiArrowSortedDown } from 'react-icons/ti'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className=' px-5 font-Nunito grid grid-cols-12 gap-5 xl:gap-9 md:px-28  xl:px-10 py-10 text-white h-screen '>
      <div className=' col-span-12 xl:col-span-3 bg-[#1D1D28] rounded-[40px] shadow-lg shadow-[#12131A] min-h-[91vh]  '>
        <Sidebar />
      </div>
      <div className=" col-span-12 xl:col-span-9 bg-[#1D1D28] rounded-[40px] shadow-lg shadow-[#12131A] flex flex-col relative pb-20 xl:pb-1 " >
        <Navbar />
        <Component {...pageProps} />
        <div className='rounded-[50%] bg-gradient-to-br from-violet-700 to-red-500 w-[60px] h-[60px] absolute bottom-[-30px] border-2 border-transparent
         self-center text-4xl hover:scale-110 transform ease-out duration-200 ' >
          <div className='rounded-[50%] w-full h-full flex justify-center items-center bg-[#252637]   '>
          <TiArrowSortedDown />
          </div>
          
        </div>
      </div>
    </div>
  )

}

export default MyApp
