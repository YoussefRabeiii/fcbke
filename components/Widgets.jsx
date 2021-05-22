import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";

import { Contact } from "@components";

const contacts = [
  {
    id: "6",
    src: "https://links.papareact.com/f0p",
    name: "jeff Bezoz",
    active: true,
  },
  { id: "1", src: "https://links.papareact.com/zvy", name: "Bill Gates" },
  {
    id: "0",
    src: "https://links.papareact.com/kxk",
    name: "Elon Musk",
    active: true,
  },
  { id: "2", src: "https://links.papareact.com/snf", name: "Mark Zuckerberg" },
  {
    id: "3",
    src: "https://links.papareact.com/d0c",
    name: "Harry Potter",
    active: true,
  },
  { id: "4", src: "https://links.papareact.com/6gg", name: "The Queen" },
];

const Widgets = () => {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5 mr-2">
      <div className="flex justify-between items-center text-gray-500 mb-5 pr-2">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="widgetIcon" />
          <SearchIcon className="widgetIcon" />
          <DotsHorizontalIcon className="widgetIcon" />
        </div>
      </div>

      {contacts.map((contact) => {
        const { id, src, name, active } = contact;

        return (
          <Contact
            key={id}
            image={src}
            name={name}
            active={active ? true : false}
          />
        );
      })}
    </div>
  );
};

export default Widgets;
