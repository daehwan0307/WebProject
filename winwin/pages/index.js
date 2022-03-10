import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import KakaoLoginButton from "../components/KakaoLoginButton";
import Link from "next/link";

export default function Home() {
  return (

        <div className="sm:container font-bold">
            <center><Image   src="/favicon.ico" width={200} height={300}/></center>
            <center><KakaoLoginButton/></center>
          <div className='justify-center flex ml-16 mr-16 '> 
            <Link className="" href="/signin" passHref>이메일로 회원가입</Link>
            <div className="flex-grow"></div>
            <Link href="/signin" passHref>이메일로 로그인</Link>
          </div>
            <Link href="/main" passHref><center>main page(제작중)</center></Link>



        </div>
  )
} 
