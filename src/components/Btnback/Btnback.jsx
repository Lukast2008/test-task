import styles from "../Btnback/BtnBack.module.css"


export default function Btnback({handlePageChange}) {

  const handlePrevPage = async () => {
    const currentPage = Number(localStorage.getItem("page"));
    const prevPage = currentPage - 1;
    handlePageChange(prevPage);
  };

  return (
    <>
      <button type="button" className={styles.btn} onClick={handlePrevPage}>
       { "<< Back"}
      </button>
    </>
  );
}
