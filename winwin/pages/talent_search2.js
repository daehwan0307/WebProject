import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretRight,
    faX,faArrowLeft
    } from "@fortawesome/free-solid-svg-icons";
import UserCard from "../components/UserCard";



const talent_search2 =()=>
{
    return(
        <div className="sm:container  p-4">
         <div className='flex mb-4 space-x-4'>
                <Link href="/talent_search" passHref><FontAwesomeIcon icon={faArrowLeft} size="2x" color="black"/></Link>
                <p1 className="font-bold pt-1">재능검색</p1>
         </div> <hr/>
         
         <div className="m-2">
            <Link href="/talent_search2" passHref>
             <div className="rounded-lg bg-gray-300 text-center ">
                재 검색하기
            </div ></Link>
         </div>
         <hr/>
         <UserCard/>
         <UserCard/>
        </div>

    );
}
export default talent_search2;