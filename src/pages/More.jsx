import React, { useContext } from "react";
import { IP_Context } from "../context/UserIPAddress";

export const More = () => {
  const { ipdata } = useContext(IP_Context);

  const { country } = ipdata;

  let lang = [];

  function traverseObject(obj) {
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        traverseObject(obj[key]);
      } else {
        // console.log(`${key}: ${obj[key]}`);
        lang.push(`${key}: ${obj[key]}`);
      }
    }
  }

  traverseObject(country?.languages);

  return (
    <div className=" col-sm-4 col-md-4 m-auto cardTable">
      <table
        className="table table-borderless table-dark text-center m-auto"
        width={25}
      >
        <thead>
          {lang.map((item, i) => (
            <tr key={i}>
              <th>Languages {i + 1}</th>
              <td>{item}</td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
};
