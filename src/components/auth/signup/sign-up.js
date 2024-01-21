import React, { useState } from "react";
import styles from "@/components/auth/signup/sign-up.module.css";
const SignUp = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles["input-container"]}>
        <div className={styles["form-input"]}>
          <label>Username</label>

          <input
            type="text"
            name="userName"
            value={formData.userName}
            placeholder="Enter username"
            onChange={handleChange}
          />
        </div>

        <div className={styles["form-input"]}>
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </div>

        <div className={styles["form-input"]}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Enter your passoword"
            onChange={handleChange}
          />
        </div>

        <div className={styles["form-input"]}>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            placeholder="Confirm Password"
            onChange={handleChange}
          />
        </div>
      </div>
    </form>
  );
};

export default SignUp;
