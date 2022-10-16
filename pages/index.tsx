import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010139] lg:h-[140vh]">
      <Head>
        <title>NightMovies</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="This is a website for movies" />
      </Head>

      <Header />
      <main>
        <Banner />
        <section>
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
        </section>
      </main>
      {/* Modal */}
    </div>
  );
};

export default Home;
