import Image from "next/image";
import React, { FunctionComponent } from "react";
import AddToCart from "./AddToCart";

export interface IProduct {
  name: string;
  adjective: string;
  img: string;
  desc: string;
}

export const ProductCard: FunctionComponent<IProduct> = ({
  img,
  name,
  adjective,
  desc,
}) => {
  return (
    <article className="card bg-base-100 shadow-xl h-56 flex flex-col overflow-hidden">
      <Image
        alt={`product-${name}`}
        src={img}
        width={100}
        height={200}
        className="object-cover h-1/2 w-full shrink-0"
      />
      <div className="flex flex-col p-3 gap-2 ">
        <div className="flex-col gap-1 flex-1">
          <p className="font-bold text-base line-clamp-1 ">{name}</p>
          <p className="text-xs line-clamp-2">{desc}</p>
        </div>

        <div className="flex justify-between self-end w-full">
          <AddToCart />
          <p className="badge badge-secondary shrink-0 badge-outline self-end">
            {adjective}
          </p>
        </div>
      </div>
    </article>
  );
};
