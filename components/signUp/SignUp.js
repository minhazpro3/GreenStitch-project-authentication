import React from "react";
import styles from "../../styles/SignIn.module.css";
import { useForm } from "react-hook-form";
import Link from "next/link";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className={styles.container}>
      <div>
        <h2>SignUp please</h2>
        <div className={styles.sub_container}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Email</label>
            <br />
            <input
              className={styles.input}
              {...register("email")}
              required
              type="email"
            />
            <br />
            <label>Password</label>
            <br />
            <input
              className={styles.input}
              {...register("password")}
              required
              type="password"
            />
            <br />
            <label>Confirm password</label>
            <br />
            <input
              className={styles.input}
              {...register("password1")}
              required
              type="password"
            />
            <br />
            <input
              className={styles.input}
              style={{ margin: "16px 0px 7px 0px", cursor: "pointer" }}
              type="submit"
              value="SignUp"
            />
          </form>
          <p>
            If you have account{" "}
            <Link style={{ color: "green" }} href="/">
              SignIn
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
