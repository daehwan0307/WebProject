import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretRight,
    faX,faArrowLeft
    } from "@fortawesome/free-solid-svg-icons";

const write =()=>
{
    return(
   
        <div className="sm:container  p-4">
            <div className='flex mb-4 space-x-4'>
               <Link href="/main" passHref><FontAwesomeIcon icon={faArrowLeft} size="2x" color="black"/></Link>
               <p1 className="font-bold pt-1">재능교환 글쓰기 </p1>
            </div> 
            <hr/>
            <div className="p-4">
                <input type="text" placeholder="제목" className="p-2 w-full"></input>
                <hr></hr>
                <p className="mt-4">가르쳐 줄 재능 선택</p>
                <hr></hr>
                <p className="mt-4">배우고 싶은 재능 선택</p>
                <hr></hr>
            <div className="mt-4 space-x-2">    
                <input type="checkbox"></input>
                <label>온/오프라인</label>
                <input type="checkbox"></input>
                <label>온라인만</label>
                <input type="checkbox"></input>
                <label>온프라인만</label>
                <hr/>
            </div>
            <input type="text" placeholder="재능교환 할 대상에게 하고싶은말을 작성해주세요. " className="w-full mt-4"></input>
            </div>
           
       </div>
     
    );
}
export default write;