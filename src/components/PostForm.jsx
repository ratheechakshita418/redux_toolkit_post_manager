import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../features/posts/postsSlice";
import PlatformSelector from "./PlatformSelector";

function PostForm() {

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [platform, setPlatform] = useState("LinkedIn");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!title || !content) return;

    dispatch(
      addPost({
        id: Date.now(),
        title,
        content,
        platform,
      })
    );

    setTitle("");
    setContent("");
    setPlatform("LinkedIn");
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Write your content..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <PlatformSelector
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
      />

      <button type="submit">
        Add Post
      </button>

    </form>
  );
}

export default PostForm;
