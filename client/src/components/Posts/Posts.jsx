import { useSelector } from "react-redux";
import Post from "./Post/Post";

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  if (!posts || posts.length === 0) {
    // Show spinner when no posts are available or still loading
    return (
      <div className="flex justify-center items-center min-h-screen">
        <svg
          className="animate-spin h-10 w-10 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H4z"
          ></path>
        </svg>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
      {posts.map((post) => (
        <div key={post._id || post.id} className="col-span-1">
          <Post post={post} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
