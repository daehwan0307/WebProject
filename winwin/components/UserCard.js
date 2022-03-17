import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faMusic ,faHeart, faComment } from "@fortawesome/free-solid-svg-icons";

const UserCard =()=>{
    return(
        <div className="sm:container m-4 ">
            <hr></hr>
            <div className="flex justify-between ">
                <div>
                <div><FontAwesomeIcon icon={faMusic} size="2x" color="black"/></div><span className="font-light text-xs">피아노</span>
                </div>
                <div>
                <div><FontAwesomeIcon icon={faBook} size="2x" color="black"/></div><span className="font-light text-xs" >영어</span>
                </div>
              
            </div>
            <div>
                <p1 className="font-bold ">피아노를 가르쳐 드리고 영어를 배우고 싶어요.</p1>
            </div>
            <button className="rounded-md bg-green-300 text-white text-sm font-bold"> 대기 </button>
            <div className="mb-2 flex justify-between ">
                <div className="font-light text-xs">흥덕구 복대동 / 13분전</div>
                <div className="space-x-4"><FontAwesomeIcon icon={faHeart} size="1.5x" color="black"/>5
                <FontAwesomeIcon icon={faComment} size="1.5x" color="black"/>5</div>
    
            </div>

        </div>
       
    );


}
export default UserCard;