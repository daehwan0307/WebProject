import TopBar from "../components/TopBar";
import UserCard from "../components/UserCard";
import BomttomBar from "../components/BottomBar";
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
        <div>
        <FontAwesomeIcon icon={faPlusCircle} size="2x" color="black"/>
        </div>
        <BomttomBar/>
        </>
    );
}

export default main;