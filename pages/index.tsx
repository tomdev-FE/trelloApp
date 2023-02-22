import type { NextPage } from "next";
import DashboardContent from "@/components/dashboard/DashboardContent";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <DashboardContent />;
    </>
  );
};

export default Home;
