import React from "react";
import { GuestCounter } from "../guests/GuestCounter";
import { GuestFilter } from "../guests/GuestFilter";
import { GuestForm } from "../guests/GuestForm";
import Guests from "../guests/Guests";
import GuestSearch from "../guests/GuestSearch";

export const Home = () => {
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
