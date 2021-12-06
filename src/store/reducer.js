import { DELETE_ITEM, SET_ITEMS, SET_SELECTED_ITEM } from "../store/actions"

const Reducer = (state, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(
          (item) => item.id != action.payload
        ),
      };
    case SET_SELECTED_ITEM:
      return {
        ...state,
        selectedItem: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
