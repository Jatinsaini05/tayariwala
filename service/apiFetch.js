import { useStoreLogin } from "@/store/login";
import { fetchWithOutToken } from "@/utils/fetchApi";
import { fetchWithOutToken_old, fetchWithToken_old } from "../utils/fetchApi";
import fetchWithToken from "../utils/fetchApi";

export const login = async (data) => {
  const response = await fetchWithOutToken_old("/api/auth/signin", data, {
    method: "POST",
  });
  if (response.error) {
    console.error("Error fetching area by ID:", response.error);
    return { error: response.error, details: response?.details };
  }
  return response;
};

export const user = async (data) => {
  const response = await fetchWithOutToken_old("/api/public/user", data, {
    method: "POST",
  });
  if (response.error) {
    console.error("Error fetching area by ID:", response.error);
    return { error: response.error, details: response?.details };
  }
  return response;
};

export const sendotp = async (data) => {
  const response = await fetchWithOutToken_old(
    "/api/public/user/sent-reset-password-otp",
    data,
    {
      method: "POST",
    }
  );
  if (response.error) {
    console.error("Error fetching area by ID:", response.error);
    return { error: response.error, details: response?.details };
  }
  return response;
};

export const resetpass = async (data) => {
  const response = await fetchWithOutToken_old(
    "/api/public/user/reset-password",
    data,
    {
      method: "POST",
    }
  );
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

export const getWebsiteData = async (id, params = {}) => {
  const response = await fetchWithOutToken(`/api/s/website/${id}/data`, params);
  if (response.error) {
    console.error("Error fetching booking type:", response.error);
    return { error: response.error, details: response?.details };
  }
  return response;
};

export const getPageData = async (url, params = {}) => {
  const response = await fetchWithOutToken(`/api/s/frontPage/${url}`, params);
  if (response.error) {
    console.error("Error fetching booking type:", response.error);
    return { error: response.error, details: response?.details };
  }
  return response;
};

export const getCourseProgramByUri = async (url, params = {}) => {
  const response = await fetchWithOutToken(
    `/api/s/courseprogram-by-uri/${url}`,
    params
  );
  if (response.error) {
    console.error("Error fetching booking type:", response.error);
    return { error: response.error, details: response?.details };
  }
  // console.log(23)
  // console.log(response)
  return response;
};

export const getWebberListItem = async (params = {}) => {
  const response = await fetchWithOutToken(`/api/s/webberlistitem`, params);
  if (response.error) {
    console.error("Error fetching booking type:", response.error);
    return { error: response.error, details: response?.details };
  }
  return response;
};

export const getTestimonial = async (params = {}) => {
  const response = await fetchWithOutToken(`/api/s/testimonial`, params);
  if (response.error) {
    console.error("Error fetching booking type:", response.error);
    return { error: response.error, details: response?.details };
  }
  return response;
};

export const getCourses = async (params = {}) => {
  const response = await fetchWithOutToken_old(
    `https://maheshpratap.institute.org.in/api/public/data/courses`,
    params
  );
  if (response.error) {
    console.error("Error fetching booking type:", response.error);
    return { error: response.error, details: response?.details };
  }
  return response;
};

export const getProductData = async (params = {}) => {
  const response = await fetchWithOutToken(`/api/s/product`, params);
  if (response.error) {
    console.error("Error fetching booking type:", response.error);
    return { error: response.error, details: response?.details };
  }
  return response;
};

export const getUserData = async (params = {}) => {
  const response = await fetchWithToken(`/api/s/student/me`, params);
  if (response.error) {
    console.error("Error fetching booking type:", response.error);
    return { error: response.error, details: response?.details };
  }
  return response;
};

export const getUserProductData = async (params = {}) => {
  const response = await fetchWithToken_old(`/api/core/user/product`, params);
  if (response.error) {
    console.error("Error fetching booking type:", response.error);
    return { error: response.error, details: response?.details };
  }
  return response;
};

export const getUserOrderData = async (params = {}) => {
  const response = await fetchWithToken_old(`/api/cmn/order`, params);
  if (response.error) {
    console.error("Error fetching booking type:", response.error);
    return { error: response.error, details: response?.details };
  }
  return response;
};

export const getUserLiveClassData = async (userId) => {
  const response = await fetchWithToken_old(
    `/api/student-manager/student/${userId}/live-classes/v2`
  );
  if (response.error) {
    console.error("Error fetching booking type:", response.error);
    return { error: response.error, details: response?.details };
  }
  return response;
};

export const getUserOfflineScheduleData = async (params = {}, batch) => {
  console.log(batch);
  const response = await fetchWithToken_old(
    `/api/calendar/event/batch/${batch}`,
    params
  );
  if (response.error) {
    console.error("Error fetching booking type:", response.error);
    return { error: response.error, details: response?.details };
  }
  return response;
};

export const getUserTestSeriesData = async () => {
  const response = await fetchWithToken_old(
    `/api/testment/userproduct/testseries`
  );
  if (response.error) {
    console.error("Error fetching booking type:", response.error);
    return { error: response.error, details: response?.details };
  }
  return response;
};

export const getUserQuizData = async (params = {}, qid) => {
  const response = await fetchWithToken(
    `/api/s/quiz-group/${qid}/quiz`,
    params
  );
  if (response.error) {
    console.error("Error fetching booking type:", response.error);
    return { error: response.error, details: response?.details };
  }
  return response;
};

export const getUserQuizGroup = async (params = {}) => {
  const response = await fetchWithToken(`/api/s/quiz-group`, params);
  if (response.error) {
    console.error("Error fetching booking type:", response.error);
    return { error: response.error, details: response?.details };
  }
  return response;
};

export const getUserBookData = async (userId) => {
  const response = await fetchWithToken_old(
    `/api/book-store/user/${userId}/books`
  );
  if (response.error) {
    console.error("Error fetching booking type:", response.error);
    return { error: response.error, details: response?.details };
  }
  return response;
};

export const getUserAccess = async (pId) => {
  const response = await fetchWithToken_old(
    `/api/cmn/product/${pId}?checkAccess=true`
  );
  if (response.error) {
    console.error("Error fetching booking type:", response.error);
    return { error: response.error, details: response?.details };
  }
  return response;
};

export const getSubjectWiseData = async (params = {}) => {
  const response = await fetchWithToken_old(
    `/api/course-creator/course-curriculum/subject-wise-data/v2`,
    params
  );
  if (response.error) {
    console.error("Error fetching booking type:", response.error);
    return { error: response.error, details: response?.details };
  }
  return response;
};

export const getLessonsData = async (params = {}, ids = "") => {
  const response = await fetchWithToken_old(
    `/api/course-creator/lessons/${ids}/v2`,
    params
  );
  if (response.error) {
    console.error("Error fetching booking type:", response.error);
    return { error: response.error, details: response?.details };
  }
  return response;
};

export const getLessonContent = async (params = {}, ids = "") => {
  const response = await fetchWithToken_old(
    `/api/course-creator/lesson-content/${ids}`,
    params
  );
  if (response.error) {
    console.error("Error fetching booking type:", response.error);
    return { error: response.error, details: response?.details };
  }
  return response;
};

export const getPaymentNodes = async (params = {}) => {
  const response = await fetchWithToken_old(
    `/api/cmn/order/payment-nodes`,
    params
  );
  if (response.error) {
    console.error("Error fetching booking type:", response.error);
    return { error: response.error, details: response?.details };
  }
  return response;
};

export const fileUrlUpload = async (data) => {
  const response = await fetchWithToken_old("/api/public/file/upload", data, {
    method: "POST",
  });
  if (response.error) {
    console.error("Error in sent otp:", response?.details?.message);
    return { response };
  } else {
    return response;
  }
};

export const addDiscount = async (id = "", data) => {
  const response = await fetchWithToken_old(
    `/api/cmn/order/${id}/add-discount`,
    data,
    {
      method: "POST",
    }
  );
  if (response.error) {
    console.error("Error in sent otp:", response?.details?.message);
    return { response };
  } else {
    return response;
  }
};

export const orderUpdate = async (id = "", data) => {
  const response = await fetchWithToken_old(
    `/api/cmn/update-order/${id}`,
    data,
    {
      method: "POST",
    }
  );
  if (response.error) {
    console.error("Error in sent otp:", response?.details?.message);
    return { response };
  } else {
    return response;
  }
};

export const testment = async (id = "", params = {}) => {
  const response = await fetchWithToken_old(
    `/api/testment/useronline/${id}/tests`,
    params
  );
  if (response.error) {
    console.error("Error in sent otp:", response?.details?.message);
    return { response };
  } else {
    return response;
  }
};

export const getQuiz = async (id = "") => {
  const response = await fetchWithToken_old(
    `/api/student/quiz/quizwindow/data/${id}`
  );
  if (response.error) {
    console.error("Error in sent otp:", response?.details?.message);
    return { response };
  } else {
    return response;
  }
};

export const quizSubmit = async (userId = "", quizId = "", data) => {
  const response = await fetchWithToken_old(
    `/api/student/quiz/quizwindow/${userId}/submit/${quizId}`,
    data,
    {
      method: "PUT",
    }
  );
  if (response.error) {
    console.error("Error in sent otp:", response?.details?.message);
    return { response };
  } else {
    return response;
  }
};

export const getParticipants = async (params = {}) => {
  const response = await fetchWithToken_old(
    `/api/ims/quiz/participants`,
    params
  );
  if (response.error) {
    console.error("Error in fetchinig", response?.details?.message);
    return { response };
  } else {
    return response;
  }
};

export const getQuizReoprt = async (params = {}) => {
  const response = await fetchWithToken_old(`/api/student/quiz/report`, params);
  if (response.error) {
    console.error("Error in fetchinig", response?.details?.message);
    return { response };
  } else {
    return response;
  }
};

export const placeOrder = async (data) => {
  const response = await fetchWithToken_old(
    `/api/cmn/order/place-order`,
    data,
    {
      method: "POST",
    }
  );
  if (response.error) {
    console.error("Error in placing order", response?.details?.message);
    return { response };
  } else {
    return response;
  }
};

export const sendEnquiry = async (data) => {
  const response = await fetchWithToken_old(`/api/enquiry/enquiry`, data, {
    method: "POST",
  });
  if (response.error) {
    console.error("Error in placing order", response?.details?.message);
    return { response };
  } else {
    return response;
  }
};

export const search = async (params = {}) => {
  const response = await fetchWithOutToken_old(
    `/api/public/data/search`,
    params
  );
  if (response.error) {
    console.error("Error in fetchinig", response?.details?.message);
    return { response };
  } else {
    return response;
  }
};

export const getInitialData = async (path, params = {}) => {
  const response = await fetchWithOutToken(
    `/api/s/dynamic-page/${path}`,
    params
  );
  if (response.error) {
    console.error("Error fetching initial Data:", response.error);
    return { error: response.error, details: response?.details };
  }
  return response;
};

export const getblogPostByUri = async (bloguri) => {
  const response = await fetchWithOutToken(`/api/s/blogpost-by-uri/${bloguri}`);
  if (response.error) {
    console.error("Error in fetchinig", response?.details?.message);
    return { response };
  } else {
    return response;
  }
};

export const getblogPost = async () => {
  const response = await fetchWithOutToken(`/api/s/blogpost`);
  if (response.error) {
    console.error("Error in fetchinig", response?.details?.message);
    return { response };
  } else {
    return response;
  }
};

export const getblogPostcategory = async (slug) => {
  const response = await fetchWithOutToken(
    `/api/s/blogpost/blogpostcategory-slug/${slug}`
  );
  if (response.error) {
    console.error("Error in fetchinig", response?.details?.message);
    return { response };
  } else {
    return response;
  }
};

export const getTestProductData = async (path, params = {}) => {
  const response = await fetchWithOutToken_old(
    `/api/public/data/test/product/${path}`,
    params
  );
  if (response.error) {
    console.error("Error fetching initial Data:", response.error);
    return { error: response.error, details: response?.details };
  }
  return response;
};

export const getProductBatches = async (params = {}) => {
  const response = await fetchWithToken_old(
    `/api/public/data/product-batches`,
    params
  );
  if (response.error) {
    console.error("Error in fetchinig", response?.details?.message);
    return { response };
  } else {
    return response;
  }
};
