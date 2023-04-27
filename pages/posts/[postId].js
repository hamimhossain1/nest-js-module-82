import Link from "next/link";
import { useRouter } from "next/router";

const PostDetails = ({ post }) => {
  const router = useRouter();
  const handleBack = () => {
    router.push("/posts");
  };
  return (
    <div className="card w-10/12  mx-auto my-10 bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h1>Post Id: {post?.id}</h1>
        <h2 className="card-title">Title: {post?.title}</h2>
        <p>
          <em>Post:</em> {post?.body}
        </p>
        <div className="card-actions">

          {/* //To go back to "Posts" both ways in the below works fine// */}
          <button onClick={handleBack} className="btn btn-primary">
            Go back
          </button>

          {/* <Link href={"/posts"}>
            <button  className="btn btn-primary">
              Go back
            </button>
          </Link> */}

        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.postId}`
  );
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
};

export const getStaticPaths = async () => {
  // console.log(getStaticPaths);
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  const paths = posts?.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export default PostDetails;
