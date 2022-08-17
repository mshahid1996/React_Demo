import React, { useState } from "react";
import Card from "./Card";

function Content() {
    let timefunction =new Date().toLocaleTimeString();
    const [time , getTime]=useState(timefunction);
    const currTime =()=>{
        getTime(new Date().toLocaleTimeString());
    }
    setInterval(currTime,1000);
    return (
        
        <>
            <div className="current-watch">
                <h3>{time}</h3>
                {/* <button className="btn" onClick={currTime}>Click For Current Time</button> */}

            </div>
            <div className="container">
                <div className="left">
                    <img src="https://picsum.photos/450/300" alt="left_image" />

                    <img src="https://picsum.photos/450/400" alt="left_image" style={{ marginTop: '22px' }} />
                </div>
                <div className="right">
                    <img src="https://picsum.photos/850/500" alt="Randomimage" />
                </div>
            </div>
            <h1 style={{ fontFamily: 'monospace', textAlign: 'center', marginTop: '30px', fontSize: '34px', color: 'rgb(14, 14, 57)' }}>Some Cards Here</h1>
            <div className="cards-container">
                <Card imgsrc="https://picsum.photos/251/250" />
                <Card imgsrc="https://picsum.photos/252/250" />
                <Card imgsrc="https://picsum.photos/249/250" />
                <Card imgsrc="https://picsum.photos/248/250" />
            </div>
        </>
    );
}
export default Content;