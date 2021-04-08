import { TOOGLE_FILTER, CLEAR_SEARCH, SEARCH_GUEST, ADD_GUEST } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_GUEST:
      return {
        ...state, guests: [...state.guests,   action.payload]
      }
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
