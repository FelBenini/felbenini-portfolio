import PostCard, { Post } from '@/components/PostCard';
import styles from './styles.module.scss'

async function loadData() {
    const data = await fetch(`${process.env.TORTACMS_HOST}/api/posts?limit=3`)
    const res = await data.json();
    return res.posts;
}

const LatestPosts = async () => {
    const data = await loadData();
  return (
    <section className={styles.postSection}>
        {data.map((post: Post, index: React.Key) => {
            return <PostCard post={post} key={index} />
        })}
    </section>
  )
}

export default LatestPosts