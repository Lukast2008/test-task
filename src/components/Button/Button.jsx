import { useEffect, useState } from "react";
import styles from "../Button/button.module.css";
import { current } from "@reduxjs/toolkit";

export default function Button({ count, id, foll }) {
  const [follow, setFollow] = useState(foll);

  const followOrNot = () => {
    setFollow(!follow);
    count(!follow, id);
  };

  return (
    <>
      <button
        type="button"
        className={`${styles.Button} ${
          follow ? styles.follows : styles.unfollows
        }`}
        onClick={(event) => followOrNot(event)}
      >
        <span className={styles.btnTitle}>
          {follow ? "Following" : "Follow"}
        </span>
      </button>
    </>
  );
}
