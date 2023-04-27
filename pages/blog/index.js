import Head from "next/head";
import Link from "next/link";

const Blog = () => {
    return (
        <div>
            {/* <Link href="/bolginfoTwo">BlogInfoTwo222</Link> */}

            {/* <Link href="/blog">Blog page Link</Link> */}
        <Head>
            <title>Blog page</title>
        </Head>
            <h1>This is blog 📄 </h1>

            <Link href="blog/blogInfo/blogInfoOne/blogInfoOne1">BloginfoOne</Link>
        </div>
    );
};

export default Blog;