import { useStoreLogin } from "@/store/login";
import { fetchWithOutToken } from "@/utils/fetchApi";

export const login = async (params = {}) => {
  const response = await fetchWithOutToken("/api/auth/signin", params, {
    method: "POST",
  });
  if (response.error) {
    console.error("Error fetching area by ID:", response.error);
    return { error: response.error, details: response?.details };
  }
  return response;
};
export const getAuthToken = async () => {
  const refreshToken = useStoreLogin.getState().refreshToken;
  const params = {
    refreshToken,
  };
  const response = await fetchWithOutToken("/api/auth/getAuthToken", params, {
    method: "POST",
  });
  if (response.error) {
    console.error("Error fetching area by ID:", response.error);
    return { error: response.error, details: response?.details };
  }
  return response;
};

export const getWebsiteData = async (id, params={}) => {

    const response = await fetchWithOutToken(`/api/s/website/${id}/data`, params);
    if (response.error) {
      console.error('Error fetching booking type:', response.error);
      return { error: response.error, details: response?.details };
    }
    return response;
  };
export const getPageData = async (url,params = {}) => {
    const response = await fetchWithOutToken(`/api/s/frontPage/${url}`, params);
    if (response.error) {
      console.error('Error fetching booking type:', response.error);
      return { error: response.error, details: response?.details };
    }
    return response;
  };
  export const getCourseProgramByUri = async (url, params={}) => {
    const response = await fetchWithOutToken(`/api/s/courseprogram-by-uri/${url}`, params);
    if (response.error) {
      console.error('Error fetching booking type:', response.error);
      return { error: response.error, details: response?.details };
    }
    // console.log(23)
    // console.log(response)
    return response;
  }
  export const getWebberListItem = async (params={}) => {
    const response = await fetchWithOutToken(`/api/s/webberlistitem`, params);
    if (response.error) {
      console.error('Error fetching booking type:', response.error);
      return { error: response.error, details: response?.details };
    }
    return response;
  }
  export const getTestimonial = async (params={}) => {
    const response = await fetchWithOutToken(`/api/s/testimonial`, params);
    if (response.error) {
      console.error('Error fetching booking type:', response.error);
      return { error: response.error, details: response?.details };
    }
    return response;
  }


