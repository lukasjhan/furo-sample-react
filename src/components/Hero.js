import React from "react";
import styles from "../styles/hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div
        style={{
          backgroundImage: `url('/react.svg')`,
        }}
        className={styles.icon}
      />
      <h1 className={styles.title}>Furo에 오신 것을 환영합니다</h1>
      <p className={styles.subTititle}>
        React.js 어플리케이션을 통해 Furo의 빠르고 직관적인 로그인을 경험해
        보세요
      </p>
    </div>
  );
};

export default Hero;
