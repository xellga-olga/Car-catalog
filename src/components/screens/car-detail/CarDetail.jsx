import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { cars as carsData } from "../home/cars.data";
import styles from "./CarDetail.module.css";

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    if (!id) return;

    const carData = carsData.find((car) => car.id === parseInt(id));
    setCar(carData);
  }, [id]);

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{car.name}</h2>
      <p className={styles.price}>Price: ${car.price.toLocaleString()}</p>
      <img className={styles.image} src={car.image} alt={car.name} />
      <Link to='/' className={styles.backButton}> Back </Link>
    </div>
  );
};

export default CarDetail;
