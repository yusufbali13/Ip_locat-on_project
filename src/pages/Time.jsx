import React, { useContext } from "react";
import { IP_Context } from "../context/UserIPAddress";

export const Time = () => {
  const { ipdata } = useContext(IP_Context);

  const { time } = ipdata;

  return (
    <div className="col-sm-4 col-md-4 m-auto cardTable">
      <table
        className="table table-borderless table-dark text-center m-auto"
        width={25}
      >
        <thead>
          <tr>
            <th>Timezone</th>
            <td>{time?.timezone}</td>
          </tr>
          <tr>
            <th>GMT Offset</th>
            <td>{time?.gmt_offset}</td>
          </tr>
          <tr>
            <th>Abbreviation</th>
            <td>{time?.code}</td>
          </tr>
        </thead>
      </table>
    </div>
  );
};
