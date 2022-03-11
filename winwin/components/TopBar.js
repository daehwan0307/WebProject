import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify, faBell, faLocation, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";



const TopBar =()=>{
return (
    <header className="top-bar h-20 flex sm:container">
    <div >
   
      <nav>
        <ul className="flex ">
          <li><FontAwesomeIcon icon={faLocation} size="2x" color="black"/></li>
          <h1 className="font-bold">청주시</h1>
          
          <div className="flex-grow"></div>
          <li><FontAwesomeIcon icon={faMagnifyingGlass} size="2x" color="black"/></li>
          <li><FontAwesomeIcon icon={faAlignJustify} size="2x" color="black"/></li>
          <li><FontAwesomeIcon icon={faBell} size="2x" color="black"/></li>
        </ul>
      </nav>
      <hr></hr>

    </div>
  </header>

);
}

export default TopBar;