import Axios from "../axios-setup";

export const DELETE_ITEM = "DELETE_ITEM";
export const SET_SELECTED_ITEM = "SET_SELECTED_ITEM";
export const SET_ITEMS = "SET_ITEMS";

export const setViewTask = (value) => ({ type: SET_ITEMS, payload: value });
export const setDeleteTask = (value) => ({
  type: DELETE_ITEM,
  payload: value,
});
export const setSelectedItem = (value) => ({
  type: SET_SELECTED_ITEM,
  payload: value,
});

export const GetList = async () => {
  let response = await Axios.get("/animal/list/");
  return setViewTask(response.data.list);
};

export const Todelete = async (id) => {
  await Axios.post("/animal/delete/" + id);
  return setDeleteTask(id);
};

export const ToAddNewTask = async (data) => {
  let response = await Axios.post("/animal/create/", data, {
    "Access-Control-Allow-Origin": "http://localhost:3000",
  });
  console.log(response);
  // return setAddTask(response.data);
};

export const GetItemDetails = async (id) => {
  let response = await Axios.get("animal/id/" + id);
  console.log(response.data);
  return setSelectedItem(response.data.animal);
};
