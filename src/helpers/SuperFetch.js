import axios from "axios";

const SuperFetch = async (url, method = "GET", data = null, headers = {}) => {
  try {
    // Get the token from localStorage
    const token = localStorage.getItem("authToken");

    // Default headers
    const defaultHeaders = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token ? `Bearer ${token}` : undefined, // Include token if available
    };

    // Merge default headers with custom headers
    const mergedHeaders = { ...defaultHeaders, ...headers };

    // Make the API call
    const response = await axios({
      url,
      method,
      data,
      headers: mergedHeaders,
    });

    return {
      status: response.status,
      data: response.data,
      error: false,
    };
  } catch (error) {
    return {
      status: error.response?.status || 500,
      data: error.response?.data || "Something went wrong",
      error: true,
    };
  }
};

export default SuperFetch;
