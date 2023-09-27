import axios from "axios";
// ----------------------------------------------------------------------

// const axiosInstance = axios.create();
const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 1000 * 60 * 6,
});

const authToken = JSON.parse(localStorage.getItem("authData"));
if (authToken ? authToken.token : "") {
  axiosInstance.defaults.headers.common = {
    Authorization: `Bearer ${authToken.token || ""}`,
  };
}
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    let resError = "";
    let resErrorCode = 500;
    if (error.response) {
      resErrorCode = error.response.status || 500;
      resError = error.response.data.message || "Something went wrong!";
    } else if (error.request) {
      resError = "Internal server error! Please try again later.";
    } else {
      resError = error.statusText || "Something went wrong!";
    }
    return { errorCode: resErrorCode, message: resError };
  }
);
export default axiosInstance;
