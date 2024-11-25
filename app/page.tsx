"use client";
import Link from "next/link";
import useData from "./(hooks)/use-data";

export default function Home() {
  const appName = useData((state) => state.appName);
  const setAppName = useData((state) => state.setAppName);

  return (
    <div className="flex flex-col items-center justify-center mx-auto my-2 p-2">
      <h1 className="text-4xl my-2 font-bold mb-4">Zustand OnChange State</h1>
      <input
        className="border rounded-lg w-1/2 dark:text-black border-gray-300 p-1"
        type="text"
        placeholder="Enter Something"
        value={appName}
        onChange={(e) => setAppName(e.target.value)}
      />
      <br />
      <h1 className="text-3xl font-bold mb-2 text-center">{appName}</h1>
      <span className="flex flex-row text-lg">
        Check out the GitHub repo from&nbsp;
        <Link
          href={"https://github.com/AVidhanR/ZustandExp"}
          className="hover:underline font-bold"
          target="_blank"
        >
          here
        </Link>
      </span>
      <span className="flex flex-row text-lg">
        Check out the Zustand Form example from&nbsp;
        <Link href={"/zustand-form"} className="hover:underline font-bold">
          here
        </Link>
      </span>
    </div>
  );
}
