// "use client"
import Image from "next/image";

export default function Home() {
// console.log("the id is ", process.env.ID);
// console.log("the secret is ", process.env.SECRET);

  return(
    <div>
      it is home page. The id is {process.env.NEXT_PUBLIC_ID} and the secret is {process.env.SECRET} {process.env.NAME}
    </div>
  );
}
