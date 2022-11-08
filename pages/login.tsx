import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  // console.log(watch("email"));

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black/75 md:bg-transparent">
      <Head>
        <title>NightMovies</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="This is a website for movies" />
      </Head>

      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      <Link href="/">
        <p className="opacity-[0.8] bg-[#fe921f]/50 text-[#ffffff] inline-block font-bold text-sm leading-3 tracking-wider mx-2 my-2 px-4 py-4 uppercase rounded-tr-lg cursor-pointer hover:text-[#141414] transition-all duration-700 w-1/3 text-center md:w-40 ">
          Night Movies
        </p>
      </Link>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 bg-black/75 rounded mt-10 mx-10 py-4 px-2 md:px-10 flex flex-col items-start  z-50 md:w-1/4 md:self-center "
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="flex-col z-999 mt-6 w-full">
          <label>
            <input
              placeholder="Enter your email"
              type="email"
              className="input"
              defaultValue="test@test.com"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-light text-orange-500">
                Username must be contain name, '@' and '.com' EX:
                'test@test.com'
              </p>
            )}
          </label>
          <label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="p-1 text-[13px] font-light text-orange-500">
                Password must be contain atleast 4 character
              </p>
            )}
          </label>
        </div>
        <button className="w-full rounded bg-[#e50914] p-2 font-semibold ">
          Sign in
        </button>
        <div className="text-sm text-[gray]">
          New to NightMovies?{" "}
          <span>
            <button className="text-white hover:underline font-semibold">
              Sign up
            </button>
          </span>{" "}
          now
        </div>
      </form>
    </div>
  );
};

export default login;
