import React, { Component } from "react";
import "../styles/consumer.css";
import pData from "../MockData/personData.json";
import Processing_Icon from "../img/Processing_Icon.jpg";
import Profile_default_pic from "../img/Profile_default_pic.jpg";
import Return_Icon from "../img/Return_Icon.jpg";
import Shipped_Icon from "../img/Shipped_Icon.jpg";
//Getting Profile Pic
var default_pic = <img src={Profile_default_pic} />;
//Naming pData to get Data from the personData, inside the .map(whatever variable to call the detail of the product, and key value)
export default class ProfileForConsumer extends Component {
  render() {
    return (
      <div className="bg-profile1">
        <div className="square-Box">
          <div className="profile-Box">
            <div className="profile-Img">
              <img src=""/>
            </div>
          </div>
          <div className="profile-Info">
            {pData.ConsumerInfo.map((info, i) => {
              return (
                <div key={i}>
                  <p>
                    Full Name: {info.firstName} {info.lastName} <br />
                    Email: {info.Email} <br />
                    Age: {info.Age} <br />
                    Sex: {info.Sex} <br />
                    Bio: {info.Bio}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="my-Orders">
            <h1>My Orders</h1>
          </div>
          <div className="Customer-Support">
            <div className="Customer-Rows">
              <div className="Customer-Columns1"></div>
              <div className="Customer-Columns2"></div>
              <div className="Customer-Columns3"></div>
            </div>
            <div className="Customer-Rows2">
              <div className="Customer-Columns4"></div>
              <div className="Customer-Columns5"></div>
              <div className="Customer-Columns6"></div>
            </div>
            <div className="Others">
              <div className="Customer-Columns7"></div>
            </div>
          </div>
          <div className="Wishlist"></div>
        </div>
      </div>
    );
  }
}
