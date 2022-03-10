
import Image from 'next/image'
import KakaoLoginButton from "../components/KakaoLoginButton";
import Link from "next/link";
import EmailSigninModal from '../components/EmailSigninModal';

export default function Home() {
  return (

        <div className="sm:container font-bold">
            <center><Image   src="/favicon.ico" width={200} height={300}/></center>
            <center><KakaoLoginButton/></center>
          <div className='justify-center flex ml-16 mr-16 '> 
            <EmailSigninModal/>
            <div className="flex-grow"></div>
            <Link href="/signin" passHref>이메일로 로그인</Link>
          </div>
            <Link href="/main" passHref><center>main page(제작중)</center></Link>



        </div>
  )
} 
