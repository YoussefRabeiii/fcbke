import Image from "next/image";

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className="flex items-center space-x-2 p-3 hover:bg-gray-200 rounded-xl cursor-pointer">
      {src && (
        <Image
          src={src}
          width={30}
          height={30}
          layout="fixed"
          className="rounded-full"
        />
      )}

      {Icon && <Icon className="text-blue-500 h-8" />}

      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
};

export default SidebarRow;
