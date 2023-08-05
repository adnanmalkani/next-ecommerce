import Image from "next/image";
import PriceFormat from "@/utils/PriceFormat";
import Link from "next/link";

interface Props {
  name: string;
  image: string;
  unit_amount: number | null;
  id: string;
  description: string | null;
}

function Product({ name, image, unit_amount, id, description }: Props) {
  return (
    <Link
      href={{
        pathname: `/product/${id}`,
        query: { name, image, unit_amount, id, description },
      }}
    >
      <div className="text-gray-700">
        <Image
          src={image}
          alt={name}
          height={800}
          width={800}
          className="w-full h-96 object-cover rounded-lg"
        />

        <div className="font-medium py-2">
          <h2>{name}</h2>
          <h2 className="text-sm text-teal-700">
            {unit_amount ? PriceFormat(unit_amount) : "N/A"}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default Product;
