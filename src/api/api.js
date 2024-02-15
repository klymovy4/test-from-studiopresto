import axios from "axios";
import showNotification from "../Components/Notification/Notification";

const baseURL = "https://fakestoreapi.com";

export async function GET(params) {
  try {
    const response = await axios.get(`${baseURL}/${params}`);
    return response;
  } catch (error) {
    // Handle error
    showNotification({
      type: "error",
      message: "Something went wrong, reload the page!",
    });
    throw error;
  }
}
