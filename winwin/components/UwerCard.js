import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faMusic } from "@fortawesome/free-solid-svg-icons";

const UserCard =()=>{
    return(
        <div className="sm:container mt-2">
            <div className="flex justify-between">
                <div>
                <div><FontAwesomeIcon icon={faMusic} size="2x" color="black"/></div><span className="font-light text-xs">피아노</span>
                </div>
                <div>
                <div><FontAwesomeIcon icon={faBook} size="2x" color="black"/></div><span className="font-light text-xs" >영어</span>
                </div>
              
            </div>
            <div>
                <p1>피아노를 가르쳐 드리고 영어를 배우고 싶어요.</p1>
            </div>
            <button className="rounded-lg">대기</button>
            <div>
                <div>흥덕구 복대동 / 13분전</div>
                <div></div>
            </div>
            <hr/>
        </div>
       
    );


}
export default UserCard;