import Link from "next/link";
import styles from "./navbar.module.css"
import Image from "next/image";
import Links from "./links/Links";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}><Image src="/logo.png" width={150} height={150} alt="logo"></Image></div>
      <div className={styles.links}>
        
        <Links/>
      </div>
    </div>
  );
};

export default Navbar;
