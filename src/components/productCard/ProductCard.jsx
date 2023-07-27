import React from "react";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
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
          <Link to={`/tarifler/${tarif.id}`} className="btn btn-primary">
            Tarifi incele
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
