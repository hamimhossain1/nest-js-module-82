const Comments = ({comments}) => {
    console.log(comments);
  return <div className="bg-red-200">
    {
        comments?.map(comment => <h1 key={comment.id} className="my-10 w-10/12 mx-auto"><span className="text-red-500">Comment body:</span> {comment.body}</h1>)
    }
  </div>;
};

export default Comments;

export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  return {
    props:{
        comments: data,
    }
  };
};
