import { useCollection } from "react-firebase-hooks/firestore";

import { db } from "../firebase";
import { Post } from "@components";

const Posts = () => {
  const [posts] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );

  return (
    <div>
      {posts?.docs.map((post) => {
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
      })}
    </div>
  );
};

export default Posts;
