import styles from './styles.module.scss'
import Link from 'next/link';

export type Post = {
    title: string;
    summary: string;
    backgroundImage: string | undefined;
    postUrl: string;
}

const PostCard = ({post}: {post: Post}) => {
    if (post.title.length > 52) {
        post.title = post.title.slice(0, 52) + '...'
    }
    if (post.summary.length > 125) {
        post.summary = post.summary.slice(0, 125) + '...';
    }
  return (
    <Link href={`/blog/${post.postUrl}`} className={styles.card}>
        <div className={styles.image}>
            <img src={post.backgroundImage} alt={post.title} loading='lazy' />
        </div>
        <h4>{post.title}</h4>
        <p>{post.summary}</p>
    </Link>
  )
}

export default PostCard