import Link from "next/link";
import React from "react";

const Post = ({ post }) => {
  return (
    <div className="card mb-12  bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link href={`/posts/${post?.id}`}>
            <button className="btn">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
