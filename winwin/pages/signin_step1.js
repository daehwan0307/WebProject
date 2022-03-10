import Image from 'next/image'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faCaretRight
} from "@fortawesome/free-solid-svg-icons";

const  signin_step1 = ()=>{

    return(
  <div className="p-8 ">
    <div className="flex ">
      <h1 className="font-bold text-2xl">SNS 회원가입</h1> 
      <div className="flex-grow"></div>
      <FontAwesomeIcon icon={faCaretRight} size="2x" color="black"/>
      <FontAwesomeIcon icon={faCaretRight} size="2x" color="gray"/>
      <FontAwesomeIcon icon={faCaretRight} size="2x" color="gray"/>
    </div>
    
    <h1 className="pt-4 font-bold">1.약관동의</h1>
  
    <h4 className="pt-2">윈윈을 이용하기 위해 이용약관에 동의해 주세요</h4> 



    <div className="flex">
      <Image   src="/kakaolink_btn_medium.png" width={40} height={40}/>
      <p><a className="pl-4 font-bold">카카오 계정으로 가입</a></p>
    </div>
    <div className='pt-2'>
      <input type="checkbox"></input>
      <label>전체동의</label>
      <br></br>
    </div>
    <div className='pt-2'>
      <input type="checkbox"></input>
      <label>만 14세 이상입니다(필수)</label
      ><br></br>
    </div>
    <div>
      <input type="checkbox"></input>
      <label>이용약관 동의(필수)</label>
      <br></br>
    </div>
    <div>  
      <input type="checkbox"></input>
      <label>개인정보취급방침 동의(필수)</label>
      <br></br>
    </div>
    
    <div className='pt-2'>
      <Link href="/signin_step2" passHref><center><button ><h1 className='font-bold'>다음</h1></button></center></Link>
    </div>
  </div>
    );
    
}

export default signin_step1;