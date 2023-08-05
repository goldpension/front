import classNames from "classnames";
import styles from "../css/Container.module.css";

function Container({ className }) {
  return <div className={classNames(styles.container, className)}>{}</div>;
}

export default Container;
