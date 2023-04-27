import Banner from "@/Components/Banner/Banner";
import Footer from "@/Components/Footer/Footer";
import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";

export default function Home({posts}) {
  console.log(posts);
  return (
    <div className="">
      <Head>
        <title>Home page</title>
      </Head>
      <h1>Hello from "Home page...!"</h1>

      <Banner></Banner>
      <div className="bg-red-200">
      {
        posts?.map(post => <h1 className="m-10  ">{post?.body}</h1>)
      }
      </div>
      <Footer></Footer>
      {/* <Link href="/blog">Blog page Link</Link>
      <h1>hello....! "This is Main home page..........!"</h1>

      <h1 className="uppercase">The number of posts: {posts.length}</h1>

      <Image
        src="/nature.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      ></Image> */}

    </div>
  );
}

export const getStaticProps= async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const data = await res.json();

  return{
      props:{
          posts: data,
      }
  }
}
