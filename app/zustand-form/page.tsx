"use client";
import React from "react";
import useData from "../(hooks)/use-data";
import Link from "next/link";

export default function AppForm() {
  const { appName, appDescription, setAppName, setAppDescription } = useData(
    (state) => state
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const appName = formData.get("appName") as string;
    const appDescription = formData.get("appDescription") as string;

    setAppName(appName);
    setAppDescription(appDescription);

    console.log("Form Data: ", appName, appDescription);

    e.currentTarget.reset();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center mx-auto my-2 p-2 gap-2"
    >
      <h1 className="text-4xl font-bold mb-4">Zustand Form</h1>
      <input
        className="w-1/4 border rounded-lg border-gray-300 p-1 my-2 dark:text-black"
        type="text"
        name="appName"
        placeholder="Enter App Name"
        required
      />
      <input
        className="w-1/4 border rounded-lg border-gray-300 p-1 dark:text-black"
        type="text"
        name="appDescription"
        placeholder="Enter App Description"
        required
      />
      <button
        className="bg-black dark:bg-white dark:text-black text-white border-1 rounded-lg p-1.5 my-2 mx-auto"
        type="submit"
      >
        Submit
      </button>
      <span className="flex flex-row text-lg">
        Check out the GitHub repo from&nbsp;
        <Link
          href={"https://github.com/AVidhanR/ZustandExp"}
          className="hover:underline font-black"
          target="_blank"
        >
          here
        </Link>
      </span>
      <Link href={"/"} className="hover:underline font-bold text-lg">
        Return Home
      </Link>
      Check the result from below:
      <h1 className="text-3xl font-bold">
        {appName} <br /> {appDescription}
      </h1>
    </form>
  );
}
