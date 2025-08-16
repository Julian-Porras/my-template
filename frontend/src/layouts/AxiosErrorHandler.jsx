import { useEffect, useRef } from "react";

export function AxiosErrorHandler() {
  useEffect(() => {
    const handleSessionExpired = (e) => {
      console.warn("Session expired. Redirecting to login.");
    };

    const handleUnauthorized = (e) => {
      console.warn("Session expired or unauthorized access.");
    };

    const handleForbidden = (e) => {
      console.warn("You do not have permission to access this resource.");
    };

    const handleServerError = (e) => {
      console.error("A server error occurred.");
    };

    window.addEventListener("unauthorized", handleUnauthorized);
    window.addEventListener("forbidden", handleForbidden);
    window.addEventListener("sessionExpired", handleSessionExpired);
    window.addEventListener("serverError", handleServerError);

    return () => {
      window.removeEventListener("unauthorized", handleUnauthorized);
      window.removeEventListener("forbidden", handleForbidden);
      window.removeEventListener("sessionExpired", handleSessionExpired);
      window.removeEventListener("serverError", handleServerError);
    };
  }, []);

  return null;
}
