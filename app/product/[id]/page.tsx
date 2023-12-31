import PriceFormat from "@/utils/PriceFormat";
import Image from "next/image";
import React from "react";
import AddCart from "./AddCart";

interface Props {
  searchParams: {
    id: number;
    name: string;
    image: string;
    description: string | null;
    unit_amount: number;
    quantity: number | 1;
  };
}

const page = async ({ searchParams }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-16 ">
      <Image
        src={searchParams.image}
        alt={searchParams.name}
        height={600}
        width={600}
        className="w-full h-96 object-contain rounded-lg"
        priority={true}
      />
      <div className="font-medium">
        <h1 className="text-2xl py-2">{searchParams.name}</h1>
        <h2 className="py-2">{searchParams.description}</h2>

        <div className="flex gap-2">
          <p className="font-bold text-primary">
            {searchParams && PriceFormat(searchParams.unit_amount)}
          </p>
        </div>
        <AddCart {...searchParams} />
      </div>
    </div>
  );
};

export default page;
