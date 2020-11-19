import React from "react";
import styles from "./CSSModule.module.css";
// import styles from './CSSModule.module.scss'; => scss파일 사용
import classNames from "classnames";

const cx = classNames.bind(styles); //미리 styles에서 클래스를 받아오도록 설정하고
const CSSModule = () => {
  //USE CSSMODULE with classnames
  return (
    <div className={cx("wrapper", "inverted")}>
      안녕하세요 저는 <span className="something">CSS Module!</span>
    </div>

    //only CSSMODULE
    // return (
    //   <div className={`${styles.wrapper} ${styles.inverted}`}>
    //     안녕하세요 저는 <span className="something">CSS Module!</span>
    //   </div>
  );
};

export default CSSModule;
