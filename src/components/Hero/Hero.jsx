import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vikash</h1>
        <p className={styles.description}>
          I'm a proficient web developer specializing in MERN stack. I craft intuitive, responsive, and efficient web applications, blending innovation with seamless user experiences.
        </p>
        <a href="https://drive.google.com/file/d/1xjYY5SWUo4bczEZX4DcbIZZlZ7K6ixhh/view?usp=drive_link" className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
