import PostCard, { Post } from '@/components/PostCard';
import React from 'react'
import styles from './styles.module.scss'

async function fetchPosts(page: string | undefined = '1') {
  const data = await fetch(`${process.env.TORTACMS_HOST}/api/posts/?page=${page}`);
  const res = await data.json()
  return res
}

const BlogPage = async ({ searchParams }: { searchParams: { page: string | undefined }; }) => {
  const pageNum = searchParams.page || '1';
  const data = await fetchPosts(pageNum);
  return (
    <main className={styles.blogPage}>
      {data.posts.map((p: Post, index: React.Key) => {
        return <PostCard post={p} key={index} />
      })}
    </main>
  )
}

export default BlogPage