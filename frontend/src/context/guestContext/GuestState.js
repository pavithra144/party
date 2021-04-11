import React, { useReducer } from "react";
import GuestContext from "./GuestContext";
import GuestReducer from "./GuestReducer";
import axios from "axios";
import {
  TOOGLE_FILTER,
  CLEAR_SEARCH,
  SEARCH_GUEST,
  ADD_GUEST,
  REMOVE_GUEST,
  UPDATE_GUEST,
  EDIT_GUEST,
  CLEAR_GUEST,
  GET_GUEST,
  GUESTS_ERROR,
} from "../types";

const GuestState = (props) => {
  const initialState = {
    filterGuest: false,
    search: null,
    editableGuestState: null,
    guests: [],
  };
  const [state, dispatch] = useReducer(GuestReducer, initialState);
  //actions
  const getGuests = async () => {
    const res = await axios.get("/guests");
    try {
      dispatch({ type: GET_GUEST, payload: res.data });
    } catch (error) {
      dispatch({ type: GUESTS_ERROR, payload: error.response.msg });
    }
  };

  const addGuests = async (guest) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/guests", guest, config);
      dispatch({ type: ADD_GUEST, payload: res.data });
    } catch (error) {
      dispatch({ type: GUESTS_ERROR, payload: error.response.msg });
    }
  };

  //removing guest action
  const removeGuest = async (id) => {
    try {
      const res = await axios.delete(`/guests/${id}`);
      dispatch({ type: REMOVE_GUEST, payload: id });
    } catch (error) {
      dispatch({ type: GUESTS_ERROR, payload: error.response.msg });
    }
  };

  //updating guest
  const updateGuest = async (guest) => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.put(`/guests/${guest._id}`, guest, config);
      dispatch({ type: UPDATE_GUEST, payload: res.data });
    } catch (error) {
      dispatch({ type: GUESTS_ERROR, payload: error.response.msg });
    }
  };

  //toggle guest
  const toogleFilterAction = () => {
    dispatch({ type: TOOGLE_FILTER });
  };

  //searchguest
  const searchGuest = (guest) => {
    dispatch({ type: SEARCH_GUEST, payload: guest });
  };
  const clearSearch = () => {
    dispatch({ type: CLEAR_SEARCH });
  };
  const editGuest = (guest) => {
    dispatch({ type: EDIT_GUEST, payload: guest });
  };
  const clearEdit = () => {
    dispatch({ type: CLEAR_GUEST });
  };
  console.log(state.filterGuest);
  return (
    <GuestContext.Provider
      //passing the value of init state and action
      value={{
        guests: state.guests,
        filterGuest: state.filterGuest,
        editableGuestState: state.editableGuestState,
        getGuests,
        searchGuest,
        clearSearch,
        search: state.search,
        toogleFilterAction,
        addGuests,
        removeGuest,
        updateGuest,
        editGuest,
        clearEdit,
      }}
    >
      {props.children}
    </GuestContext.Provider>
  );
};

export default GuestState;
