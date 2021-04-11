import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/authContext/AuthContext";
import { GuestCounter } from "../guests/GuestCounter";
import { GuestFilter } from "../guests/GuestFilter";
import { GuestForm } from "../guests/GuestForm";
import Guests from "../guests/Guests";
import GuestSearch from "../guests/GuestSearch";

export const Home = () => {
  const { getUser } = useContext(AuthContext);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="app-container">
      <div className="main">
        <div className="filter">
          <GuestFilter />
          <GuestSearch />
        </div>
        <GuestForm />
        <GuestCounter />
      </div>
      <Guests />
    </div>
  );
};
