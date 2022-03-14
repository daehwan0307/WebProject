import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify, faBell, faComment, faLocation, faHome, faPerson } from "@fortawesome/free-solid-svg-icons";

const BomttomBar=()=>{
    return(

        <div className="flex justify-between mx-12">
                <div>
                <div><FontAwesomeIcon icon={faHome} size="2x" color="black"/><br/><span className="font-light text-xs">홈</span></div>
                </div>
                
                <div>
                <div><FontAwesomeIcon icon={faComment} size="2x" color="black"/><br/><span className="font-light text-xs">채팅</span></div>
                </div>

                <div>
                <div><FontAwesomeIcon icon={faPerson} size="2x" color="black"/><br/><span className="font-light text-xs" >마이페이지</span></div>
                </div>
              
            </div>

    );
}
export default BomttomBar;