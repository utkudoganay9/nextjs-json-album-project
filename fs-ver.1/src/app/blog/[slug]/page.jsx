import PostUser from "@/components/postUser/postUser";
import styles from "./singlepostpage.module.css";

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!res.ok) {
    throw new Error(err);
  }
  return res.json();
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);

  return (
    <div className={styles.container}>
      <PostUser userId={post.userId} />
      <div className={styles.postContainer}>
        <h3 className={styles.title}>{post.title}</h3>
        <span className={styles.date}>Date:01.01.2023 </span>

        <p className={styles.desc}>
          {post.body}
        </p>
      </div>
    </div>
  );
};

export default SinglePostPage;
