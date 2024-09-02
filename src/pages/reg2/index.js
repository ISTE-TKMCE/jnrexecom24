import { useEffect, useState } from "react";
import axios from "axios";
import { Dialog } from "primereact/dialog";
import { ProgressSpinner } from "primereact/progressspinner";

export default function RegistrationPage2() {
  const [user, setUser] = useState({});
  const [submit, setSubmit] = useState("");
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("regPage1")));
  }, []);

  function handlechange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  async function handlesubmit() {
    if (!user.email || !user.pref1 || !user.pref2 || !user.pref3) {
      setError(true);
    } else {
      setVisible(true);
      await axios
        .post("/api/test", user)
        .then((res) => setSubmit(res.data.result), setError(false));
    }
  }

  return (
    <div className=" grid justify-items-center ">
      <div className="m-2">
        <div>Preference 1</div>
        <select name="pref1" onChange={handlechange}>
          <option disabled selected="true">
            SELECT
          </option>
          <option value={"PROGRAM COORDINATOR"}>PROGRAM COORDINATOR</option>
          <option value={"STUDENT REPRESENTATIVE"}>
            STUDENT REPRESENTATIVE
          </option>
          <option value={"PUBLIC RELATIONS"}>PUBLIC RELATIONS</option>
          <option value={"DOCUMENTATION"}>DOCUMENTATION</option>
          <option value={"REGISTRATION"}>REGISTRATION</option>
          <option value={"FINANCE TEAM"}>FINANCE TEAM</option>
          <option value={"UI/UX DESIGNER"}>UI/UX DESIGNER</option>
          <option value={"DESIGN TEAM"}>DESIGN TEAM</option>
          <option value={"OPERATIONS"}>OPERATIONS</option>
          <option value={"VIDEO EDITOR"}>VIDEO EDITOR</option>
          <option value={"TECH TEAM"}>TECH TEAM</option>
          <option value={"WEB TEAM"}>WEB TEAM</option>
        </select>
      </div>
      <div className="m-2">
        <div>Preference 2</div>
        <select name="pref2" onChange={handlechange}>
          <option disabled selected="true">
            SELECT
          </option>
          <option value={"PROGRAM COORDINATOR"}>PROGRAM COORDINATOR</option>
          <option value={"STUDENT REPRESENTATIVE"}>
            STUDENT REPRESENTATIVE
          </option>
          <option value={"PUBLIC RELATIONS"}>PUBLIC RELATIONS</option>
          <option value={"DOCUMENTATION"}>DOCUMENTATION</option>
          <option value={"REGISTRATION"}>REGISTRATION</option>
          <option value={"FINANCE TEAM"}>FINANCE TEAM</option>
          <option value={"UI/UX DESIGNER"}>UI/UX DESIGNER</option>
          <option value={"DESIGN TEAM"}>DESIGN TEAM</option>
          <option value={"OPERATIONS"}>OPERATIONS</option>
          <option value={"VIDEO EDITOR"}>VIDEO EDITOR</option>
          <option value={"TECH TEAM"}>TECH TEAM</option>
          <option value={"WEB TEAM"}>WEB TEAM</option>
        </select>
      </div>
      <div className="m-2">
        <div>Preference 3</div>
        <select name="pref3" onChange={handlechange}>
          <option disabled selected="true">
            SELECT
          </option>
          <option value={"PROGRAM COORDINATOR"}>PROGRAM COORDINATOR</option>
          <option value={"STUDENT REPRESENTATIVE"}>
            STUDENT REPRESENTATIVE
          </option>
          <option value={"PUBLIC RELATIONS"}>PUBLIC RELATIONS</option>
          <option value={"DOCUMENTATION"}>DOCUMENTATION</option>
          <option value={"REGISTRATION"}>REGISTRATION</option>
          <option value={"FINANCE TEAM"}>FINANCE TEAM</option>
          <option value={"UI/UX DESIGNER"}>UI/UX DESIGNER</option>
          <option value={"DESIGN TEAM"}>DESIGN TEAM</option>
          <option value={"OPERATIONS"}>OPERATIONS</option>
          <option value={"VIDEO EDITOR"}>VIDEO EDITOR</option>
          <option value={"TECH TEAM"}>TECH TEAM</option>
          <option value={"WEB TEAM"}>WEB TEAM</option>
        </select>
      </div>

      <div className="m-2 ">
        <button onClick={handlesubmit}>Confirm</button>
      </div>
      {error ? (
        <div className="text-red-600 text-sm animate-pulse">
          {" "}
          Please fill all fields
        </div>
      ) : null}
      <Dialog
        visible={visible}
        style={{ width: "300px" }}
        onHide={() => setVisible(false)}
      >
        <div className="m-0 grid place-content-center">
          {submit ? submit : <ProgressSpinner />}
        </div>
      </Dialog>
    </div>
  );
}
