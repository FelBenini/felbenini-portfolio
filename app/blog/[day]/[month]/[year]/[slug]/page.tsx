import MarkdownParser from '@/components/Markdown';
import React from 'react'
import styles from './styles.module.scss'

export const revalidate = 10;

type Params = {
    day: string;
    month: string;
    year: string;
    slug: string;
}

async function fetchData(day: string, month: string, year: string, slug: string) {
    const data = await fetch(`${process.env.TORTACMS_HOST}/api/post/${day}/${month}/${year}/${slug}`);
    console.log(`${process.env.TORTACMS_HOST}/api/post/${day}/${month}/${year}/${slug}`)
    const res = await data.json();
    return res;
}

export default async function BlogPost({ params }: { params: Params }) {
    const data = await fetchData(params.day, params.month, params.year, params.slug)
  return (
    <div className={styles.postSection}>
        <h1 className={styles.bigTitle}>{data.title}</h1>
        <MarkdownParser source={data.content} />
    </div>
  )
}