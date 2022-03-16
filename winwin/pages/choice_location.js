import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faCaretRight,
faX,faArrowLeft
} from "@fortawesome/free-solid-svg-icons";

const choice_location =()=>
{
    return(
        <div className="sm:container p-4">   
    
            <div className='flex mb-4 space-x-4'>
                <Link href="/main" passHref><FontAwesomeIcon icon={faArrowLeft} size="2x" color="black"/></Link>
                <input type="text"  className="w-full" placeholder="내 지역 이름(동,읍,면)으로 검색"/>
            </div>
            <hr/>
            <div>
                <p className="font-bold mt-2 mb-2">지역 선택을 하시면 같은 지역내 재능교환러들과 재능을 교환할 수 있어요!</p>
            </div>
            <Link href="/choice_location2" passHref><div className="rounded-lg bg-blue-400 text-center text-white">
                지역선택 하러가기
            </div ></Link>
            <div className="rounded-lg bg-gray-300 text-center mt-4">
                온라인 교환만 할래요!
            </div>
        </div>
        
    );
}
export default choice_location;