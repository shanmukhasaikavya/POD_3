import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>home</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
        <img src="veg.jpg" width="200" height="200" ></img>
        <img src="img1.jpg" width="200" height="200" ></img>
        <img src="img2.jpg" width="200" height="200" ></img>
        <img src="img3.jpg" width="200" height="200" ></img>
        <img src="img4.jpg" width="200" height="200" ></img>
        <img src="img5.jpg" width="200" height="200" ></img>
        <img src="img6.jpg" width="200" height="200" ></img>
          
        </Carousel>
        
      </div>
      <img src="image.jpg" width="1400" height="60" ></img>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);