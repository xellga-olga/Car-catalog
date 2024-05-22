import React, { useState } from "react";
import styles from "./Carform.module.css";

const CarForm = ({ setCars }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const createCar = (e) => {
    e.preventDefault();

    // Add new car
    setCars((prev) => [
      { id: prev.length + 1, name, price, image },
      ...prev,
    ]);

    // Clear input
    setName("");
    setPrice("");
    setImage("");
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
      />
      <input
        className={styles.input}
        placeholder="Image URL"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <button className={styles.button} type="submit">
        Create
      </button>
    </form>
  );
};

export default CarForm;
