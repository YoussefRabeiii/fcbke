import Image from "next/image";

import { signOut, useSession } from "next-auth/client";

import {
  BellIcon,
  ChatIcon,
  HomeIcon,
  ViewGridIcon,
  UserGroupIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";

import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

import { HeaderIcon } from "@components/index";

const Header = () => {
  const [session] = useSession();

  return (
    <header className="sticky flex items-center p-2 lg:px-5 shadow-md top-0 z-50 bg-white">
      {/* Search Section */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            type="text"
            className=" hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* Nav Section */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <Image
          width={40}
          height={40}
          layout="fixed"
          onClick={signOut}
          src={session.user.image}
          className="rounded-full cursor-pointer"
        />

        <p className="whitespace-nowrap font-semibold pr-3">
          {session.user.name}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </header>
  );
};

export default Header;
