import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretRight,
    faX,faArrowLeft
    } from "@fortawesome/free-solid-svg-icons";



const talent_search =()=>
{
    return(
        <div className="sm:container  p-4">
         <div className='flex mb-4 space-x-4'>
                <Link href="/main" passHref><FontAwesomeIcon icon={faArrowLeft} size="2x" color="black"/></Link>
                <p1 className="font-bold pt-1">재능검색</p1>
         </div> <hr/>
         <div>
             <input type="text" placeholder="가르칠 재능" className=""></input>
         </div>
         <div className="mt-2">
             <input type="text" placeholder="배울 재능" className=""></input>
         </div>
         <div className="pt-3">
            <input type="checkbox"></input>
            <label>온라인 포함</label>
         </div>
         <div className="mt-2">
            <Link href="/talent_search2" passHref>
             <div className="rounded-lg bg-gray-300 text-center ">
                검색하기
            </div ></Link>
         </div>
        </div>

    );
}
export default talent_search;