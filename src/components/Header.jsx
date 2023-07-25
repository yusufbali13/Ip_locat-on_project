import React from "react";
import { useContext, useState } from "react";
import { IP_Context } from "../context/UserIPAddress";
import { FcSearch } from "react-icons/fc";
import { AiOutlineWifi } from "react-icons/ai";
import { NavigationBars } from "./NavigationBars";

export const Header = () => {
  const { setuserip } = useContext(IP_Context);
  const { searched, setsearched } = useContext(IP_Context);
  const [inputdata, setinputdata] = useState("");

  const handleKeyDown = (e) => {
    if (inputdata !== "" && e.keyCode === 13) {
      handleSubmit();
    }
  };

  const handleSubmit = (e) => {
    //e.preventDefault();

    if (inputdata) {
      setuserip(inputdata);

      setsearched([...searched, inputdata]);

      setinputdata("");
    }
  };

  return (
    <>
      <div className="container m-auto text-center p-4 search">
        <div className="text-center  p-5">
          <h3>With Your IP Address Country Information</h3>
        </div>

        <div className="row">
          <div className="col wifiIcon">
            <AiOutlineWifi size={25} />
          </div>

          <div className="col-sm-4">
            <form action="">
              <input
                type="search"
                placeholder="Your IP Address"
                required
                value={inputdata}
                onChange={(e) => setinputdata(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </form>
          </div>

          <div className="col btnSearch">
            <FcSearch size={30} type="button" onClick={handleSubmit} />
          </div>
        </div>
      </div>

      <NavigationBars />
    </>
  );
};
