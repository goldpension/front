import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../css/Menu.module.css";

function Menu({isLoggedIn}) {
  const [isOpen, setIsOpen] = useState(true);

  const handleButtonClick = useCallback((e) => {
    e.stopPropagation();
    setIsOpen((nextIsOpen) => !nextIsOpen);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = () => setIsOpen(true);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.Menu}>
      <button className={styles.Button} onClick={handleButtonClick}>
        메뉴
      </button>
      {isOpen && (
        <ul className={styles.popup}>
          <Link to="/findJobs">
            <li>일자리 찾기</li>
          </Link>
          <Link to="/companyPromotion">
            <li>회사홍보</li>
          </Link>
          <Link to="/manual/useMethod">
            <li>
              사용방법 <br /> & <br /> 공지사항
            </li>
          </Link>
          {isLoggedIn ?
           null :
          <Link to="/apply">
            <li>지원한 일자리 확인하기</li>
          </Link>
          }
        </ul>
      )}
    </div>
  );
}

export default Menu;
