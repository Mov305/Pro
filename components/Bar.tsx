import { FunctionComponent } from "react"
import {Ibar} from '../data'

const Bar: FunctionComponent <{ data: Ibar}> =({data: {icon,level,type,name}}) => {
    const num = parseInt(level);
    return (
        <div className="card relative w-[100px] h-[140px] text-center z-10 m-2 mt-[25px]  ">
            <div className="box w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center rounded-b-full ">
                <div className="percent absolute w-[56px] h-[56px] rounded-full z-100 mr-[5px] mt-8">
                    <svg className="">
                        <circle className="w-full h-full fill-[none]  stroke-[3] stroke-[rgba(255,255,255,0.05)] " cx='28' cy='28' r='28'></circle>
                        <circle style={{strokeDashoffset:(260 - 1.6*num)}} className="w-full h-full fill-[none] stroke-violet-700  stroke-[3] " cx='28' cy='28' r='28'></circle>
                    </svg>
                    <div className="number absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <h2 className="text-xl font-bold  md:text-2xl text-transparent bg-clip-text bg-gradient-to-br
                         from-violet-700 to-red-500 cursor-default ml-[7px] mt-[7px]">{level}<span className="text-xs">%</span></h2>
                    </div>
                </div>

            </div>
            <div className="text-sm absolute top-[-20px] z-[1] left-[50%] translate-x-[-50%] ">{name}</div>
        </div>
    )
}

export default Bar