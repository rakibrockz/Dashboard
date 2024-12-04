import React from "react";
import profile from "/public/Profile.png";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="w-[360px] flex flex-col  p-10 ">
      <div className="images ">
        <div>
          <img src={profile} alt="" />
          <h2 className="text-white font-semibold font-poppins text-3xl">
            Samantha
          </h2>
          <p className="text-white font-poppins text-[17px] opacity-60">
            samantha@email.com
          </p>
        </div>

        <div id="sidebar" className="menu   pt-28  ">
          <ul className="text-gray-400 font-poppins font-semibold text-[25px] flex flex-col  justify-center gap-7 ">
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/">Expenses</NavLink>
            </li>

            <li>
              <NavLink to="/wallets">Wallets</NavLink>
            </li>
            <li>
              <NavLink to="/summary">Summary</NavLink>
            </li>
            <li>
              <NavLink to="/accounts">Accounts</NavLink>
            </li>
            <li>
              <NavLink to="/settings">Settings</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
