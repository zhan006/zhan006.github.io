import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
export const THRESHOLD = 725;
const NavBar = () => {
  let [largeSize, setLargeSize] = useState<Boolean>(() => {
    return window.innerWidth > THRESHOLD;
  });
  let [dropDown, setDropDown] = useState<Boolean>(false);
  const onResize = () => {
    if (window.innerWidth < THRESHOLD) setLargeSize(false);
    else setLargeSize(true);
  };
  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-item">
          <h2 className="logo">
            <Link to="/">Zhan Wang</Link>
          </h2>
        </div>

        {largeSize ? (
          <div className="nav-item menu-container">
            <ul className="menu">
              <li>
                <Link to="/Blog">Blog</Link>
              </li>
              <li
                className="drop-down"
                onMouseOver={() => setDropDown(true)}
                onMouseLeave={() => {
                  setDropDown(false);
                }}
              >
                App
                <div
                  className="drop-down-item"
                  style={{ height: dropDown ? "150px" : "0px" }}
                >
                  <ul>
                    <li>
                      <Link to="bill-spliter">Bill Spliter</Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link to="flappy-bird">Flappy bird</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
            </ul>
          </div>
        ) : (
          <SideBar />
        )}
      </div>
    </div>
  );
};
export default NavBar;
