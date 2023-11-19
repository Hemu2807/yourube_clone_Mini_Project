import React from "react";
import "./_Sidebar.css";
import { Route, Routes, NavLink } from "react-router-dom";
import Main_page from "../MainPage/Main_page";
import Videos from "../Videos/Videos";
import linkData from "./SidebarData";

function Sidebar() {
  const [apiData,setApiData]= React.useState();
  const [activeClass,setActiveClass] = React.useState(0);
  const fd = async()=>{
     const data = await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyCm9QW9xiUbNpnn-9Q-MZkl5Oe489yDGEc');
       const getData = await data.json();
       console.log(getData);
  }
  React.useEffect(()=>{
    fd();
  })

  const activeClassHandler=(e)=>{
    setActiveClass(e)
  }
  return (
    <div className="sidebar-main-container">
      <div className="sidebar-menu">
        {[...linkData].map((elem,ind) => {
          const { title, link, id } = elem;
          return (
            <>
              <NavLink  className={`sidebar-button ${activeClass == ind?'active':""}`}
              onClick={()=>activeClassHandler(ind)} 
              key={ind} to={link}>
                {title}
              </NavLink>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
// export {linkData};
