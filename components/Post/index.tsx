import Link from 'next/link'
import { Post } from '../PostCard'
import styles from './styles.module.scss'

const PostComponent = ({ post }: { post: Post }) => {
  return (
    <Link href={`/blog/${post.postUrl}`} className={styles.post}>
      <div className={styles.image}>
        <img src={post.backgroundImage} alt={post.title}/>
      </div>
      <div className={styles.text}>
        <h4>{post.title}</h4>
        <p>{post.summary}</p>
      </div>
    </Link>
  )
}

export default PostComponent