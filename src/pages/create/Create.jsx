import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

function Create() {
  const [baslik, setBaslik] = useState("");
  const [aciklama, setAciklama] = useState("");
  const [malzeme, setMalzeme] = useState("");
  const [malzemeler, setMalzemeler] = useState([]);
  const [hazirlanisi, setHazirlanisi] = useState("");
  const [resim, setResim] = useState("");
  const [url, seturl] = useState("");
  const malzemeinput = useRef(null);
  const { postData } = useFetch("http://localhost:3000/tarifler", "POST");
  const handeleSubmit = (e) => {
    e.preventDefault();
    postData({ baslik, aciklama, malzemeler, hazirlanisi, resim, url });
  };
  const handleMalzemeler = (e) => {
    const item = malzeme.trim();
    if (item && !malzemeler.includes(item)) {
      setMalzemeler((prevmalzeler) => [...prevmalzeler, item]);
    }
    setMalzeme("");
    malzemeinput.current.focus();
    malzemeinput.current.value = "";
  };
  return (
    <div className="card-body mt-4 p-5 bg-light">
      <h3 className="card-title">Create</h3>
      <p className="card-text">Create a new post</p>

      <form onSubmit={handeleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="baslik">Başlık</label>
          <input
            type="text"
            className="form-control"
            id="baslik"
            onChange={(e) => setBaslik(e.target.value)}
          />
          <label htmlFor="aciklama">Açıklama</label>
          <input
            type="text"
            className="form-control"
            id="aciklama"
            onChange={(e) => setAciklama(e.target.value)}
          />
          <label htmlFor="malzemeler">
            Malzemeler:
            <ul>
              {malzemeler.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </label>
          <div className="input-group mb-3">
            <input
              ref={malzemeinput}
              type="text"
              name="malzeme"
              className="form-control"
              onChange={(e) => setMalzeme(e.target.value)}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleMalzemeler}
            >
              +
            </button>
          </div>
          <label htmlFor="hazirlanisi">Hazirlanisi</label>
          <textarea
            type="text"
            className="form-control"
            id="hazirlanisi"
            onChange={(e) => setHazirlanisi(e.target.value)}
          />
          <label htmlFor="resim">Resim</label>
          <input
            type="text"
            className="form-control"
            id="resim"
            onChange={(e) => setResim(e.target.value)}
          />
          <label htmlFor="Url">Url</label>
          <input
            type="text"
            className="form-control"
            id="Url"
            onChange={(e) => seturl(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
