import Navbar from "./Components/Navbar/Navbar";
import EmployeeWrapper from "./Components/EmployeeWrapper/EmployeeWrapper";
import "./App.css";
import "./grid/bootstrapGrid.min.css";
import { useEffect, useState } from "react";

function App() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6")
      .then((results) => results.json())
      .then((data) => {
        setEmployees(data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <Navbar />
      <EmployeeWrapper employeeList={employees} />
    </div>
  );
}

export default App;
