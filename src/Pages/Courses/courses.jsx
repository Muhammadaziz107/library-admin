import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/header";
import "./courses.css";

function Courses() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    try {
      const res = await fetch();
    } catch (err) {
      console.log(err);
    }
  });
  return (
    <div>
      <Header />
    </div>
  );
}
export default Courses;
