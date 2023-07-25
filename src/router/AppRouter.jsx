import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Location } from "../pages/Location";
import { Time } from "../pages/Time";
import { Country } from "../pages/Country";
import { More } from "../pages/More";
import { Header } from "../components/Header";
import { useState, useEffect } from "react";
import { IP_Context } from "../context/UserIPAddress";
import axios from "axios";
import { Searched } from "../components/Searched";

export const AppRouter = () => {
  const [userip, setuserip] = useState("101.44.220.0");
  const [ipdata, setipdata] = useState("");
  const [searched, setsearched] = useState([]);

  const getData = async () => {
    try {
      const res = await axios(
        `https://api.getgeoapi.com/v2/ip/${userip}?api_key=6fe716c83dcc675fd1459099f2107edf17efb97c`
      );

      setipdata(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (userip) {
      getData();
    }
  }, [userip]);

  return (
    <>
      <IP_Context.Provider
        value={{ userip, setuserip, ipdata, setipdata, searched, setsearched }}
      >
        <Header />

        <Routes>
          <Route index element={<Location />} />
          <Route path="time" element={<Time />} />
          <Route path="country" element={<Country />} />
          <Route path="more" element={<More />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <Searched />
      </IP_Context.Provider>
    </>
  );
};
