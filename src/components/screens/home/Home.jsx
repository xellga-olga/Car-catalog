import { useState } from "react";
import styles from "./Home.module.css";
import CarItem from "./car-item/CarItem";
import { cars as carsData } from "./cars.data.js";
import CarForm from "./create-car-form/CarForm";

function App() {
  const [cars, setCars] = useState(carsData);

  return (
    <div className={styles.container}>
      <h1>Cars Catalog</h1>
      <CarForm setCars={setCars} />
      <div className={styles.container_cars}>
        {cars.length ? (
          cars.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          <p>There are no cars</p>
        )}
      </div>
    </div>
  );
}

export default App;
