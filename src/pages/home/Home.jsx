import React from "react";
import ProductCard from "../../components/productCard/ProductCard";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../../components/loading/loading";

function Home() {
  const [tarifler, settarifler] = useState("");
  const [loading, setLoading] = useState(false);

  const url = "https://yemek-tarifleri-node-js.vercel.app/getPosts";
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        settarifler(data.getpost);
        setLoading(false);
      });
  }, []);

  console.log(tarifler);
  return (
    <div className="card-group">
      {loading ? (
        <Loading />
      ) : (
        tarifler &&
        tarifler.map((tarif) => <ProductCard tarif={tarif} key={tarif._id} />)
      )}
    </div>
  );
}

export default Home;
