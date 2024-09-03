import axios from "axios";
import { useState } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import Excelsheet from "@/components/excelsheet";

export default function Admin() {
  const [accesskey, setAccesskey] = useState();
  const [loading, setLoading] = useState(false);
  const [response, setRes] = useState();

  function handlechange(e) {
    setAccesskey({
      key: e.target.value,
    });
  }

  async function handlesubmit() {
    setLoading(true);
    await axios
      .post("/api/LgXZXiCvQSqzOwA", accesskey)
      .then((res) => setRes(res.data.data), console.log(response));
    setLoading(false);
  }
  return (
    <div className="grid justify-items-center ">
      <div>
        <input type="password" className="m-1" onChange={handlechange}></input>
        <button className="m-1 bg-[#1E2A5E]" onClick={handlesubmit}>
          submit
        </button>
      </div>
      {loading ? <ProgressSpinner /> : null}
      <div className="bg-gradient-to-b from-[#3e55cd] to-[#1c2033] grid justify-items-center">
        {response && <Excelsheet excelData={response} fileName={"Excel Export"}/>}
        {response ? (
          <table className="table-auto border-collapse ">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Dept</th>
                <th>Batch</th>
                <th>Pref1</th>
                <th>Pref2</th>
                <th>Pref3</th>
              </tr>
            </thead>
            <tbody>
              {response.map((user) => {
                return (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.dept}</td>
                    <td>{user.batch}</td>
                    <td>{user.pref1}</td>
                    <td>{user.pref2}</td>
                    <td>{user.pref3}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
}
