import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const fName = "Julia";
const lName = "Souza";
const currentDate = new Date();
const year = currentDate.getFullYear();
const pizzaImg = "https://th.bing.com/th/id/R.8693c5c5f91aa52c0ecfc14e7044fe0b?rik=3%2b1hFItj2tAQDA&riu=http%3a%2f%2ffoodelhi.in%2fwp-content%2fuploads%2f2017%2f08%2fIMG_20170819_162616_187.jpg&ehk=dgetZA0wSUFW8ev0tfuaGi0Zn1aEHSqE%2fKbCX4OUsXk%3d&risl=&pid=ImgRaw&r=0";
const sushiImg = "https://th.bing.com/th/id/OIP.OnrUtC-g06jB02kUkZIBRQHaHa?rs=1&pid=ImgDetMain";
const burgerImg = "https://th.bing.com/th/id/OIP.7qc8sbej8hthhMR82H68FQHaHa?rs=1&pid=ImgDetMain";
root.render(
    <>
        <div>
            <h1 className="heading">My Favorite Food:</h1>
            <ul className="food-list" contentEditable="true">
                <li>Pizza</li>
                <li>Vegetarian Sushi</li>
                <li>Cheeseburgers</li>
            </ul>
        </div>
        <div className="image-container">
            <img className="food-image" src={pizzaImg} alt="Pizza" />
            <img className="food-image" src={sushiImg} alt="Vegetarian Sushi" />
            <img className="food-image" src={burgerImg} alt="Burger" />
        </div>
        <footer>
            <p>Created by {fName + " " + lName}</p>
            <p>Copyright {year}</p>
        </footer>
    </>
);