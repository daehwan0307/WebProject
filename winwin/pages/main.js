import TopBar from "../components/TopBar";
import UserCard from "../components/UserCard";
import BomttomBar from "../components/BottomBar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const main =()=>{
    return(

        <>
        <TopBar/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <div className="float-right p-4">
        <Link href="/write" passHref><FontAwesomeIcon icon={faPlusCircle} size="3x" color="black"/></Link>
        </div>
        <BomttomBar/>
        </>
    );
}

export default main;