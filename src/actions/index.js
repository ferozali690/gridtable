import { fetch_Users } from "./Types";

import UsersDataApi from "../apis/usersDataApi";

export const fetch_UsersData = () => {
  return async function (dispatch) {
    const responseData = await UsersDataApi.get(
      "/api/?page=3&results=10&seed=abc"
    );
    console.log("response", responseData);
    dispatch({ type: fetch_Users, payload: responseData.data.results });
  };
};
