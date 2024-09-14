import { useRouter } from "next/router";
import { useState } from "react";
import { Dialog } from "primereact/dialog";

export default function Home() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);
  const [modal6, setModal6] = useState(false);
  const [modal7, setModal7] = useState(false);
  const [modal8, setModal8] = useState(false);
  const [modal9, setModal9] = useState(false);
  const [modal10, setModal10] = useState(false);
  const [modal11, setModal11] = useState(false);
  const [modal12, setModal12] = useState(false);
  const router = useRouter();

  return (
    <>
      <main className=" grid place-content-center ">
        <div className="text-3xl md:text-9xl my-52 ">Registration Closed!</div>
      </main>
    </>
  );
}
