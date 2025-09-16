import React from "react";
import bg from "../assets/images/bg.png";

export default function ErrorPage({ code = "404", title, message, buttonHref = "/home.html" }) {
    const bgStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh"
    };

    return (
        <main className="d-flex align-items-center justify-content-center" style={bgStyle}>
            <div className="row w-100 justify-content-center">
                <div className="col-11 col-sm-10 col-md-8 col-lg-5 col-xl-4">
                    <div className="card border-0 shadow rounded-3 p-0">
                        <div className="card-body pb-4 text-center">
                            <h1 className="h3 fw-semibold mb-0 p-4">{code} - {title}</h1>
                            <p className="small mb-4">{message}</p>
                            <a href={buttonHref}
                                className="btn btn-primary btn-md w-100 border-0"
                                style={{ backgroundColor: "rgba(56, 182, 255, 1)" }}>
                                Back to Home
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
