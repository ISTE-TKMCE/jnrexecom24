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
      <main className=" grid justify-items-center">
        <h2 className="text-xl font-bold font-montserrat">
          Call For Junior Execom
        </h2>
        <h3 className="text-xs">ELIGIBLE ONLY FOR SECOND YEARS</h3>
        <div className="grid grid-cols-2 gap-3 mt-14 font-bold text-sm md:text-base mx-3 font-montserrat">
          <button onClick={() => setModal1(true)}>PROGRAM COORDINATOR</button>
          <button onClick={() => setModal2(true)}>
            STUDENT REPRESENTATIVE
          </button>
          <button onClick={() => setModal3(true)}>PUBLIC RELATIONS</button>
          <button onClick={() => setModal4(true)}>DOCUMENTATION</button>
          <button onClick={() => setModal5(true)}>REGISTRATION</button>
          <button onClick={() => setModal6(true)}>FINANCE TEAM</button>
          <button onClick={() => setModal7(true)}>UI/UX DESIGNER</button>
          <button onClick={() => setModal8(true)}>DESIGN TEAM</button>
          <button onClick={() => setModal9(true)}>OPERATIONS</button>
          <button onClick={() => setModal10(true)}>VIDEO EDITOR</button>
          <button onClick={() => setModal11(true)}>TECH TEAM</button>
          <button onClick={() => setModal12(true)}>WEB TEAM</button>
        </div>
        <button
          className="mt-10 font-montserrat font-bold"
          onClick={() => router.push("/reg1")}
        >
          REGISTER
        </button>
        <Dialog
          header="Program Coordinator"
          visible={modal1}
          onHide={() => setModal1(false)}
          style={{ width: "85%" }}
        >
          <p>
            You are that 'green room guy'. Although you wouldn't be having a
            headset to give your orders through, you will help in the conduction
            and organization of events. You may pitch in innovative ideas for
            events and obtain permissions for these events to be conducted. You
            will also be assisting the event coordinators. If you are that
            person who can handle and manage any situation, come right through!
          </p>
        </Dialog>
        <Dialog
          header="Student Representative"
          visible={modal2}
          onHide={() => setModal2(false)}
          style={{ width: "85%" }}
        >
          <p>
            You are going to be one of the faces of ISTE. You will be
            coordinating all members from each year and will be the mutual link
            between the Execom and the members. Collecting opinions, issues and
            criticisms of the members and communicating with them accordingly
            will be part of the package. You will lead the ISTE class
            representatives and will be assisting the senior representative
            head. If you think you got the leadership skills to take up this
            post, what are you waiting for?!
          </p>
        </Dialog>
        <Dialog
          header="Public Relations"
          visible={modal3}
          onHide={() => setModal3(false)}
          style={{ width: "85%" }}
        >
          <p>
            You are the captain of communications. It will be your job to steer
            and maintain all of ISTE's social media communications. You shall be
            the brains behind the marketing strategies for events and will be
            responsible for website contact forms. All plans for promoting our
            programs including checking the status of the requested permission
            for conducting the program will be looked on by you. You will assist
            the Public Relations Head as well. The power to expand our reach is
            merely within your fingertips. If you think you are social media
            influencer enough, apply for this position now!
          </p>
        </Dialog>
        <Dialog
          header="Documentation"
          visible={modal4}
          onHide={() => setModal4(false)}
          style={{ width: "85%" }}
        >
          <p>
            You shall be responsible for making write-ups and putting together
            reports of all the important events conducted, meetings held and so
            on. You will also be in charge of writing letters requesting
            permission to access certain facilities of the college or to pick a
            day of least resistance to present an event. You will handle all
            personalized reports of club activities and shall assist the
            documentation head. If you consider your pen your strongest weapon,
            apply for this post!
          </p>
        </Dialog>
        <Dialog
          header="Registration"
          visible={modal5}
          onHide={() => setModal5(false)}
          style={{ width: "85%" }}
        >
          <p>
            You are the beginning to a successful program. It will be your duty
            to handle the registration process of all programs. You will be
            assigned to the technical side of the registration process and will
            analyse and correct the faults in the process. You will also help
            the registration head.
          </p>
        </Dialog>
        <Dialog
          header="Finance Team"
          visible={modal6}
          onHide={() => setModal6(false)}
          style={{ width: "85%" }}
        >
          <p>
            You will be dealing with the financial faction of ISTE and shall
            handle our budget feasibly and responsibly. You are in charge of
            collecting and approving new registrations. The collection of
            registration fees will also be under your jurisdiction. You will be
            assisting the financial head. If your calculations never falter,
            this is the post for you!
          </p>
        </Dialog>
        <Dialog
          header="UI/UX Designer"
          visible={modal7}
          onHide={() => setModal7(false)}
          style={{ width: "85%" }}
        >
          <p>
            You are tasked with crafting designs for website that captivate,
            engage users and are visually appealing. You will be a part of the
            technical team supported by the design heads and the web team. It is
            an opportunity to expand your design skills and knowledge and to
            explore your ability.
          </p>
        </Dialog>
        <Dialog
          header="Design Team"
          visible={modal8}
          onHide={() => setModal8(false)}
          style={{ width: "85%" }}
        >
          <p>
            You are to be the paint to a painting. It is your duty to create
            effective posters and arrange the tidbits of the message to be
            conveyed in the most constructive way. You will be assisting the
            heads of the ISTE design team and they will guide your team with a
            dash of resilience and a pinch of imagination. If you can think
            outside the box to impress the audience, sign right up!
          </p>
        </Dialog>
        <Dialog
          header="Operations"
          visible={modal9}
          onHide={() => setModal9(false)}
          style={{ width: "85%" }}
        >
          <p>
            An Operations team member is responsible for ensuring that all
            departments are operating smoothly. Their duty will include setting
            up event venues, ensuring the presence and working of required
            equipments and tools.
          </p>
        </Dialog>
        <Dialog
          header="Video Editor"
          visible={modal10}
          onHide={() => setModal10(false)}
          style={{ width: "85%" }}
        >
          <p>
            You will be responsible for editing and assembling raw footage of
            our works into polished, visually appealing videos that convey the
            message as a whole. You will be under the design team guided by the
            design heads. You will be dutiful to create impressive videos that
            sets an astounding view of our club through expanding your talent.
          </p>
        </Dialog>
        <Dialog
          header="Tech Team"
          visible={modal11}
          onHide={() => setModal11(false)}
          style={{ width: "85%" }}
        >
          <p>
            Your power leans to the technical aspects of ISTE. You will have
            overall control over the 404 ISTE webpage. You will handle the
            technical side of any event and give technical assistance to the
            registration committee when required. You must assist the technical
            team head as well. If you are tech savvy enough, quick board this
            train!
          </p>
        </Dialog>
        <Dialog
          header="Web Team"
          visible={modal12}
          onHide={() => setModal12(false)}
          style={{ width: "85%" }}
        >
          <p>
            You are responsible for all coding works from website development to
            designing. With ample technical knowledge and dedication, you will
            be the right person for the job. The web team is to support ISTE in
            web development and provide visual solutions to technical problems.
            If you have good programming skills and design approach, feel free
            to join us.
          </p>
        </Dialog>
      </main>
    </>
  );
}
