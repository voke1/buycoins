export const API_BASE_URL = "https://localhost:5000";
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

///Account

export const HEALTHCHECK = getApiUrl("/api/Account/HealthCheck");

const urlData = {
  ///Account

  HEALTHCHECK,
};

export default urlData;
