import { ALL_SLOTS_FAIL,
    ALL_SLOTS_REQUEST,
    ALL_SLOTS_SUCCESS,
    CLEAR_ERRORS,
} from "../constants/areaSlots";


export const allSlotsReducer = (state = { slot: {} }, action) => {
    switch (action.type) {
      case ALL_SLOTS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ALL_SLOTS_SUCCESS:
        return {
          ...state,
          loading: false,
          slot: action.payload,
        };
  
      case ALL_SLOTS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };