import React from "react";
import ProductCard from "../../components/productCard/ProductCard";
import { useFetch } from "../../hooks/useFetch";

function Home() {
  const url = "http://localhost:3000/tarifler";
  const { data: tarifler, isLoading, error } = useFetch(url);

  return (
    <div className="card-group">
      {isLoading && <h1>Loading...</h1>}
      {error && <h1 className="text-danger">Hata</h1>}
      {tarifler &&
        tarifler.map((tarif) => <ProductCard tarif={tarif} key={tarif.id} />)}
    </div>
  );
}

export default Home;
