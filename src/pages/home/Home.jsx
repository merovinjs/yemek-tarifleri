import React from "react";
import ProductCard from "../../components/productCard/ProductCard";
import { useFetch } from "../../hooks/useFetch";

function Home() {
  const url = "https://json-server-vercel-nine-xi.vercel.app/tarifler";
  const { data: tarifler } = useFetch(url);

  return (
    <div className="card-group">
      {tarifler &&
        tarifler.map((tarif) => <ProductCard tarif={tarif} key={tarif.id} />)}
    </div>
  );
}

export default Home;
