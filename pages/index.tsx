import { useState } from "react";
import Head from "next/head";
// import Image from "next/image";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Row from "../components/Row";
import { Movie } from "../typings";
import requests from "../utils/requests";
import Modal from "../components/Modal";

interface Props {
  horrorMovies: Movie[];
  nigthMovieOriginals: Movie[];
  trendingMovies: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
}

const Home = ({
  horrorMovies,
  nigthMovieOriginals,
  trendingMovies,
  topRated,
  actionMovies,
  comedyMovies,
  romanceMovies,
  documentaries,
}: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMovie, setModalMovie] = useState({});

  const handleShowModal = (movieData?: any) => {
    console.log(movieData);
    setShowModal(true);
    setModalMovie(movieData);
  };
  const handlecloseModal = () => setShowModal(false);

  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010139] lg:h-[140vh] scrollbar-thumb-rounded">
      <Head>
        <title>NightMovies</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="This is a website for movies" />
      </Head>

      <Header />
      <main className="relative pl-4 pb-24 md:pl-8 lg:pl-16 lg:space-y-24">
        <Banner nigthMovieOriginals={nigthMovieOriginals} />
        <section className="space-y-8 md:space-y-24">
          <Row
            title="Trending Now"
            movies={trendingMovies}
            handleShow={handleShowModal}
          />
          <Row
            title="Top Rated"
            movies={topRated}
            handleShow={handleShowModal}
          />
          <Row
            title="Action Movies"
            movies={actionMovies}
            handleShow={handleShowModal}
          />
          <Row
            title="Romance Movies"
            movies={romanceMovies}
            handleShow={handleShowModal}
          />
          <Row
            title="Scary Movies"
            movies={horrorMovies}
            handleShow={handleShowModal}
          />
          <Row
            title="Comedy Movies"
            movies={comedyMovies}
            handleShow={handleShowModal}
          />
          <Row
            title="Documentaries"
            movies={documentaries}
            handleShow={handleShowModal}
          />
        </section>
      </main>
      {/* Modal */}
      <Modal
        showModal={showModal}
        handleShow={handleShowModal}
        handleClose={handlecloseModal}
        modalMovie={modalMovie}
      />
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const [
    nigthMovieOriginals,
    trendingMovies,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNightMovieOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return {
    props: {
      nigthMovieOriginals: nigthMovieOriginals.results,
      trendingMovies: trendingMovies.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
};
