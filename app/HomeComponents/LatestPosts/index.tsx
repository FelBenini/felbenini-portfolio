import PostCard, { Post } from '@/components/PostCard';
import styles from './styles.module.scss'

const LatestPosts = async ({posts}: {posts: Array<Post>}) => {
  return (
    <section className={styles.postSection}>
        {posts.map((post: Post, index: React.Key) => {
            return <PostCard post={post} key={index} />
        })}
    </section>
  )
}

export default LatestPosts