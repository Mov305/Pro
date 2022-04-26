import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <div className=' px-5 font-Nunito grid grid-cols-12 gap-3 lg:gap-5  lg:px-20 my-12 text-white '>
      <div className=' col-span-12 lg:col-span-3 bg-[#1D1D28] rounded-[40px] shadow-2xl shadow-[#12131A]  '>
           <Sidebar/>
      </div>
      <div className=" col-span-12 lg:col-span-9 bg-[#1D1D28] rounded-[40px] shadow-2xl shadow-[#12131A] flex flex-col ">
        <Navbar/>
      <Component {...pageProps} />

      </div>
   </div>
  )

}

export default MyApp
