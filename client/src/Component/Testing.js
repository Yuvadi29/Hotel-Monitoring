import React, { useState, useEffect } from "react";
import axios from "axios";

import "./styles.css";

export default function Testing() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await axios.get("https://api.thingspeak.com/channels/1976530/feeds.json");

        const entries = response.data.feeds.map((entry) => (
          {
            field1: entry.field1,
            entry_id: entry.entry_id
          }));
          
        setData(entries);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPost();
  }, []);

  // const fetchPost =  () => {

  // axios.all([axios.get(`https://api.thingspeak.com/channels/1976530/fields/1.json?results=2`)])

  //   .then(axios.spread((reponsefeed) => {
  //     console.log(reponsefeed.data);
  //   }))
  //    .catch(error => console.log(error));
  // }
  return (
    <>
      {/* {data ? ( */}
      {data.map((entry) => (
        <div key={entry.entry_id} className="datashow">
          <table>
            <tr>
              <th className="Field">Field1: <td>{entry.field1}</td></th>
              <th className="Entry_id">EntryID: <td>{entry.entry_id}</td></th>

            </tr>
          </table>
        </div>
      ))}
      {/* ) : ( */}
      {/* <p>Loading..</p> */}
      {/* )} */}
    </>
  );
}