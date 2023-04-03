import React from "react";
import styles from "../../styles/SignIn.module.css";
import { useForm } from "react-hook-form";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

const SignIn = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    try {
      await axios
        .post("https://kart-bazar-server.onrender.com/api/v1/user/signIn", data)
        .then((res) => {
          if ((res.status = 200)) {
            alert("user SignIn success");
            reset();

            router.push("home");
          }
        });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <h2>SignIn please</h2>
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

            <br />
            <input
              className={styles.input}
              style={{ margin: "6px 0px 7px 0px", cursor: "pointer" }}
              type="submit"
              value="SignIn"
            />
          </form>
          <p>
            If you new user{" "}
            <Link style={{ color: "green" }} href="signup">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
