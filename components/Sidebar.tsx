import { FcDownload } from 'react-icons/fc'
import { BsFacebook, BsGithub, BsLinkedin, BsTelephoneFill } from 'react-icons/bs'
import { IoLocationSharp } from 'react-icons/io5'
import { SiMaildotru,SiGmail } from 'react-icons/si'
import { AiOutlineSetting } from 'react-icons/ai'

const Social = [
    { icon: BsFacebook, color: 'hover:text-blue-400' },
    { icon: BsLinkedin, color: 'hover:text-blue-500' },
    { icon: BsGithub, color: 'hover:text-gray-400' },
]

const gradStyle = (color: string) => {
    let st = `text-transparent bg-clip-text font-bold bg-gradient-to-br from-violet-700 to-${color}-500`
    return st
}
const buttonS = 'rounded-full w-[90%] p-2 my-2 flex justify-center cursor-pointer bg-gradient-to-br from-violet-700 to-red-500 hover:scale-[1.05] transition-all ease-in-out duration-300'


const Sidebar = () => {
    return (
        <div className=" relative flex items-center flex-col text-center overflow-hidden font-semibold">
            <div className='absolute left-[-55px] md:left-[-120px] md:top-[-10px] -z-[0]'>

                {/*<img src='/logo.svg' className=' w-20 h-20 md:w-24 md:h-24 absolute top-[10px] left-[60px] md:left-[150px] md:top-[10px] '  />
                        <img src='/style.svg' className=' w-40 h-40 md:w-[350px] md:h-[350px] '  />
*/}
                <AiOutlineSetting className=' text-3xl md:text-5xl lg:text-3xl text-gray-300  absolute top-[10px] left-[60px] md:left-[140px] md:top-[30px] ' />
            </div>


            <div className="mt-[-30px] mb-6 w-44 h-44 sm:h-52 sm:w-52  md:h-60 md:w-60 lg:w-52 lg:h-52 ">
                <img src='/pr.svg' className='rounded-[50%] w-full ' />
            </div>
            <h3 className=" text-lg sm:text-xl md:text-2xl lg:text-xl  m-2">
                <span className={`${gradStyle('red')} text-xl sm:text-2xl md:text-3xl lg:text-2xl`}> Abdelrhman </span>
                Samy Saad
            </h3>
            <div className="flex flex-col w-full p-2 text-sm md:text-lg lg:text-base text ">
                <div className="rounded-full bg-[#252637] w-full p-2 mb-2 z-10 ">
                    <span className={`${gradStyle('red')}  font-extrabold`}>
                        <span className="text-xl">I
                        </span> <span className='mr-2'> am a </span>
                    </span>
                    Web Developer</div>
                <div className="flex justify-around my-4">
                    {
                        Social.map((S, i) => (
                            <S.icon key={i + 'so'} className={`text-xl sm:text-2xl md:text-3xl lg:text-2xl  hover:scale-110 transition-all ease-in-out duration-300 ${S.color}`} />)
                        )
                    }
                </div>
            </div>
            <div className="flex flex-col py-6 bg-[#252637] w-full ">
                <div className="mt-2">
                    <IoLocationSharp className=" inline mt-[-4px]" /> <span className="mt-4">Damietta,Egypt</span>
                </div>
                <div className="mt-2">
                    <SiMaildotru className=" inline mt-[-4px] mr-2" />
                    mov2two2001@gmail.com
                </div>
                <div className="mt-2 ml-[-30px]">
                    <BsTelephoneFill className=" inline mt-[-30px] mr-4" />
                    <div className=" inline-block text-md">
                        <div>
                            <span className={gradStyle('red')}>+2</span>01094876067  /
                        </div>
                        <div>
                            <span className={gradStyle('red')}>+2</span>01032839914
                        </div>

                    </div>
                </div>



            </div>
            <div className='flex flex-col w-full p-2 text-sm md:text-lg items-center '>
                <div className={buttonS}>
                    <FcDownload className="m-[3px]" />
                    Download Resume
                </div>
                <div className={buttonS} onClick={()=>window.open('mailto:mov2two2001@gmail.com')}>
                    <SiGmail className="m-[3px] text-blue-500" />
                    Contact me
                </div>
            </div>

        </div>
    )
}

export default Sidebar
