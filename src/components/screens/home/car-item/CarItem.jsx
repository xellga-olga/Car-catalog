/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./Cartitem.module.css";

function CarItem({ car }) {
  return (
    <div className={styles.item}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${car.image})`,
        }}
      />
      <div className={styles.info}>
        <h2>{car.name}</h2>
        <p>${car.price.toLocaleString()}</p>
        <Link to={`/car/${car.id}`}>
          <button>Read more</button>
        </Link>
      </div>
    </div>
  );
}

export default CarItem;
