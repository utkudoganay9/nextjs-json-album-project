import styles from "./about.module.css";
import Image from "next/image";
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.text}>What is it?</h1>
        <p className={styles.desc}>First of all this site developed for improve my coding skills. But if you download this project and published it can be online photo album. </p>
      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.gif} src="/album.gif" fill alt="gif"></Image>
      </div>
    </div>
  );
};

export default AboutPage;
