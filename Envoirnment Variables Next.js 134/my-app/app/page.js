"use client"

import Image from "next/image";

export default function Home() {
  
  // console.log("The ID is ",process.env.ID)
  // console.log("The Secret is ",process.env.SECRET)

  return (
   <div>
     Heyy this is home
     <br />
     The id is {process.env.NEXT_PUBLIC_ID}
     <br />
     The Secret is {process.env.SECRET}
   </div>
  );
}
