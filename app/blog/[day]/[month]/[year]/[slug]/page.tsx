import MarkdownParser from '@/components/Markdown';
import React from 'react'
import { type Metadata } from 'next';
import styles from './styles.module.scss'
import { notFound } from 'next/navigation'

export const revalidate = 10;

type Params = {
    day: string;
    month: string;
    year: string;
    slug: string;
}

async function fetchData(day: string, month: string, year: string, slug: string) {
    const data = await fetch(`${process.env.TORTACMS_HOST}/api/post/${day}/${month}/${year}/${slug}`);
    if (data.status !== 200) {
      return null
    }
    const res = await data.json();
    return res;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const data = await fetchData(params.day, params.month, params.year, params.slug);
  return {
    title: data.title,
    description: data.summary
  }
}

export default async function BlogPost({ params }: { params: Params }) {
    const data = await fetchData(params.day, params.month, params.year, params.slug)
    if (!data) return notFound();
  return (
    <div className={styles.postSection}>
        <h1 className={styles.bigTitle}>{data.title}</h1>
        <div className={styles.imageWrapper}>
          <img src={data.backgroundImage} alt={data.title} loading='lazy' />
        </div>
        {data.summary ? <h5 className={styles.summary}>{data.summary}</h5> : <></>}
        <MarkdownParser source={data.content} />
    </div>
  )
}