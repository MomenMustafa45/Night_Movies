import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Movie } from "../typings";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/solid";

interface Props {
  nigthMovieOriginals: Movie[];
}

const Banner = ({ nigthMovieOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      nigthMovieOriginals[
        Math.floor(Math.random() * nigthMovieOriginals.length)
      ]
    );
    console.log(movie);
  }, [nigthMovieOriginals]);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[80vh] lg:justify-end lg:pb-10">
      <div className="absolute top-0 left-0 h-[95vh] w-screen -z-10">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            movie?.backdrop_path || movie?.poster_path
          }`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-2xl lg:text-7xl md:text-4xl font-bold">
        {movie?.title || movie?.name || movie?.original_title}
      </h1>
      <p className="max-w-xs text-shadow-lg text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>
      <div>
        <button className="bannerButton bg-white text-black mb-2">
          <FaPlay className="iconPlay w-4 h-4 transition-all duration-500 md:h-6 md:w-6 lg:h-8 lg:w-8" />
          Play
        </button>
        <button className="bannerButton bg-[gray]/80">
          More Info
          <InformationCircleIcon className="w-4 h-4 md:h-6 md:w-6 lg:h-8 lg:w-8" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
