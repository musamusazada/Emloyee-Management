import React from "react";
import Employee from "../Employee/Employee";

export default function EmployeeWrapper(props) {
  return (
    <div className="row">
      <h2 className="col-12">List of Employees</h2>
      {props.employeeList.map((user) => {
        return <Employee isCollapsed={true} {...user} />;
      })}
    </div>
  );
}
