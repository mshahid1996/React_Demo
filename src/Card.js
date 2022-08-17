import React from "react";


function Card(props) {
    return (
        
        <>
            <div className="card">
                <img src={props.imgsrc} alt="" />
                <div className="card-info">
                    <h1 className="title"> Card</h1>
                    <p className="para">the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. It has survived not only five c</p>
                    <button>Watch</button>
                </div>
            </div>
        </>
    );
}
export default Card;