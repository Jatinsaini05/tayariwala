import { useStoreLogin } from "@/store/login";
const clientBaseUrl = "https://iesmaster.institute.org.in";
const apiBaseUrl = "https://v3.edkt.net";
const fetchWithToken = async (url, data = {}, options = {}) => {
  try {
    const authToken = useStoreLogin.getState().authToken;
    if (!authToken) {
      window.location.href = "/login";
      return { error: "No auth token, redirecting to login." };
    }
    const headers = {
      ...options.headers,
      token: authToken,
      apihost: baseUrl,
    };
    const fetchOptions = {
      ...options,
      headers,
      method: options.method || "GET",
    };
    let newUrl;
    if (
      fetchOptions.method === "POST" ||
      fetchOptions.method === "PUT" ||
      fetchOptions.method === "DELETE"
    ) {
      if (!url.includes("/file/upload")) {
        fetchOptions.body = JSON.stringify(data);
      } else {
        fetchOptions.body = data;
      }

      newUrl = url.startsWith("http") ? url : `${baseUrl}${url}`;
    } else {
      newUrl = url.startsWith("http") ? url : `${baseUrl}${url}`;
      const queryString = new URLSearchParams(data).toString();
      newUrl = `${newUrl}?${queryString}`;
    }

    let response = await fetch(newUrl, fetchOptions);

    if (!response.ok) {
      if (response.status === 403) {
        try {
          await useStoreLogin.getState().getNewAuthToken();
        } catch (error) {
          window.location.href = "/login";
          return { error: "Error fetching new auth token." };
        }
        return await fetchWithToken(url, data, options); // Retry with new token
      } else {
        let errorData;
        try {
          errorData = await response.json();
        } catch (jsonError) {
          errorData = { message: "Failed to parse error response as JSON." };
        }

        console.error("API Error:", {
          status: response.status,
          url: newUrl,
          details: errorData,
        });
        const error = new Error(
          errorData.message || `HTTP error! Status: ${response.status}`
        );
        error.statusCode = response.status;
        throw error;
      }
    }

    return await response.json(); // Return the response in JSON format
  } catch (error) {
    console.error("Fetch failed:", {
      message: error.message,
      stack: error.stack,
      url,
    });
    throw error;
  }
};

export const fetchWithOutToken = async (url, data = {}, options = {}) => {
  debugger;
  try {
    const headers = {
      ...options.headers,
      apihost: clientBaseUrl,
    };
    const fetchOptions = {
      ...options,
      headers,
      method: options.method || "GET",
    };

    if (
      fetchOptions.method === "POST" ||
      fetchOptions.method === "PUT" ||
      fetchOptions.method === "DELETE"
    ) {
      fetchOptions.body = JSON.stringify(data);
      url = url.startsWith("http") ? url : `${baseUrl}${url}`;
    } else {
      url = url.startsWith("http") ? url : `${apiBaseUrl}${url}`;
      const queryString = new URLSearchParams(data).toString();
      url = `${url}?${queryString}`;
    }
    debugger;
    const response = await fetch(url, fetchOptions);
    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch (jsonError) {
        errorData = { message: "Failed to parse error response as JSON." };
      }

      console.error("API Error:", {
        status: response.status,
        url: newUrl,
        details: errorData,
      });

      return {
        error: `HTTP error! status: ${response.status}`,
        details: errorData,
      };
    }
    return await response.json(); // Return the response in JSON format
  } catch (error) {
    console.error("Fetch failed:", {
      message: error.message,
      stack: error.stack,
      url,
    });
    return {
      error: "Fetch failed due to an unexpected error.",
      details: error.message,
    };
  }
};

export default fetchWithToken;
