import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/header";
import "./courses.css";

function Courses() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://coursesnodejs.herokuapp.com/employee/course?limit=5&page=1",
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  });
  return (
    <div>
      <Header />
    </div>
  );
}
export default Courses;
