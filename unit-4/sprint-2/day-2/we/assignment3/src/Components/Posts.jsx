import React from "react";
import PostItem from "./PostItem";
// making an API requests in react;

const getData = () => {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10`
  ).then((res) => res.json());
};

function Posts() {
  const [posts, setPosts] = React.useState([]);

  // 1. write a function which makes get request and get the data
  // from API endpoint
  const fetchAndUpdateData = async () => {
    try {
      const data = await getData();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* 3. writing event handler for click event. basically meaning
        fetchAndUpdateData is called/invoked when user clicks on GET POSTS 
        button
      */}
      <button onClick={fetchAndUpdateData}>GET POSTS</button>
      <div>
        {/* 4. displaying data from posts*/}
        {posts.map((post) => (
          <PostItem key={post.id} body={post.body} title={post.title} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
