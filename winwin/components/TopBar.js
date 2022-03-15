import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify, faAngleDown, faArrowDown, faBell, faLocation, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


const TopBar =()=>{
return (

    <div className="sm:container p-4" >
        <div className="flex justify-between ">
            <Link href="/choice_location" passHref><div className="flex space-x-2">
              <h1 className="font-bold text-lg ">청주시</h1>
              <FontAwesomeIcon icon={faAngleDown} size="1.5x" color="black"/>
            </div></Link>
            <div className="space-x-6">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="1.5x" color="black"/>
              <FontAwesomeIcon icon={faAlignJustify} size="1.5x" color="black"/>
              <FontAwesomeIcon icon={faBell} size="1.5x" color="black"/>
            </div>
        </div>

      <hr></hr>

    </div>


);
}

export default TopBar;