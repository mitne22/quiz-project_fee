import React from "react";

export default function Login() {
    return (
        <main className="bg-[url('src/assets/images/bg.png')] m-0">
            <main className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
                <section className="row w-100 justify-content-center">
                    <div className="col-11 col-sm-10 col-md-8 col-lg-5 col-xl-4">
                        <form
                            id="login-page"
                            className="card border-0 shadow rounded-3 p-4 p-md-5"
                            method="post"
                            action="#"
                        >
                            <h1 className="h3 fw-bold text-center mb-4">Login</h1>

                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    placeholder="Enter your username"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>

                            <div className="row g-2 mb-3">
                                <div className="col-6">
                                    <a href="/" className="btn w-100">
                                        Back to Home
                                    </a>
                                </div>
                                <div className="col-6">
                                    <button type="submit" className="btn btn-primary w-100 border-0">
                                        Login
                                    </button>
                                </div>
                            </div>

                            <a href="/forgot-password" className="d-block text-center text-decoration-none link-dark">
                                Forgot password?
                            </a>
                            <a href="/register" className="d-block text-center text-decoration-none link-dark mt-2">
                                Don't have an account? Register
                            </a>
                        </form>
                    </div>
                </section>
            </main>
        </main>
    );
}
