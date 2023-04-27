import Image from "next/image";
import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Image src={"/errorPage.png"} height={300} width={900}></Image>
      <Link href="/">
        <button className="btn btn-secondary mx-auto block my-2 p-3">Back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
