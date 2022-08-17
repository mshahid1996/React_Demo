import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
// const currdate= new Date().toLocaleDateString();
// const currtime =new Date().toLocaleTimeString();
root.render(

  <>
  <App/>
  </>
  // <>
  //   <h1>
  //     First React Web
  //   </h1>
  //   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
  //     sstandard dummy text ever since 
  //     the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five c
  //     enturies, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
  //      the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  //      </p>
  //      <h3>
  //        this is my fav Series
  //      </h3>
  //      <ol>
  //        <li>True Story</li>
  //        <li>Put your head onmy shoulder</li>
  //        <li>Mere Humsafar</li>
  //        <li>PDLMK</li>
  //      </ol>
  //     <h4> {`this is the Date :- ${currdate}`}</h4>
  //      <h4>{`this is the Time :- ${currtime}`}</h4>
  //   {/* / <App /> */}
  // </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
