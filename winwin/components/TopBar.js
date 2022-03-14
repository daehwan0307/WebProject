import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify, faBell, faLocation, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";



const TopBar =()=>{
return (

    <div className="sm:container" >
        <div className="flex justify-between ">
          <div className="flex space-x-2">
          <FontAwesomeIcon icon={faLocation} size="2x" color="black"/>
          <h1 className="font-bold text ">청주시</h1>
          </div>
          <div className="space-x-2">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" color="black"/>
          <FontAwesomeIcon icon={faAlignJustify} size="2x" color="black"/>
          <FontAwesomeIcon icon={faBell} size="2x" color="black"/>
          </div>
        </div>

      <hr></hr>

    </div>


);
}

export default TopBar;