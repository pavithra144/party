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

export default (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case GET_GUEST:
      return {
        ...state,
        guests: action.payload,
      };
    case GUESTS_ERROR:
      return {
        ...state,
        guests: [],
      };
    case ADD_GUEST:
      return {
        ...state,
        guests: [...state.guests, action.payload],
      };

    case REMOVE_GUEST:
      return {
        ...state,
        guests: state.guests.filter((guest) => guest._id !== action.payload), //checking if guests id(from initial state) is not equal to action.payload(user clicked guest)
      };

    case UPDATE_GUEST:
      return {
        ...state,
        guests: state.guests.map((guest) =>
          guest._id === action.payload._id ? action.payload : guest
        ),
      };
    case EDIT_GUEST:
      return {
        ...state,
        editableGuestState: action.payload,
      };
    case CLEAR_GUEST:
      return {
        ...state,
        editableGuestState: null,
      };
    case SEARCH_GUEST:
      const reg = new RegExp(`${action.payload}`, "gi");
      return {
        ...state,
        search: state.guests.filter((guest) => guest.name.match(reg)),
      };

    case CLEAR_SEARCH:
      return { search: null };

    case TOOGLE_FILTER:
      return { ...state, filterGuest: !state.filterGuest };

    default:
      return state;
  }
};
