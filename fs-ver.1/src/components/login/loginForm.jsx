import Link from "next/link";
import styles from "./loginForm.module.css";
import Image from "next/image";

const LoginForm = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <form className={styles.form}>
        <input type="text" placeholder="Email" name="Email" />
        <input type="text" placeholder="Password" name="Password" />
      </form>
      {/* <div className={styles.loginContainer}>
      <Image src="/github.png" alt="github" width={30} height={30}></Image>
      <Image src="/google.png" alt="google" width={30} height={30}></Image></div> */}

      <Link href="">Forgot password?</Link>
      <button className={styles.button}>Login</button>
      <b className={styles.signUp}>Don't have an account? &nbsp;<Link href="">Sign up</Link></b>
      
    </div>
  );
};

export default LoginForm;
