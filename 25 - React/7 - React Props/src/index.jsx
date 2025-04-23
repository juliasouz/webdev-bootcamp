import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Card(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

root.render(
  <>
    <Header />
    <div className="container">
      <div className="cards-container">
        <Card
          name="Beyonce"
          img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
          tel="+123 456 789"
          email="b@beyonce.com"
        />
        <Card
          name="Jack Bauer"
          img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
          tel="+7387384587"
          email="jack@nowhere.com"
        />
      </div>
    </div>
    <Footer />
  </>
);