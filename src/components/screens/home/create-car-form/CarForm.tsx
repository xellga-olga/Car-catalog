import React, { useState } from "react";
import styles from "./Carform.module.css";

const CarForm = ({ setCars }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const createCar = (e) => {
    e.preventDefault();

    if (price < 1000) {
      setError("Price must be at least 1000 and cannot be negative.");
      return;
    }

    setCars((prev) => [{ id: prev.length + 1, name, price, image }, ...prev]);

    setName("");
    setPrice("");
    setImage("");
    setError("");
  };

  return (
    <form className={styles.form} onSubmit={createCar}>
      <input
        className={styles.input}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        className={styles.input}
        type="number"
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        min="1000"
      />
      <input
        className={styles.input}
        placeholder="Image URL"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      {error && <p className={styles.error}>{error}</p>}
      <button className={styles.button} type="submit">
        Create
      </button>
    </form>
  );
};

export default CarForm;
