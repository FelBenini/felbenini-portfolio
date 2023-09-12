"use client";
import styles from './styles.module.scss';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export type Post = {
    title: string;
    summary: string;
    backgroundImage: string | undefined;
    postUrl: string;
    publishedAt: Date;
    postedBy: string;
}

const PostCard = ({post}: {post: Post}) => {
    const router = useRouter();
    if (post.title.length > 52) {
        post.title = post.title.slice(0, 52) + '...'
    }
    if (post.summary.length > 125) {
        post.summary = post.summary.slice(0, 125) + '...';
    }
  return (
    <motion.a href={`/blog/${post.postUrl}`} className={styles.card}
      initial={{opacity: 0, translateY: '40px'}}
      whileInView={{opacity: 1, translateY: '0px'}}
      transition={{delay: 0.3, ease: 'easeInOut', duration: 0.4}}
      onClick={(e) => {
        e.preventDefault();
        router.push(`/blog/${post.postUrl}`)
      }}
    >
        <div className={styles.image}>
            <img src={post.backgroundImage} alt={post.title} loading='lazy' />
        </div>
        <h4>{post.title}</h4>
        <p>{post.summary}</p>
    </motion.a>
  )
}

export default PostCard
