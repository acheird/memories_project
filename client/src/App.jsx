import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="container mx-auto px-4">
      {/* App Header */}
      <header className="bg-white shadow rounded-lg p-4 flex flex-col items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">
          Memories
        </h1>
        <img src={memories} alt="memories" className="h-16" />
      </header>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Posts Section */}
        <div className="flex-1">
          <Posts />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/3">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
