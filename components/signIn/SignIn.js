import React from "react";
import styles from "../../styles/SignIn.module.css";

const SignIn = () => {
  return (
    <div>
      {" "}
      <div className={styles.container}>
        <form className={styles.form}>
          <h1 className="signIn_title">Sign In</h1>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            required
          />
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            required
          />
          <button className="button" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
