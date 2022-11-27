import React, { useEffect, useState } from "react";
import MuiModal from "@mui/material/Modal";
import { Box, Typography } from "@mui/material";
import { XIcon } from "@heroicons/react/outline";
import { Movie } from "../typings";
import Image from "next/image";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Props {
  showModal: boolean;
  handleShow?: () => void;
  handleClose: () => void;
  modalMovie: any;
}

const Modal = ({ showModal, handleShow, handleClose, modalMovie }: Props) => {
  // useEffect(() => {
  //   if (!movie) return;

  //   async function fetchMovies() {
  //     const data = await fetch(
  //       `https://api.themoviedb.org/3/${
  //         movie?.media_type === "tv" ? "tv" : "movie"
  //       }/${movie?.id}?api_key=${
  //         process.env.NEXT_PUBLIC_API_KEY
  //       }&language=en-US&append_to_response=videos`
  //     )
  //       .then((response) => response.json())
  //       .catch((err) => console.log(err.message));

  //       if(data?.videos) {
  //         const index = data.videos
  //       }

  //   }
  //   fetchMovies();
  // }, [movie]);

  console.log(modalMovie.poster_path, modalMovie.backdrop_path);

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <>
        <button
          onClick={handleClose}
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818]"
        >
          <XIcon className="h-6 w-6" />
        </button>
        <div className="flex justify-between mt-20 md:justify-around">
          <div className="w-[400]">
            <p className="text-lg font-semibold">{modalMovie.title}</p>
            <Image
              src={`https://image.tmdb.org/t/p/w500/${
                modalMovie.backdrop_path || modalMovie.poster_path
              }`}
              layout="fixed"
              width={250}
              height={250}
              className="rounded-sm md:rounded object-cover"
            />
          </div>
          <div className="max-w-sm space-y-10">
            <p className="leading-relaxed">{modalMovie.overview}</p>

            <p>Vote Average: {modalMovie.vote_average}</p>
            <p>Vote Count: {modalMovie.vote_count}</p>
          </div>
        </div>
      </>
    </MuiModal>
  );
};

export default Modal;
