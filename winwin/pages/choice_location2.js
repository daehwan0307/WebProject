import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretRight,
    faX,faArrowLeft
    } from "@fortawesome/free-solid-svg-icons";
import LocationSearchResult from "../components/LocationSearchResult";


const choice_location2 =()=>
{
    return(
        <div className="sm:container p-2">
            <div className='flex mb-4 space-x-4'>
                <Link href="/main" passHref><FontAwesomeIcon icon={faArrowLeft} size="2x" color="black"/></Link>
                <input type="text"  className="w-full" placeholder="내 지역 이름(동,읍,면)으로 검색"/>
            </div>
            <hr/>
            <div  className="rounded-lg text-center bg-gray-300 text-white mt-2">
                <button>
                    현재 위치로 찾기
                </button>

            </div>
            <p className="text-gray-500 mt-2">검색결과</p>
            <LocationSearchResult/>
            <LocationSearchResult/>
            <LocationSearchResult/>
        </div>
    );

}
export default choice_location2;