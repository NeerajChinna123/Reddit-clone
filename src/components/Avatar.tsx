import React from 'react'
import Image from 'next/image'
import { signIn, signOut, useSession } from "next-auth/react";

type Props = {
    seed?:string;
}

function Avatar(props:Props) {
  const {data:session} = useSession();
  return (
    <div className={`relative h-10 w-10 rounded-full p-1 overflow-hidden border-gray-300 bg-white`}>
      <Image width={60} height={60} src={`https://avatars.dicebear.com/api/open-peeps/${session?.user?.name || 'placeholder' || props?.seed}.svg`}  alt=""/>
    </div>
  )
}

export default Avatar