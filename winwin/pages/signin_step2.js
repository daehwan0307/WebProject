import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faCaretRight
} from "@fortawesome/free-solid-svg-icons";

const signin_step2 = ()=>{
    return(
        <div className="p-8 ">
        <div className="flex ">
          <h1 className="font-bold text-2xl">SNS 회원가입</h1> 
          <div className="flex-grow"></div>
          <FontAwesomeIcon icon={faCaretRight} size="2x" color="black"/>
          <FontAwesomeIcon icon={faCaretRight} size="2x" color="black"/>
          <FontAwesomeIcon icon={faCaretRight} size="2x" color="gray"/>
        </div>

        <p className="font-sans ">이메일</p>
        <input type="text"  placeholder="이메일을 입력해주세요"/><br></br>
        <p className="font-sans ">닉네임</p>
        <input type="text"  placeholder="ex)홍길동"/><br></br>
        <p className="font-sans ">생년월일</p>
        <input type="text"  placeholder="ex)19950715"/><br></br>
        <Link href="/signin_step3" passHref><center><button><a>다음</a></button></center></Link>
        </div>

    );

}

export default signin_step2;