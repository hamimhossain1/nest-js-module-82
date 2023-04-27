import Post from "@/Components/Post/Post";

const Posts = ({posts}) => {
    console.log(posts);
    return (
        <div>
            <div className="w-10/12 mt-10 mx-auto">
            {
                posts.map(post => <Post
                post={post}
                key={post.id}
                ></Post>)
            }
            </div>
        </div>
    );
};

export default Posts;
;

export const getStaticProps= async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    const data = await res.json();
  
    return{
        props:{
            posts: data,
        }
    }
  }
  