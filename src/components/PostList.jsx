import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../features/posts/postsSlice";

function PostList() {

  const dispatch = useDispatch();

  const posts = useSelector(
    (state) => state.posts.posts
  );

  if (posts.length === 0) {
    return <h3>No Posts Available</h3>;
  }

  return (
    <div className="post-list">

      {posts.map((post) => (

        <div key={post.id} className="card">

          <h2>{post.title}</h2>

          <p>{post.content}</p>

          <h4>{post.platform}</h4>

          <button
            onClick={() => dispatch(deletePost(post.id))}
          >
            Delete
          </button>

        </div>

      ))}

    </div>
  );
}

export default PostList;
