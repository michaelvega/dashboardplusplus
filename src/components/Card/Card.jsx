import React, {useState, useEffect, useCallback} from "react";
import "./Card.css";
import "react-circular-progressbar/dist/styles.css";
import {AnimateSharedLayout, motion} from "framer-motion";
import {UilTimes} from "@iconscout/react-unicons";
import axios from "axios";


// parent Card
const dataC = [];

function copyToClipboard(text) {
  window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

// Compact Card
function CompactCard({ param, setExpanded }) {
  //const Url = param.url;
  const Png = param.png;
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={() => { setExpanded();}} //code for multiple functions
    >
      <div className="radialBar">
        <Png style={{
          height: 48,
          width: 48,
        }} />
      </div>
      <div className="detail">
        <span>{param.title}</span>
        <span>{param.value}</span>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {

  //const {register, handleSubmit} = useForm();
  //const Url = param.url;

  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('Output');
  console.log(param.url)

  async function handleSubmit (event) {
    event.preventDefault();
    setInputText('');
    setOutputText("Uploading...")
    console.log(inputText);
    //setApiText(await getAPI(Url, inputText));
    //setOutputText('fe');

    let config = {
      method: 'post',
      url: param.url,
      headers: {
        'Content-Type': 'text/plain'
      },
      data: inputText
    };

    const response = await axios(config)
        .then(function (response) {
          dataC.unshift(JSON.stringify(response.data));
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    //const responseData = await JSON.stringify(response.data)

    //dataC.unshift(String(responseData));
    setOutputText(String(dataC[0]));

    if (typeof dataC[0] === "undefined") {
      setOutputText("Error - Please try again");
    }
    else {
      setOutputText(String(dataC[0]));
      copyToClipboard(String(dataC[0]));
    }
  }

  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={() => { setExpanded(); dataC.length = 0}} />
      </div>
        <span>{param.title}</span>
      <form className="apiForm"  name="form1" id="form1" onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Input Data Here"
            className= "apiInput"
            value={inputText}
            onChange={event => setInputText(event.target.value)}
        />
        <input
            type="text"
            className="apiPlaceHolder"
            value={outputText}
            onChange={event => setOutputText(event.target.value)}
            readOnly
        />
        <input type="submit" className="apiSubmit"/>
      </form>

    </motion.div>
  );
}

export default Card;
