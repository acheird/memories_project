/* eslint-disable react/prop-types */
import moment from "moment";
import { ThumbUpAlt, Delete, MoreHoriz } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";
const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-between rounded-lg shadow-lg overflow-hidden h-full relative bg-white">
      {/* Image Section */}
      <div
        className="h-56 bg-cover bg-center"
        style={{
          backgroundImage: `url(${post.selectedFile})`,
          backgroundBlendMode: "darken",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        title={post.title}
      ></div>

      {/* Overlay */}
      <div className="absolute top-4 left-4 text-white">
        <h6 className="text-lg">{post.creator}</h6>
        <p className="text-sm">{moment(post.createdAt).fromNow()}</p>
      </div>

      {/* More Options */}
      <div className="absolute top-4 right-4 text-white">
        <button
          className="bg-transparent text-white hover:text-gray-300 focus:outline-none"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHoriz fontSize="small" />
        </button>
      </div>

      {/* Tags */}
      <div className="px-4 py-2 text-gray-500 text-sm">
        {post.tags.map((tag) => (
          <span key={tag} className="mr-1">
            #{tag}
          </span>
        ))}
      </div>

      {/* Title and Message */}
      <div className="px-4 py-2">
        <h5 className="text-xl font-semibold mb-2">{post.title}</h5>
        <p className="text-gray-700">{post.message}</p>
      </div>

      {/* Actions */}
      <div className="px-4 py-2 flex justify-between items-center border-t border-gray-200">
        <button
          className="flex items-center text-blue-500 hover:text-blue-700"
          onClick={() => dispatch(likePost(post._id))}
        >
          <ThumbUpAlt fontSize="small" className="mr-1" />
          Like
          <span className="ml-1">{post.likeCount}</span>
        </button>
        <button
          className="flex items-center text-red-500 hover:text-red-700"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <Delete fontSize="small" className="mr-1" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default Post;
