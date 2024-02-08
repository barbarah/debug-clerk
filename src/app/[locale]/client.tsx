"use client";

import { useUser } from "@clerk/nextjs";

export default function Client() {
  const {user} = useUser();

  return (
    <>
      {user ? (
        <h2>{`Welcome, ${user.firstName}`}</h2>
      ) : (
        <h2>{`You are not signed in`}</h2>
      )}
    </>
  )
}