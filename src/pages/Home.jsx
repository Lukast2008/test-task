import styles from "../components/styles.module.css"

// const styles = {
//   container: {
//     minHeight: "calc(100vh - 50px)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: "center",
//   },
// };

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tweet</h1>
    </div>
  );
}
