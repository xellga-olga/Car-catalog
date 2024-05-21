/* eslint-disable react/prop-types */
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
        <p>${car.price}</p>
        <button>Read more</button>
      </div>
    </div>
  );
}

export default CarItem;
 