import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../../components/productCard/ProductCard";

function Home() {
  const [tarifler, setTarifler] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/tarifler")
      .then((res) => res.json())
      .then((data) => setTarifler(data));
  }, []);
  console.log(tarifler);
  return (
    <div className="card-group">
      {tarifler &&
        tarifler.map((tarif) => <ProductCard tarif={tarif} key={tarif.id} />)}
    </div>
  );
}

export default Home;
