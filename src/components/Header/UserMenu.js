import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import personIcon from "../../img/person.svg";
import styles from "../../css/UserMenu.module.css";

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = useCallback((e) => {
    e.stopPropagation();
    setIsOpen((nextIsOpen) => !nextIsOpen);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = () => setIsOpen(false);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.userMenu}>
      <button className={styles.iconButton} onClick={handleButtonClick}>
        로그인
      </button>
      {isOpen && (
        <ul className={styles.popup}>
          <Link to="/Login">
            <li>로그인</li>
          </Link>
          <Link to="/Join">
            <li>회원가입</li>
          </Link>
        </ul>
      )}
    </div>
  );
}

export default UserMenu;
