import Image from "next/image";
import styles from "./contact.module.css";
const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="/contact.gif"
          fill
          alt="contact"
        ></Image>
      </div>
      <div className={styles.formContainer}>
        <h1 className={styles.text}>Contact us</h1>

        <form className={styles.form}>
          <input title="text" placeholder="Name|Surname"></input>
          <input title="text" placeholder="Email"></input>
          <input
            title="text"
            placeholder="Phone Number (Not required!)"
          ></input>
          <textarea
            name="textarea"
            id="textarea"
            cols={10}
            rows={5}
            placeholder="Write us"
          ></textarea>
        </form>
        <button className={styles.button}>Send us</button>
      </div>
    </div>
  );
};

export default ContactPage;
