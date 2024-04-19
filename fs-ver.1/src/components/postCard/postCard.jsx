import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.imgContainer}><Image
          className={styles.img}
          alt="img"
          src="https://images.pexels.com/photos/753697/pexels-photo-753697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill
        ></Image></div>
      
      <span className={styles.date}>01.01.2023</span></div>
      <div className={styles.titleContainer}>
        
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.desc}>
          {post.body}
        </p>
        <Link className={styles.link} href={`/blog/${post.id}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
