import axios from "axios";
import showNotification from "../Components/Notification/Notification";

const baseURL = "https://fakestoreapi.com";

export async function GET(params) {
  return axios.get(`${baseURL}/${params}`).catch(function (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    console.log(error.config);

    showNotification({
      type: "error",
      message: "Something went wrong, reload the page!",
    });
  });
}
