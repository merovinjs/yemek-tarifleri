import React from "react";
import styles from "./ProductCard.module.css";
function ProductCard({ tarif }) {
  return (
    <div className="col-3">
      <div className="card m-3">
        <img
          src={tarif.resim}
          className="card-img-top"
          alt={tarif.baslik}
        ></img>
        <div className="card-body">
          <h5 className="card-title">{tarif.baslik}</h5>
          <p className={styles.acıklama}>{tarif.açıklama}</p>
          <a href={tarif.url} className="btn btn-primary">
            Tarifi incele
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
