import React from "react";
import Videos from "../../Videos/Videos";
import { data } from "./v2";


const Shorts = () => {
    console.log("shorts");
 console.log(data[0].uploadedAt);
    
  return (
      <Videos props={data}/>
    // <h1>shorts</h1>
  );
};

export default Shorts;
