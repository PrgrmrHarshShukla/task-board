"use client";

import Image from "next/image";
import { useEffect } from "react";
import getAllUsers from "./Components/home/getAllUsers";

export default function Home() {
  useEffect(() => {
    const starter = async () => {
      await getAllUsers();
    }
    starter()
  }, [])


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Task Board
    </main>
  );
}
