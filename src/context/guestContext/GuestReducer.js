import { TOOGLE_FILTER } from "../types";

export default (state , action) => {
    switch (action.type) {

    case TOOGLE_FILTER:
        return { ...state,
            filterGuest : !state.filterGuest}

    default:
        return state
    }
}
