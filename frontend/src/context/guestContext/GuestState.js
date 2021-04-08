import React, { useReducer } from "react";
import GuestContext from "./GuestContext";
import GuestReducer from "./GuestReducer";
import { TOOGLE_FILTER, CLEAR_SEARCH, SEARCH_GUEST, ADD_GUEST } from "../types";

const GuestState = (props) => {
  const initialState = {
    filterGuest: false,
    search: null,
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
  //actions
  const addGuests = (guest) => {
    guest.id = Date.now();
    guest.isConfirmed = false;
    dispatch({ type: ADD_GUEST, payload: guest });
  };
  const toogleFilterAction = () => {
    dispatch({ type: TOOGLE_FILTER });
  };
  const searchGuest = (guest) => {
    dispatch({ type: SEARCH_GUEST, payload: guest });
  };
  const clearSearch = () => {
    dispatch({ type: CLEAR_SEARCH });
  };
  console.log(state.filterGuest);
  return (
    <GuestContext.Provider
      //pass the value of init state and action
      value={{
        guests: state.guests,
        filterGuest: state.filterGuest,
        searchGuest,
        clearSearch,
        search: state.search,
        toogleFilterAction,
        addGuests,
      }}
    >
      {props.children}
    </GuestContext.Provider>
  );
};

export default GuestState;
