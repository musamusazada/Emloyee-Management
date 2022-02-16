import React, { useState } from "react";
import styles from "./Employee.module.css";
export default function Employee(props) {
  const [toggleCard, setToogleCard] = useState(props.isCollapsed);

  const toggleCardHandler = () => {
    setToogleCard(!toggleCard);
  };
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div
        className={
          toggleCard ? styles.employeeCard + " hide" : styles.employeeCard
        }
        onClick={toggleCardHandler}
      >
        <button className={styles.delButton}>Delete</button>
        <p className={styles.employeeCard__country}>{props.location.country}</p>
        <div
          className={
            styles.employeeCard__profile +
            " d-flex justify-content-center justify-content-lg-start align-items-center flex-column flex-lg-row"
          }
        >
          <div className={styles.employeeCard__pImage}>
            <img src={props.picture.medium} alt="Profile" />
          </div>
          <div className="d-flex flex-column">
            <div className={styles.employeeCard__fullName}>
              {props.name.first + " " + props.name.last}
            </div>
          </div>
        </div>
        <div className={styles.employeeCard__infoTitle}>Employement Info</div>
        <div className="d-flex flex-column">
          <div className="field d-flex">
            <div className="label">Phone</div>
            <div className="fieldData">{props.phone}</div>
          </div>
          <div className="field d-flex">
            <div className="label">Registered Date</div>
            <div className="fieldData">
              {new Date(props.registered.date).toLocaleString("en-US", {
                year: "numeric",
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
