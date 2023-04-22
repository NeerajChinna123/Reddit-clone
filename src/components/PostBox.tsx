import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Avatar from "./Avatar";
import { PhotoIcon, LinkIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

type FormData = {
  postTitle: string;
  postBody: string;
  postImage: string;
  subreddit: string;
};

function PostBox() {
  const { data: session } = useSession();

  const [imageOpen, setImageOpen] = useState<boolean>(false);

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  console.log('errors : ',Object.keys(errors).length); 

  const onSubmit = handleSubmit(async(formdata)=>{
      console.log('f-d',formdata);
  })

  return (
    <form onSubmit={onSubmit} className="sticky mt-12 z-50 p-4 rounded-md border border-gray-100 bg-white">
      <div className="flex items-center space-x-3">
        <Avatar seed="asasdasdasxasx" />
        <input
          {...register("postTitle", { required: true })}
          className="flex-1 bg-gray-50 p-2 pl-5 outline-none"
          disabled={!session}
          type="text"
          placeholder={
            session ? "Create a post by entering the title " : "Signin to post"
          }
        />
        <PhotoIcon
          onClick={() => setImageOpen(!imageOpen)}
          className={`h-5 w-5  cursor-pointer ${
            imageOpen ? "text-blue-300 " : "text-gray-400 "
          }`}
        />
        <LinkIcon className="h-5 w-5 text-gray-400 cursor-pointer" />
      </div>
      {!!watch("postTitle") && (
        <div className="flex flex-col py-2">
          <div className="flex items-center space-x-3 px-2">
            <p className="min-w-[90px]">Body :</p>
            <input
              className="m-2 flex-1 bg-blue-50 p-2 rounded-md outline-none "
              {...register("postBody")}
              type="text"
              placeholder="Text (optional)"
            ></input>
          </div>

          <div className="flex items-center space-x-3 px-2">
            <p className="min-w-[90px]">subReddit :</p>
            <input
              className="m-2 flex-1 bg-blue-50 p-2 rounded-md outline-none "
              {...register("subreddit", { required: true })}
              type="text"
              placeholder="Text (required)"
            ></input>
          </div>

          {imageOpen && (
            <div className="flex items-center space-x-3 px-2">
              <p className="min-w-[90px]">Image Url :</p>
              <input
                className="m-2 flex-1 bg-blue-50 p-2 rounded-md outline-none"
                {...register("postImage")}
                type="text"
                placeholder="Text (optional)"
              ></input>
            </div>
          )}

          {Object.keys(errors).length > 0 && (
            <div className="space-y-2 p-2 text-red-500">
              {errors.postTitle?.type === "required" && (
                <p>- A Post Title is required</p>
              )}
              {errors.subreddit?.type === "required" && (
                <p>- A Sub Reddit is required</p>
              )}
            </div>
          )}

          {!!watch("postTitle") && (
            <button
              type="submit"
        
              className="w-full mt-3 rounded-full bg-blue-500 text-white p-4"
            >
              Create Post
            </button>
          )}
        </div>
      )}
    </form>
  );
}

export default PostBox;
