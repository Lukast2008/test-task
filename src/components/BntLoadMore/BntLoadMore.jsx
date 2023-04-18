import styles from "../styles.module.css";

export default function BntLoadMore({ handlePageChange }) {
  const handleNextPage = async () => {
    const currentPage = Number(localStorage.getItem("page"));
    const nextPage = currentPage + 1;
    handlePageChange(nextPage);
  };

  return (
    <>
      <button className={styles.Btn} type="button" onClick={handleNextPage}>
        Load More
      </button>
    </>
  );
}
