import { FunctionComponent } from "react"
import Bar from "../components/Bar"

if (typeof window !== 'undefined') {
    dragElement(document.getElementById("PLdrag"));
    dragElement(document.getElementById("FWdrag"));
    dragElement(document.getElementById("Ldrag"));
    dragElement(document.getElementById("DBdrag"));
    dragElement(document.getElementById("Tdrag"));


}

function dragElement(elmnt: any) {

    var pos1 = 0,pos3 = 0;
    if(typeof window !== 'undefined'){
        elmnt.onmousedown = dragMouseDown;
    }else{
        console.log('err')
        console.log(elmnt.onmousedown,typeof window)
    }
    
    function dragMouseDown(e: any) {
        e = e || window.event;
        e?.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e: any) {

        e = e || window.event;
        e.preventDefault();

        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;

        pos3 = e.clientX;

        // set the element's new position:
        if(elmnt.offsetLeft < 1 ){
            elmnt.style.left =(elmnt.clientWidth - elmnt.parentNode.clientWidth + elmnt.offsetLeft > 0 ) ? elmnt.offsetLeft - pos1 + "px" : elmnt.offsetLeft + 0.001*pos1 + "px";
        }else{
            elmnt.style.left =elmnt.offsetLeft - Math.abs(pos1) + "px";
        }
        
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}





const Carousel: FunctionComponent<{ type: string, items: any }> = ({ type, items }) => {
    const mArray = items.filter((e: any) => e.type === type);
    const cWidth = mArray.length;
    const tname = (type === 'PL') ? 'Programing Languages' : (type === 'FW') ? 'FrameWorks' : (type === 'L') ? "Libiraries" : (type === 'DB') ? 'Data bases' : 'Tools'
    return (
        <div className="mb-5">
            <h1 className="text-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-violet-700 to-red-500 cursor-default">{tname}</h1>
            <div className="my-1 w-full bg-gradient-to-br min-h-[175px] from-violet-700 to-red-500 overflow-x-scroll  overflow-hidden no-scrollbar lg:overflow-hidden rounded-xl  shadow-md relative ">
                <div id={type + 'drag'} style={{ width: cWidth * 116 + 'px' }} className={` drag bg-[#1D1D28] flex m-[1px] w-[${cWidth * 116 + 'px'}] min-w-full  rounded-xl absolute`}>
                    {mArray && mArray.map((e: any, i: number) => <Bar data={e} key={i + e.type + 'skills'} />)}
                </div>
            </div>
        </div>

    )
}

export default Carousel

