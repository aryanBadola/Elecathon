import axios from "axios";
import { ALL_SLOTS_FAIL,
    ALL_SLOTS_REQUEST,
    ALL_SLOTS_SUCCESS,
} from "../constants/areaSlots";


export const getAllSlots = (areaName) => async (dispatch) => {
    try {
      dispatch({ type: ALL_SLOTS_REQUEST });
      const { data } = await axios.get(`/api/slot/getSlot/${areaName}`);
  
      dispatch({ type: ALL_SLOTS_SUCCESS, payload: data.slot });
    } catch (error) {
      dispatch({ type: ALL_SLOTS_FAIL, payload: error.response.data.message });
    }
  };