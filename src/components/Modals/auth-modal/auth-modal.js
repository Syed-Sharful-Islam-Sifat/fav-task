import React from "react";
import styles from "@/components/Modals/auth-modal/auth-modal.module.css";
const AuthModal = ({ children }) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["modal-container"]}>
        <div className={styles["cancel"]}>X</div>
        {children}
      </div>
    </div>
  );
};

export default AuthModal;
