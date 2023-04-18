import styles from "../Btnback/BtnBack.module.css"


export default function Btnback({prev}) {



  return (
    <>
      <button type="button" className={styles.btn} onClick={prev}>
       { "<< Back"}
      </button>
    </>
  );
}
