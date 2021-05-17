import { useSession } from "next-auth/client";

const Sidebar = () => {
  const [session, loading] = useSession();

  return (
    <div>
      <h1>Sidebar</h1>
    </div>
  );
};

export default Sidebar;
