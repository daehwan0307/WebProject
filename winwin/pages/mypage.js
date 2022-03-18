import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBell,faAngleDown
    } from "@fortawesome/free-solid-svg-icons";
import BottomBar from '../components/BottomBar';
import ChattingCard from '../components/ChattingCard';
import Image from 'next/image'

const mypage =()=>
{
    return(

        <div className="sm:container m-4" >
            <div className="flex justify-between ">
                <div className="flex space-x-2">
                    <h1 className="font-bold text-lg ">마이페이지</h1>
                </div>
                <div>
                    <Link href="/alram"><FontAwesomeIcon icon={faBell} size="1.5x" color="black"/></Link>
                </div>
            </div>
        <hr></hr>
        
        <div className='mt-4'>
            <center><Image src="/kakaolink_btn_medium.png" width={60} height={60} className="rounded-3xl"></Image></center>
            <center> <p1 className="font-">홍길동</p1></center>
        </div>

        <div className="mt-4 ">    

                <label>프로필 편집</label>

                <label>내 작성글</label>

                <label>관심목록</label>

        </div>
        <hr/>
        
        <div className='mt-2'>
            <div className='mt-2'>공지사항</div>
            <div className='mt-2'>문의하기</div>
            <div className='mt-2'>나의문의</div>
            <div className='mt-2'>계정관련</div>
        </div>

        <hr className=' mb-2'></hr>
        
        <BottomBar/>
    </div>
    );
}
export default mypage;