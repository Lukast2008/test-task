import styles from "../styles.module.css"

export default function BntLoadMore({click}) {
  return (
    <>
      <button className={styles.Btn} type="button" onClick={click}>
        Load More
      </button>
    </>
  );
}
