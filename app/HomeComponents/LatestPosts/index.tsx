import PostCard, { Post } from '@/components/PostCard';
import styles from './styles.module.scss'
import Link from 'next/link';

const LatestPosts = async ({posts}: {posts: Array<Post>}) => {
  return (
    <section className={styles.postSection}>
        <h2>Latest Blog Posts</h2>
        <div className={styles.posts}>
            {posts.map((post: Post, index: React.Key) => {
                return <PostCard post={post} key={index} />
            })}
        </div>
        <Link className={styles.buttonBlog} href='/blog'>More Posts on Blog</Link>
    </section>
  )
}

export default LatestPosts