import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBell,faAngleDown,faArrowLeft
    } from "@fortawesome/free-solid-svg-icons";
import BottomBar from '../components/BottomBar';
import ChattingCard from '../components/ChattingCard';
import Image from 'next/image'

const profile_photo =()=>
{
    return(
        <div className="sm:container p-4">
         <div className='flex mb-4 space-x-4'>
                <Link href="/mypage" passHref><FontAwesomeIcon icon={faArrowLeft} size="2x" color="black"/></Link>
                <p1 className="font-bold pt-1">프로필 사진</p1>
         </div> <hr/>
         <center>
         <Image src="/kakaolink_btn_medium.png" width={500} height={500} className=""></Image>
         </center>
        <div>
            <button className='bg-gray-700'> gd</button>
        </div>
        </div>
    );
}
export default profile_photo;