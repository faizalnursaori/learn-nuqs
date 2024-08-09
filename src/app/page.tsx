"use client";

import { SearchBar } from "@/components/searchbar";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  thumbnail: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <SearchBar onSearch={setSearch} />
      <div className="grid grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            <h1>{product.title}</h1>
            <Image src={product.thumbnail} alt={product.title} width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
}
