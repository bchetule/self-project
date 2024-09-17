import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faWrench, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'; 

function Sidebar(){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // const toggleSidebar = () => {
    //     setIsSidebarOpen(!isSidebarOpen);
    // }

    // const openNav = () => {
    //     document.getElementById("mySidenav").style.width = "250px";
    //   }


    const openNav = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }
    
     const closeNav = () => {
        setIsSidebarOpen(false);
     }

    return(
    <div>
        <span className='hamburger-icon' onClick={openNav}> &#9776;</span>

        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <a href="#clear" className="closebtn" onClick={closeNav}>&times;</a>
            <a href="#home" >
            <FontAwesomeIcon icon={faHome} /> Home
            </a>
            <a href="#services">
            <FontAwesomeIcon icon={faWrench} /> Services
            </a>
            <a href="#clients">
            <FontAwesomeIcon icon={faUser} /> Clients
            </a>
            <a href="#contact">
            <FontAwesomeIcon icon={faEnvelope} /> Contact
            </a>
            <a>
                Log out
            </a>
        </div>
    </div>
    )
};

export default Sidebar;