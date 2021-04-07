import React, { useReducer } from "react";
import GuestContext from "./GuestContext";
import GuestReducer from "./GuestReducer";
import { TOOGLE_FILTER } from "../types";

const GuestState = (props) => {
  const initialState = {
    filterGuest: false,
    guests: [
      {
        id: 1,
        name: "Jake",
        phone: "999 888 7777",
        dietary: "Vegan",
        isConfirmed: true,
      },
      {
        id: 2,
        name: "Pavi",
        phone: "999 333 5555",
        dietary: "Non-Veg",
        isConfirmed: false,
      },
      {
        id: 3,
        name: "Doe",
        phone: "999 222 1111",
        dietary: "Pascatarian",
        isConfirmed: false,
      },
    ],
  };
  const [state, dispatch] = useReducer(GuestReducer, initialState);
  //action
  const toogleFilterAction = () => {
    dispatch({ type: TOOGLE_FILTER });
  };
  console.log(state.filterGuest);
  return (
    <GuestContext.Provider
    //pass the value
      value={{
        guests: state.guests,
        filterGuest: state.filterGuest,
        toogleFilterAction,
      }}
    >
      {props.children}
    </GuestContext.Provider>
  );
};

export default GuestState;
