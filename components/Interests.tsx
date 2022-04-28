import {GiChessKnight,GiMusicalScore,GiPaintBrush} from 'react-icons/gi'
import {DiCode, DiVim} from 'react-icons/di'
import {IoGameControllerOutline,IoExtensionPuzzleOutline} from 'react-icons/io5'
import {MdOutlinePets} from 'react-icons/md'

const Iarray = [{Icon:GiChessKnight,name:'Chess'},
{Icon:GiMusicalScore,name:'Music'},
{Icon:DiCode,name:'Coding'},
{Icon:IoGameControllerOutline,name:'Gaming'},
{Icon:IoExtensionPuzzleOutline,name:'Puzzles'},
{Icon:MdOutlinePets,name:'Animals'},
{Icon:GiPaintBrush,name:'Art'}]

function Interests() {
  return (
    <div className='flex flex-wrap'>
       {Iarray.map(E=>{
           return(<div key={E.name+'interest'} className='flex text-lg mr-5 my-3 border-gradient p-1' > 
           <E.Icon className='text-3xl mr-1'/><h2>{E.name}</h2>
           </div>)
       })}
    </div>
  )
}

export default Interests