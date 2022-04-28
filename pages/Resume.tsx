import { bar } from "../data"
import Carousel from "../components/Carousel"


const filt:any = []
bar.forEach(e=>{!filt.includes(e.type) && filt.push(e.type)})

function Resume() {

  return (
    <div className="grid grid-cols-5  text-base ">

      <div className="col-span-5 lg:col-span-2 p-6">
        <div>
          <h1 className="font-bold text-xl">Education</h1>
          <div className="flex my-2 border-gradient"><span className="mr-4 w-[80px]">2019 <br /> present</span><p> Full Stack Developer / Udacity / FWD (Scholarship) </p> </div>
          <div className="flex my-2 border-gradient"><span className="mr-4 w-[80px]">2019 <br /> present</span><p> Mechanical engineering student / Damietta University </p> </div>
          <div className="flex my-2 border-gradient"><span className="mr-4 w-[80px]">2016 <br /> 2019</span><p> High School / Damietta Official Langauge School </p> </div>
        </div>
        <div className="my-4">
          <h1 className="font-bold text-xl">Experience</h1>
          <div className="flex my-2 border-gradient"><span className="mr-4 w-[80px]">2019 <br /> present</span><p> Full Stack Developer &UI/Ux Designer / Freelancer  </p> </div>

        </div>

      </div>
      <div className=" col-span-5 lg:col-span-3 p-6   ">
        <h1 className="font-bold text-xl  ">Skills</h1>
         <div className="flex flex-col h-[580px] overflow-x-scroll no-scrollbar  ">

           {filt && filt.map((ec:string,ic:number)=>{
             return <Carousel key={ic+'carousel'} type={ec} items={bar}  />
           })}

           
         </div>

      </div>

    </div>
  )
}

export default Resume