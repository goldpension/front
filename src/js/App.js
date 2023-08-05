import Nav from "./Nav";
import styles from "../css/App.module.css";
import "../css/App.font.css";

function App() {
  return (
    <>
      <Nav className={styles.nav} />
      <div className={styles.body}></div>
    </>
  );
}

export default App;
