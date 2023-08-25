import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import rehypeHighlight from 'rehype-highlight';

const components = {
    a: (props: any) => <Link {...props} />
}

function MarkdownParser({ source }: { source: string }) {
    return (
        <MDXRemote
            source={source}
            components={components}
            options={{
                mdxOptions: {
                    remarkPlugins: [],
                    rehypePlugins: [rehypeHighlight],
                }
            }}
        />
    )
}

export default MarkdownParser