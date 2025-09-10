function LoginComponent() {
  return (
    <section className="login-page flex align-center justify-center">
      <form id="login-page" className="login-form" method="post">
        <h1 className="text-center">Login</h1>

        <div className="form-group">
          <label htmlFor="username" className="form-control-label">
            Username
          </label>
          <br />
          <input
            className="form-control"
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-control-label">
            Password
          </label>
          <br />
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="flex align-center justify-center">
          <button type="button" className="btn btn-back">Back to Home</button>
          <button type="submit" className="btn btn-login">Login</button>
        </div>

        <a href="/forgot-password.html">Forgot password?</a>
        <br />
        <a href="/register.html">Don't have an account? Register</a>
      </form>
    </section>
  );
}

export default LoginComponent;
