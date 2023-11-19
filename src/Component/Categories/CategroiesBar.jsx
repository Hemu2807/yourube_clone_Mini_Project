import React from "react";
import "./_categroiesar.css";
import data from './catData'


function CategroiesBar() {
  const [activeClass,setActiveClass] = React.useState(0);
  const activeClassHandler = e =>{
    setActiveClass(e);
  }
  return <div className="cate-main-container">
  {
    [...data].map((elem,ind)=>{
      return(
        <>

    <div className={`cat-card ${activeClass == ind?'active':''}`}
     onClick={()=>{activeClassHandler(ind)}}>
    {elem.name}
    </div>
        </>
      )

    })
  }
  </div>;
}

export default CategroiesBar;
