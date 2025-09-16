import React from "react";
import ErrorPage from "../components/ErrorPage";

export default function NotFound() {
  return (
    <ErrorPage
      code="404"
      title="Page not found"
      message="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
      buttonHref="/"
    />
  );
}
