import { useState } from "react";
import { useRouter } from "next/router";

export default function RegistrationPage1() {
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});
  const router = useRouter();

  function handlechange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handlenext() {
    if (!user.name || !user.email || !user.phone || !user.dept || !user.batch) {
      // toast.error("Fill all the fields to submit")
      setError(true);
      console.log("err");
    } else {
      localStorage.setItem("regPage1", JSON.stringify(user));
      router.push("/reg2");
    }
  }

  return (
    <div className=" grid justify-items-center">
      <div className="m-2">
        <div>Name</div>
        <input type="text" name="name" onChange={handlechange} />
      </div>
      <div className="m-2">
        <div>Email</div>
        <input type="text" name="email" onChange={handlechange} />
      </div>
      <div className="m-2">
        <div>Phone</div>
        <input type="text" name="phone" onChange={handlechange} />
      </div>
      <div className="m-2">
        <div>Department</div>
        <select name="dept" onChange={handlechange}>
          <option disabled selected="true">SELECT</option>
          <option value={"chemical"}>Chemical</option>
          <option value={"cs"}>Computer Science</option>
          <option value={"eee"}>Electrical And Elecetronics</option>
          <option value={"mech"}>Mechanical</option>
          <option value={"ece"}>Electronics and Communication</option>
          <option value={"arch"}>Architecture</option>
          <option value={"er"}>Electrical And Computer</option>
          <option value={"civil"}>Civil</option>
        </select>
      </div>
      <div className="m-2">
        <div><span>Batch</span><span className="text-gray-300 text-xs"> (eg:R3A)</span></div>
        <input type="text" name="batch" onChange={handlechange} />
      </div>
      <div className="m-2  w-48 text-right ">
        <a onClick={handlenext} className="flex justify-center p-2 border-3 rounded-xl font-bold font-montserrat  bg-[#3C4DA5] cursor-pointer">
          <span className="cursor-pointer ">Next</span>
          <span className="">
            <img src="Expand_right.png" className="w-6" />
          </span>
        </a>
      </div>
      {error ? <div className="text-red-600 text-sm animate-pulse"> Please fill all fields</div> : null}
    </div>
  );
}
