import { useCollection } from "react-firebase-hooks/firestore";

import { db } from "../firebase";
import { Post } from "@components";

const Posts = ({ posts }) => {
  const [realTimePosts] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );

  return (
    <div>
      {realTimePosts
        ? realTimePosts.docs.map((post) => {
            const { name, message, timestamp, image, postImage } = post.data();

            return (
              <Post
                name={name}
                key={post.id}
                image={image}
                message={message}
                timestamp={timestamp}
                postImage={postImage}
              />
            );
          })
        : posts?.map((post) => {
            const { id, name, message, timestamp, image, postImage } = post;

            return (
              <Post
                key={id}
                name={name}
                image={image}
                message={message}
                timestamp={timestamp}
                postImage={postImage}
              />
            );
          })}
    </div>
  );
};

export default Posts;
