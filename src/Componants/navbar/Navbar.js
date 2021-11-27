import React, { useState } from 'react';
import "./Navbar.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AddIcon from '@material-ui/icons/Add';
import NavbarItem from "../NavbarItem/NavbarItem";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import profil from "../../assets/images/profil.jpg";
import {BrowserRouter, Link,Switch,Route} from "react-router-dom";

import MenuIcon from '@material-ui/icons/Menu';
import DisplayTable from "../DisplayTable";

function Navbar() {


  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = e => {
    setUsername(e.target.value);
  };

  const submitHandler = async e => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    // console.log(profileJson);

    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
    console.log(repoJson);

    if (profileJson) {
      setData(profileJson);
      setRepositories(repoJson);
    }
  };

const btnstyle = {
  color : "white", width :"5rem",height:"1.9rem",marginLeft:".8rem",marginTop:".5rem",padding:"0"
}

const icons = {
  width:"2.3rem"
}


  return (
<BrowserRouter>
    <>

    <div className="Navbar">
      <MenuIcon className="toggle_icon" />
      <div className="Navbar_items_container">
        <GitHubIcon className="Navbar__GithubIcon" />
        <div className="large_menu_container">
          <input type="text" placeholder="Search or jump to..." className="header_search_input"  value={username}
              onChange={onChangeHandler} />

           <button
            className="ui primary button"
            type="submit"
            onClick={submitHandler}
            style={btnstyle}
          >
            
            Search
          </button>

          {/* <Link to="/hello">Home</Link> */}

    {/* <Switch>

          <Route exact path="/hello">    <DisplayTable data={data} repositories={repositories} />  
      </Route>
      </Switch> */}

          {/* <img src="https://github.githubassets.com/images/search-key-slash.svg" className="github_svg" alt=""/> */}
          <div className="NavbarItem__container">
            <NavbarItem title="Pull requests" />
            <NavbarItem title="Issues" />
            <NavbarItem title="Marketplace" />
            <NavbarItem title="Explore" />
          </div>
        </div>
      </div>
      <div className="Navbar_icons_container">
        <NotificationsNoneIcon className="Right_Icon" />
        <div className="large_menu_container">
          <AddIcon className="Right_Icon" />
          <ArrowDropDownIcon className=" ArrowIcon" />
          <img src="https://cdn4.vectorstock.com/i/thumb-large/51/48/cartoon-character-in-glasses-avatar-young-man-vector-33215148.jpg" alt="" className="header_profil" style ={icons} />
          <ArrowDropDownIcon className=" ArrowIcon" style ={icons} />
        </div>
      </div>
    </div>



    <DisplayTable data={data} repositories={repositories} />
 
  </>

  </BrowserRouter>
  )
}

export default Navbar
















// import React from 'react'
// import "./Navbar.css"
// import GitHubIcon from '@material-ui/icons/GitHub';
// import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
// import AddIcon from '@material-ui/icons/Add';
// import NavbarItem from "../NavbarItem/NavbarItem"
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import profil from "../../assets/images/profil.jpg"

// import MenuIcon from '@material-ui/icons/Menu';

// function Navbar() {


  
//   return (
//     <div className="Navbar">
//       <MenuIcon className="toggle_icon" />
//       <div className="Navbar_items_container">
//         <GitHubIcon className="Navbar__GithubIcon" />
//         <div className="large_menu_container">
//           <input type="text" placeholder="Search or jump to..." className="header_search_input" />
//           <img src="https://github.githubassets.com/images/search-key-slash.svg" className="github_svg" alt=""/>
//           <div className="NavbarItem__container">
//             <NavbarItem title="Pull requests" />
//             <NavbarItem title="Issues" />
//             <NavbarItem title="Marketplace" />
//             <NavbarItem title="Explore" />
//           </div>
//         </div>
//       </div>
//       <div className="Navbar_icons_container">
//         <NotificationsNoneIcon className="Right_Icon" />
//         <div className="large_menu_container">
//           <AddIcon className="Right_Icon" />
//           <ArrowDropDownIcon className=" ArrowIcon" />
//           <img src="https://cdn4.vectorstock.com/i/thumb-large/51/48/cartoon-character-in-glasses-avatar-young-man-vector-33215148.jpg" alt="" className="header_profil"/>
//           <ArrowDropDownIcon className=" ArrowIcon" />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar
