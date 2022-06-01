import React, { useState, useRef } from "react";
import ProfileImage from "../../imgs/blueat.png";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { v4 as uuidv4 } from 'uuid';
import {storage} from '../../Firebase';
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  console.log("Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude);
}



const PostShare = () => {
  const [image, setImage] = useState(null);
  const [imagefb, setImagefb] = useState(null);
  const [url, setUrl] = useState("");
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
      setImagefb(event.target.files[0])

    }
  };
  
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${uuidv4()}`).put(imagefb);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(uuidv4())
          .getDownloadURL()
          .then(url => {
            
            console.log(url);
            setUrl(url)
          });
      }
    );
    setImage(null); 
  };

  console.log(imagefb);
  return (
      <div className="PostShareWrapper">
        <h3 className="PostShareHeader">Upload Files</h3>
    <div className="PostShare">
      <img src={ProfileImage} alt="Profile Picture"/>
      <div>
        <input type="text" placeholder="Text or..." />
        <div className="postOptions">
          <div className="option photooption" style={{ color: "var(--photo)"  }}
          onClick={()=>imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className= "option videooption" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>{" "}
          <div className="option locationoption" style={{ color: "var(--location)" }} onClick={getLocation}>
            <UilLocationPoint />
            Location
          </div>{" "}
          <div className="option scheduleoption" style={{ color: "var(--schedule)" }}>
            <UilSchedule />
            Shedule
          </div>
          <button onClick={handleUpload} className="button ps-button">Upload</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
      {image && (

        <div className="previewImage">
          <UilTimes onClick={()=>setImage(null)}/>
          <img src={image.image} alt="" />
        </div>

      )}


      </div>
    </div>
      </div>

  );
};

export default PostShare;