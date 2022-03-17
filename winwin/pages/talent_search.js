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
        </div>

    );
}
export default talent_search;