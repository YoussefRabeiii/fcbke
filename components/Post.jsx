import Image from "next/image";

const Post = ({ name, message, timestamp, image, postImage }) => {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <Image width={40} height={40} src={image} className="rounded-full" />
          <div>
            <p className="font-medium">{name}</p>

            <p className="text-xs text-gray-400">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>

        <p className="pt-4">{message}</p>
      </div>

      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image
            src={postImage}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      )}
    </div>
  );
};

export default Post;
