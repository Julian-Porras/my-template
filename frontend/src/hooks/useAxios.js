import axios from "axios";

const useAxios = () => {
  const backend = import.meta.env.VITE_BACKEND_URL; // Ensure this is set in your .env file
  const timeout = 1000 * 20;

  const AxiosAuth = axios.create({
    baseURL: backend,
    timeout,
    withCredentials: true,
  });

  // Attach token
  AxiosAuth.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Status code → custom event mapping
  const statusEvents = {
    401: "unauthorized",
    403: "forbidden",
    419: "sessionExpired",
    500: "serverError",
  };

  // Handle errors in one place
  AxiosAuth.interceptors.response.use(
    (response) => response,
    (error) => {
      const status = error.response?.status;
      const eventName = statusEvents[status];

      if (eventName) {
        window.dispatchEvent(
          new CustomEvent(eventName, {
            detail: { error, status },
          })
        );
      }

      return Promise.reject(error);
    }
  );

  const GuestAxios = axios.create({
    baseURL: backend,
    timeout,
    withCredentials: true,
  });

  return { AxiosAuth, GuestAxios };
};

export default useAxios;
