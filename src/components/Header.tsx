import React from "react";
import Image from "next/image";
import {
  BeakerIcon,
  HomeIcon,
  ChevronDownIcon,
  SparklesIcon,
  GlobeAltIcon,
  PaperAirplaneIcon,
  BellIcon,
  VideoCameraIcon,
  PlusIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/solid";
import {
  CameraIcon,
  MagnifyingGlassCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();
  return (
    <div className="flex sticky top-0 z-50 bg-white px-4 py-2 shadow-sm border-gray-100">
      <div>
        <Image
          className="cursor-pointer flex-shrink-0"
          src="/reddit.png"
          width={60}
          height={60}
          objectFit="contain"
          alt=""
        />
      </div>
      <div className="flex mx-7 items-center  xl:min-w-[300px]">
        <HomeIcon className="text-black h-5 w-5" />
        <p className="flex-1 ml-2 hidden lg:inline-block">Home</p>
        <ChevronDownIcon className="h-5 w-5 text-black" />
      </div>
      <form className="bg-gray-200 px-2 py-1 flex-1 ml-2 items-center flex rounded-md">
        <MagnifyingGlassCircleIcon className="text-gray-500 h-10 w-10" />
        <input
          placeholder="Search-Reddit"
          className="flex-1 py-2 ml-2 px-2 outline-none bg-gray-100 rounded-md"
        />
        <button type="submit" hidden></button>
      </form>
      <div className="hidden lg:inline-flex items-center ml-2 space-x-2 text-gray-500 ">
        <SparklesIcon className="icon" />
        <GlobeAltIcon className="icon" />
        <CameraIcon className="icon" />
        <hr className="h-10 border border-gray-100"></hr>
        <PaperAirplaneIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerWaveIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <Bars3Icon className="icon" />
      </div>

      {!session ? (
        <div
          onClick={() => signIn()}
          className="hidden lg:flex items-center p-2 border-gray-100 border space-x-2 cursor-pointer"
        >
          <div className="relative flex-shrink-0">
            <Image
              width={20}
              height={20}
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/52/52053.png"
            />
          </div>
          <div>
            <p className="text-gray-600">Sign In</p>
          </div>
        </div>
      ) : (
        <div
          onClick={() => signOut()}
          className="hidden lg:flex items-center p-2 border-gray-100 border space-x-2 cursor-pointer"
        >
          <div className="relative flex-shrink-0 space-x-2">
            <Image
              width={20}
              height={20}
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/52/52053.png"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-gray-600">{session?.user?.name}</p>
            <p className="text-gray-400">Karma 1</p>
          </div>
          <ChevronDownIcon className="h-5 w-5 flex-shrink-0"/>
        </div>
      )}
    </div>
  );
}

export default Header;
