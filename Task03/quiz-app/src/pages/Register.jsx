import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: xử lý đăng ký (validate, gọi API...)
        // ví dụ tạm: chuyển về trang login sau khi đăng ký thành công
        navigate("/login");
    };

    return (
        <main className="bg-[url('src/assets/images/bg.png')] m-0">
            <main className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
                <section className="row w-100 justify-content-center">
                    <div className="col-11 col-sm-8 col-md-6 col-lg-5 col-xl-5">
                        <form
                            id="register-page"
                            className="card border-0 shadow rounded-3 p-4 p-md-5"
                            method="post"
                            onSubmit={handleSubmit}
                        >
                            <h1 className="h3 fw-bold text-center mb-4">Register</h1>

                            <div className="row g-3">
                                <div className="col-12 col-md-6">
                                    <label htmlFor="first-name" className="form-label">Firstname</label>
                                    <input type="text" className="form-control" id="first-name" name="firstName"
                                        placeholder="Enter your firstname" required />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label htmlFor="last-name" className="form-label">Lastname</label>
                                    <input type="text" className="form-control" id="last-name" name="lastName"
                                        placeholder="Enter your lastname" required />
                                </div>
                            </div>

                            <div className="mt-3">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email"
                                    required />
                            </div>

                            <div className="row g-3 mt-1">
                                <div className="col-12 col-md-6">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username" name="username"
                                        placeholder="Enter your username" required />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label htmlFor="phone" className="form-label">Phone number</label>
                                    <input type="text" className="form-control" id="phone" name="phone"
                                        placeholder="Enter your phone number" />
                                </div>
                            </div>

                            <div className="mt-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" name="password"
                                    placeholder="Enter your password" required />
                            </div>

                            <div className="mt-3">
                                <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="confirm-password" name="confirmPassword"
                                    placeholder="Confirm your password" required />
                            </div>

                            <div className="row g-2 mt-4 mb-2">
                                <div className="col-6">
                                    <Link to="/" className="btn w-100">Back to Home</Link>
                                </div>
                                <div className="col-6">
                                    <button type="submit" className="btn btn-primary w-100 border-0">Register</button>
                                </div>
                            </div>

                            <Link to="/login" className="d-block text-center text-decoration-none link-dark mt-2">
                                Already have an account? Login
                            </Link>
                        </form>
                    </div>
                </section>
            </main>
        </main>
    );
}
