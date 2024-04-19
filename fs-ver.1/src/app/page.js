import Image from "next/image";
import styles from "./page.module.css";

export default function Homepage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.text}>Welcome</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor ipsum doloripsum doloripsum doloripsum doloripsum
          dolor
          Lorem ipsum dolor ipsum doloripsum doloripsum doloripsum doloripsum
          dolor
          Lorem ipsum dolor ipsum doloripsum doloripsum doloripsum doloripsum
          dolor
        </p>
      </div>
      <div className={styles.gif}>
        <Image src="/camera.gif"  fill alt="img"></Image>
      </div>
    </div>
  );
}
