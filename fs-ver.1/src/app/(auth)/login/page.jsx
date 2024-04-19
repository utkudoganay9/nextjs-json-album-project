import Image from "next/image";
import styles from "./login.module.css";
import LoginForm from "@/components/login/loginForm";

const LoginPage = () => {
  return (
    <div className={styles.container}>
     <div className={styles.imgContainer}> <Image src="/login.gif"  className={styles.img} fill></Image></div>
      <div className={styles.login}><LoginForm/></div>
    </div>
  );
};

export default LoginPage;
