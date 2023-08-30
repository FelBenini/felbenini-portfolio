import Link from 'next/link'
import { Post } from '../PostCard'
import { IoMdStopwatch } from 'react-icons/io'
import styles from './styles.module.scss'

const PostComponent = ({ post }: { post: Post }) => {
  return (
    <Link href={`/blog/${post.postUrl}`} className={styles.post}>
      <div className={styles.image}>
        <img src={post.backgroundImage} alt={post.title}/>
      </div>
      <div className={styles.text}>
        <h4>{post.title}</h4>
        <span>
          <h5>Published by {post.postedBy}</h5><PostDate date={new Date(post.publishedAt)} />
        </span>
        <p>{post.summary}</p>
      </div>
    </Link>
  )
}

export const PostDate = ({date}: {date: Date}) => {
  return (
    <h5 style={{marginTop: '1rem'}}>
      <IoMdStopwatch aria-label='published at' size='1.3rem' style={{marginBottom: '-3px'}} /> {date.getDate()}/{date.getMonth()}/{date.getFullYear()} - {date.getHours()}:{date.getMinutes()}
    </h5>
  )
}

export default PostComponent