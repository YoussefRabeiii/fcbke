import Head from "next/head";

import { getSession } from "next-auth/client";
import { useCollection } from "react-firebase-hooks/firestore";

import { db } from "../firebase";
import { Header, Login, Sidebar, Feed, Widgets } from "@components";

export const getServerSideProps = async (context) => {
  // Get The User Session
  const session = await getSession(context);

  // Get all Posts in realtime
  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  return {
    props: {
      session,
      posts: docs,
    },
  };
};

export default function Home({ session, posts }) {
  if (!session)
    return (
      <>
        <Head>
          <title>Login - FCBKE</title>
        </Head>
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
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  );
}
