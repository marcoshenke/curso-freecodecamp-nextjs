"use client";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const [data, setData] = useState("nothing");
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    setData(res.data.data._id);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile page</p>
      <h2>
        {data === "nothing" ? (
          "Não há dados sobre o usuário"
        ) : (
          <Link href={`/profile`}></Link>
        )}
      </h2>
      <button
        onClick={logout}
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-whit font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
}
