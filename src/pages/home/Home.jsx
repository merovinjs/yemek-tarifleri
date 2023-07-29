import React from "react";
import ProductCard from "../../components/productCard/ProductCard";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const [tarifler, settarifler] = useState("");
  const url = "https://yemek-tarifleri-node-js.vercel.app/getPosts";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => settarifler(data.getpost));
  }, []);

  console.log(tarifler);
  return (
    <div className="card-group">
      {tarifler &&
        tarifler.map((tarif) => <ProductCard tarif={tarif} key={tarif._id} />)}
    </div>
  );
}

export default Home;
