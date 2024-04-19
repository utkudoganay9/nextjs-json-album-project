import Image from "next/image";
import styles from "./postUser.module.css";

const getData = async (userId) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if (!res.ok) {
    throw new Error(err);
  }
  return res.json();
};

const PostUser = async({userId}) => {

  const user = await getData(userId);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          alt="img"
          src="https://images.pexels.com/photos/753697/pexels-photo-753697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill
        ></Image>
      </div>

     <Image
        className={styles.avatar}
        alt="img"
        src="https://images.pexels.com/photos/753697/pexels-photo-753697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width={80}
        height={80}
      ></Image>
      
        
      
        {/* <div className={styles.userContainer}> */}
          <div className={styles.user}><span >{user.username}</span></div>
        {/* <span className={styles.date}>Date:01.01.2023 </span>
        <h3 className={styles.title}>title</h3>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          consectetur! Dolore consectetur vel, recusandae ducimus nisi id ea
          atque corporis quas, optio placeat at? Hic expedita sunt magnam quia.
          Dignissimos!
        </p> */}
      {/* </div> */}
    </div>
  );
};

export default PostUser;
