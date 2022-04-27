import Link from "next/link"
import React from "react"
import { useRouter } from "next/router"




function Navbar() {
  let {pathname} = useRouter()
  const [active,setActive] = React.useState('')

  let paths = [{p:'/',name:'About'},{p:'/Resume',name:'Resume'},{p:'/Projects',name:'Projects'}]
  React.useEffect(()=>{
     (pathname === 'Projects') ? setActive('Projects'):
     (pathname === '/Resume') ? setActive('Resume'):
     setActive('About')
  },[])
  

  return (
    <div className="flex justify-between m-6 " id='main'>
        <div className="font-bold text-lg md:text-2xl text-transparent bg-clip-text bg-gradient-to-br from-violet-700 to-red-500 cursor-default">{active}
         <div className="w-[98%] mx-[auto] md:h-[3px] bg-gradient-to-br from-violet-700 to-red-500"></div></div>
        <div className="flex mt-[1.5px]">
            {paths.map(e=>{
                return (active !== e.name && <Link key={e.name} href={e.p +'#main'}><a><span className="mx-4 text-sm  md:text-lg font-semibold " onClick={()=>setActive(e.name)}> {e.name} </span> </a></Link>)
            })}
        </div>

    </div>
  )
}

export default Navbar
