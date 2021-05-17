import Head from "next/head";

import { getSession } from "next-auth/client";

import { Header, Login, Sidebar, Feed } from "@components";

export const getServerSideProps = async (context) => {
  // Get The User Session
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};

export default function Home({ session }) {
  if (!session)
    return (
      <>
        <Head>
          <title>Login - FCBKE</title>
        </Head>
        <Header />
        <Login />
      </>
    );

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>FCBKE</title>
      </Head>

      <Header />

      <main className="flex">
        <Sidebar />
        <Feed />
        {/* <Widgets /> */}
      </main>
    </div>
  );
}
