import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify, faBell, faComment, faLocation, faHome, faPerson } from "@fortawesome/free-solid-svg-icons";

const BomttomBar=()=>{
    return(

        <footer className="flex justify-between  sm: container">
            
            <div>
                <div><FontAwesomeIcon icon={faHome} size="2x" color="black"/><br/><span className="font-light text-xs">홈</span></div>
            </div>
                
            <div>
                <Link href="/chatting_list"><div><FontAwesomeIcon icon={faComment} size="2x" color="black"/><br/><span className="font-light text-xs">채팅</span></div></Link>
            </div>

            <div>
            <Link href="/mypage"><div><FontAwesomeIcon icon={faPerson} size="2x" color="black"/><br/><span className="font-light text-xs" >마이페이지</span></div></Link>
            </div>
              
        </footer>

    );
}
export default BomttomBar;