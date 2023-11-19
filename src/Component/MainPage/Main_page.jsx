import React from 'react'
import './_MainPage.css'
import Videos from '../Videos/Videos'
import CategroiesBar from '../Categories/CategroiesBar'
import v1 from "../Videos/VData";
function Main_page() {
  return (
    <>
        <div className="mainPage-container">
           <Videos props={v1} />
        </div>
    </>
  )
}

export default Main_page