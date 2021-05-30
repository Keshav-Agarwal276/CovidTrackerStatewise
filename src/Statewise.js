import React, { useEffect, useState } from "react";
function Statewise() {
  const [dataa, setData] = useState([]);
  const getCovidData = async () => {
    const dat = await fetch("https://api.covid19india.org/data.json");
    const actualData = await dat.json();
    setData(actualData.statewise);
    // console.log(actualData.statewise);
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="text-center mt-5 mb-5">
          <h1>COVID19 TRACKER</h1>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              {dataa.map((curr, ind) => {
                return (
                  <tr key={ind}>
                    <td>{curr.state}</td>
                    <td>{curr.confirmed}</td>
                    <td>{curr.recovered}</td>
                    <td>{curr.deaths}</td>
                    <td>{curr.active}</td>
                    <td>{curr.lastupdatedtime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Statewise;
