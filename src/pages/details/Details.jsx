import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styles from "./Details.module.css";
import { useFetch } from "../../hooks/useFetch";

function Details() {
  const { id } = useParams();

  let url = `https://json-server-vercel-nine-xi.vercel.app/tarifler/${id}`;

  const { data: tarif } = useFetch(url);

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
            <Link to={tarif.url} className={styles.button}>
              Tarif İncele
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Details;
