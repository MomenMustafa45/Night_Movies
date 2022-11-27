import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import React, { useEffect, useRef, useState } from "react";
import { Movie } from "../typings";
import Thumbnail from "./Thumbnail";

interface Props {
  title: string;
  movies: Movie[];
  handleShow: any;
}
const Row = ({ title, movies, handleShow }: Props) => {
  const [isMoved, setIsMoved] = useState(false);

  const rowDivEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    rowDivEl.current?.scroll({ left: 0, behavior: "smooth" });
  }, []);

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowDivEl.current) {
      const { scrollLeft, clientWidth } = rowDivEl.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth - 500
          : scrollLeft + clientWidth - 500;

      rowDivEl.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="text-[#dfdede] hover:text-white transition duration-200 shadow-lg font-semibold cursor-pointer w-56 text-sm md:text-2xl">
        {title}
      </h2>

      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          className={`absolute top-0 bottom-0 m-auto h-9 w-9 md:h-12 md:w-12 left-2 z-40 cursor-pointer hover:scale-125 opacity-0 transition group-hover:opacity-100 ${
            !isMoved && "hidden"
          }`}
          onClick={() => handleClick("left")}
        />
        <div
          className="flex space-x-0.5 md:space-x-2.5 overflow-x-scroll md:p-2 scrollbar-hide"
          ref={rowDivEl}
        >
          {movies.map((movie) => (
            <Thumbnail
              key={movie.id}
              movie={movie}
              handleShowModal={() => handleShow(movie)}
            />
          ))}
          <ChevronRightIcon
            className="absolute top-0 bottom-0 m-auto h-9 w-9 md:h-12 md:w-12 right-2 z-40 cursor-pointer hover:scale-125 opacity-0 transition group-hover:opacity-100"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Row;
