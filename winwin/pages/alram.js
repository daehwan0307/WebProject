import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretRight,
    faX,faArrowLeft
    } from "@fortawesome/free-solid-svg-icons";
import AlramResult from "../components/AlramResult";


    const alram =()=>{
    return(
        <div className="sm:container p-4">
         <div className='flex mb-4 space-x-4'>
                <Link href="/main" passHref><FontAwesomeIcon icon={faArrowLeft} size="2x" color="black"/></Link>
                <p1 className="font-bold pt-1">알림</p1>
            </div>
            <hr/>
            <AlramResult/>
        </div>
    );
}

export default alram;