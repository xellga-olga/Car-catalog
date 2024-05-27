import { useContext, useState } from "react";
import styles from "./Home.module.css";
import CarItem from "./car-item/CarItem";
import { cars as carsData } from "./cars.data.js";
import CarForm from "./create-car-form/CarForm";
import { AuthContext } from "../../../providers/AuthProvider.jsx";

function App() {
  const [cars, setCars] = useState(carsData);

  const {user, setUser} = useContext(AuthContext)


  return (
    <div className={styles.container}>
      <h1>Cars Catalog</h1>
      {user ? (
        <>
          <h2>Welcome, {user.name}!</h2>
          <button onClick={() => setUser(null)}>Logout</button>
        </>
      ) : (
        <button className={styles.logButton} onClick={() => setUser({ name: "Max" })}>Login</button>
      )}

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
