import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faCaretRight
} from "@fortawesome/free-solid-svg-icons";
const signin_step3 = ()=>{
    
    return(
        
        <div className="p-8 ">
        <div className="flex ">
          <h1 className="font-bold text-2xl">SNS 회원가입 완료</h1> 
          <div className="flex-grow"></div>
          <FontAwesomeIcon icon={faCaretRight} size="2x" color="black"/>
          <FontAwesomeIcon icon={faCaretRight} size="2x" color="black"/>
          <FontAwesomeIcon icon={faCaretRight} size="2x" color="black"/>
        </div>

        <br/>
        <h4>홍길동님 회원가입이 완료되었습니다.</h4>
        <br/>
        <h4>지금부터 윈윈을 통해 재능교환을 진행하실 수 있습니다.</h4>
        <Link href="/" passHref><center><button><a>로그인</a></button></center></Link>
        </div>
    );
}
export default signin_step3;