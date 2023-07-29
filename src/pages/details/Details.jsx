import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styles from "./Details.module.css";

function Details() {
  const { id } = useParams();

  const [tarif, settarif] = useState("");

  useEffect(() => {
    async function fetchData() {
      let url = `https://yemek-tarifleri-node-js.vercel.app/getDetail/${id}`;
      try {
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          if (data.detailPost) {
            settarif(data.detailPost);
          } else {
            console.error("Veri beklenen formatta değil");
          }
        } else {
          console.error("API çağrısı başarısız");
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="row mt-3">
      {tarif && (
        <>
          <div className="col-4">
            <img src={tarif.resim} alt="" className="img img-fluid rounded" />
          </div>
          <div className="col-8 mb-3">
            <h1>{tarif.baslik}</h1>
            <p>{tarif.aciklama}</p>
            <ul>
              {tarif.malzemeler.map((malzeme, index) => (
                <li key={index}>{malzeme}</li>
              ))}
            </ul>
          </div>
          <hr />
          <div className="col-12">
            <p>{tarif.hazirlanisi}</p>
            <Link to={`/getDetail/${id}`} className={styles.button}>
              Tarif İncele
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Details;
