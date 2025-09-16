import React from "react";
import ErrorPage from "../components/ErrorPage";

export default function Forbidden() {
    return (
        <ErrorPage
            code="403"
            title="Forbidden"
            message="You don't have permission to access this page."
            buttonHref="/"
        />
    );
}
