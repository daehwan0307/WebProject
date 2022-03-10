import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import KakaoLoginButton from "../components/KakaoLoginButton";
import Link from "next/link";

export default function Home() {
  return (

        <div className="sm:container font-bold">
            <center><Image   src="/favicon.ico" width={200} height={200}/></center>
            <center><KakaoLoginButton/></center>
          <div>
            <ul className="flex">
              <li><h1 className="text-center" ><Link href="/signin" passHref>이메일로 회원가입</Link></h1></li>
              <li><h1 className="text-center" ><Link href="/signin" passHref>이메일로 로그인</Link></h1></li>  
            </ul>          
          </div>
            <Link href="/main" passHref><center>main page(제작중)</center></Link>



        </div>
  )
} 
