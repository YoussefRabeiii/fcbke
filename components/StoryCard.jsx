import Image from "next/image";

const StoryCard = ({ name, src, profile }) => {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition hover:animate-pulse">
      <Image
        width={40}
        height={40}
        src={profile}
        layout="fixed"
        objectFit="cover"
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
      />
      <Image
        src={src}
        layout="fill"
        objectFit="cover"
        className="rounded-full filter brightness-75 lg:rounded-3xl"
      />
      <p className="absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate">
        {name}
      </p>
    </div>
  );
};

export default StoryCard;
