import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBell,faAngleDown
    } from "@fortawesome/free-solid-svg-icons";
import BottomBar from '../components/BottomBar';
import ChattingCard from '../components/ChattingCard';

const chatting_list =()=>
{
    return(

        <div className="sm:container m-4" >
        <div className="flex justify-between ">
          <div className="flex space-x-2">
              <h1 className="font-bold text-lg ">채팅</h1>
            </div>
            <div className="space-x-6">
              <Link href="/alram"><FontAwesomeIcon icon={faBell} size="1.5x" color="black"/></Link>
            </div>
        </div>
        <hr></hr>
        <div className=''></div>
        <ChattingCard/>
        <BottomBar/>
    </div>
    );
}
export default chatting_list;