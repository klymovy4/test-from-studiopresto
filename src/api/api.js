import axios from "axios";

const baseURL = "https://fakestoreapi.com";

export async function GET(params) {
  try {
    return axios.get(`${baseURL}/${params}`);
  } catch (error) {
    console.log(error);
  }
}
