import Link from "next/link";
import { IProduct, ProductCard } from "./modules";

// TODO: create model for API
export default async function Home() {
  const res = await fetch(
    "https://6496d22983d4c69925a3234f.mockapi.io/api/v1/product",
    {
      headers: {
        "content-type": "application/json",
      },
      next: {
        revalidate: 10,
      },
    }
  );

  const data: IProduct[] = await res.json();

  return (
    <section className="grid grid-cols-fill-220 gap-4 p-4">
      {data.map((product) => {
        return <ProductCard key={product.name} {...product} />;
      })}
    </section>
  );
}
