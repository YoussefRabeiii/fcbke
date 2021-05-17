import Head from "next/head";

import { getSession } from "next-auth/client";

import { Header, Login, Sidebar } from "@components";

export const getServerSideProps = async (context) => {
  // Get User
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
          <title>Login - FCBK</title>
        </Head>
        <Login />
      </>
    );

  return (
    <div>
      <Head>
        <title>FCBK</title>
      </Head>

      <Header />

      <main>
        <Sidebar />
        {/* <Feed /> */}
        {/* <Widgets /> */}
      </main>
    </div>
  );
}
