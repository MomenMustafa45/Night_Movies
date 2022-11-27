import Image from "next/image";
import React from "react";
import { Movie } from "../typings";

interface Props {
  movie: Movie;
  handleShowModal?: () => void;
}

const Thumbnail = ({ movie, handleShowModal }: Props) => {
  return (
    <div
      className="relative min-w-[180px] h-28 cursor-pointer md:hover:scale-105 transition duration-200 ease-out"
      onClick={handleShowModal}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500/${
          movie.backdrop_path || movie.poster_path
        }`}
        layout="fill"
        className="rounded-sm md:rounded object-cover"
      />
    </div>
  );
};

export default Thumbnail;
