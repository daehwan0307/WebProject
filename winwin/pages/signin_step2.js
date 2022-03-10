import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faCaretRight
} from "@fortawesome/free-solid-svg-icons";

const signin_step2 = ()=>{
    return(
        <div className="p-8 sm:container">
        <div className="flex ">
          <h1 className="font-bold text-2xl">SNS 회원가입</h1> 
          <div className="flex-grow"></div>
          <FontAwesomeIcon icon={faCaretRight} size="2x" color="black"/>
          <FontAwesomeIcon icon={faCaretRight} size="2x" color="black"/>
          <FontAwesomeIcon icon={faCaretRight} size="2x" color="gray"/>
        </div>

        <h1 className="pt-4 font-bold">2.회원정보입력</h1>
  
        <h4 className="pt-2">윈윈 계정으로 사용되는 회원정보를 입력해 주세요</h4> 
        <p className="pt-4" >이메일</p>
        <input type="text"  placeholder="이메일을 입력해주세요"/><br></br>
        <hr></hr>
        <p >닉네임</p>
        <input type="text"  placeholder="ex)홍길동"/><br></br>
        <hr></hr>
        <p >생년월일</p>
        <input type="text"  placeholder="ex)19950715"/><br></br>
        <hr></hr>
        <div className="p-2 ">
        <Link href="/signin_step3" passHref><center><button><h1 className="font-bold">다음</h1></button></center></Link>
        </div>
        </div>

    );

}

export default signin_step2;