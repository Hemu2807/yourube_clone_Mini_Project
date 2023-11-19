import React, { useEffect } from "react";
import "./_Videos.css";
import thumbnail from "../IMG/yo.webp";
import v1 from "./VData";

const Videos = ({ props }) => {
  // console.log(props)
  const [v1Data, setv1Data] = React.useState(props);
  // React.useEffect(()=>{
  //   setv1Data(v1);
  // })

  return (
    <div className="main-video-container">
      {v1Data.map((elem) => {
        const {
          id,
          title,
          thumbnailUrl,
          duration,
          uploadTime,
          author,
          videoUrl,
          subscriber,
          views,
        } = elem;
        return (
          <>
            <div className="video-card-div" key={id}>
              <div className="img-div">
                <p className="time">{duration}</p>
                <img src={thumbnailUrl || elem.thumbnail.url} alt={title} />
              </div>
              <div className="card-info-div">
                <img src={thumbnailUrl || elem.thumbnail.url} alt="" />
                <div className="title-div">
                  <h1>{title}</h1>
                  <h2>{author || elem.channelName}</h2>
                  <div className="views_and-time">
                    <p>{views} • {uploadTime || elem.uploadedAt}</p>
                    {/* <p>{uploadTime || elem.uploadedAt}</p> */}
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Videos;
