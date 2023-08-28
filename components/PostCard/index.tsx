import styles from './styles.module.scss'

export type Post = {
    title: String;
    summary: String;
    backgroundImage: String;
}

const PostCard = ({post}: {post: Post}) => {
  return (
    <div className={styles.card}>
        <h1>{post.title}</h1>
    </div>
  )
}

export default PostCard