import React, { useState, useContext } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import logo from "../assets/logo.png";
import "./css/Navbar.css";
import FaceIcon from "@material-ui/icons/Face";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Button from "@material-ui/core/Button";
import { UserContext } from "../ContextApi";
// import { useStateValue } from "../StateContext";
function Navbar() {
  const [arrowButtonState, arrowButtonStateChanged] = useState(false);
  // const [{ user }] = useStateValue();
  const [user, dispatch] = useContext(UserContext);
  return (
    <div className="navbar d-flex align-items-center justify-content-between text-white bg-theme py-3 px-4">
      <div className="d-flex align-items-center">
        <img className="navbar__image" src={logo} alt="primevide" />
        <p className="navbar__titles__title ms-4 navbar__titles__title--active">
          Home
        </p>
        <p className="navbar__titles__title ms-4">TV Shows</p>
        <p className="navbar__titles__title ms-4">Movies</p>
        <p className="navbar__titles__title ms-4">Kids</p>
      </div>

      <div className="d-flex align-items-center justify-content-evenly">
        <div className="navbar__search d-flex">
          <SearchIcon />
          <form className="navbar__search__form" action="#">
            <input type="text text-white" placeholder="Search..." />
          </form>
        </div>
        <Avatar
          className="navbar__avatar ms-4"
          src={localStorage.getItem("url")}
        />
        <div className="d-flex align-items-center">
          <p class="my-0 ms-2">{localStorage.getItem("name")}</p>

          <Button
            className="navbar__dropdown__menu p-0 rounded-circle border-0"
            onClick={() => {
              arrowButtonStateChanged(!arrowButtonState);
            }}
          >
            <ArrowDropDownIcon
              className="text-white"
              style={{
                transition: "0.3s ease-in-out",
                transform: arrowButtonState ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </Button>
          <div
            className="navbar__user__overlay w-100 position-absolute bottom-0 start-0 end-0"
            style={{ display: arrowButtonState ? "block" : "none" }}
          >
            <div
              className="navbar__user__dropdown__menu position-absolute top-0 d-flex justify-content-between p-3 bg-theme"
              style={{ display: arrowButtonState ? "flex" : "none" }}
            >
              <ul className="list-unstyled border-end">
                <li className="p-2">Your Watchlist</li>
                <li className="p-2">Account Settings</li>
                <li className="p-2">Watch Anywhere</li>
                <li className="p-2">Help</li>
                <li className="p-2">Not {user.displayName}? Sign Out</li>
              </ul>

              <ul className="list-unstyled ms-2">
                <li className="d-flex align-items-center p-2 ">
                  <FaceIcon className="mb-3 me-2 text-white" />
                  <p>Kids</p>
                </li>
                <li className="d-flex align-items-center p-2 ">
                  <Button className="navbar__dropdown__menu">
                    <AddCircleIcon className="mb-3 me-2 text-white" />
                  </Button>
                  <p>Add New</p>
                </li>
                <li className="p-2 ">Manage Profiles</li>
                <li className="p-2 ">Learn more</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
