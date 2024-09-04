import React from "react";
import AboutPlomb from "../component/AboutPlomb";
import Team from "../component/Team";
import Tobi from "../component/assets/Tobi@1x.png";
import Oluwafemi from "../component/assets/Oluwafemi@1x.png";
import Docky from "../component/assets/Docky@1x.png";
import Simi from "../component/assets/Simi@1x.png";
import Rampop from "../component/assets/Rampop@1x.png";

function About() {
  return (
    <div>
      <AboutPlomb />
      <div className="mx-52">
        <div>
          <h1 className="text-[#00ACE3] text-center text-3xl">Meet the team</h1>
          <p className="text-center mt-4">
            At PLOMB, our dedicated team is committed to revolutionizing the
            voting experience in Nigeria and beyond. We bring together a diverse
            group of professionals with expertise in technology, governance, and
            community engagement to ensure that every vote counts. Get to know
            the passionate individuals behind PLOMB
          </p>
        </div>
        <h1></h1>
        <div className="flex justify-between mt-16">
          <Team
            pic={Tobi}
            fullName={"BOLAJI OLUWATOBI"}
            job={"Software Developer"}
          />
          <Team pic={Docky} fullName={"GODWIN OBI"} job={"Product Designer"} />
          <Team
            pic={Simi}
            fullName={"SIMILOLUWA ABIDOYE"}
            job={"Software / Blockchain Developer"}
          />
        </div>
        <div className="flex justify-center gap-16 mt-16">
          <Team
            pic={Oluwafemi}
            fullName={"OLUWAFEMI  AYOOLA"}
            job={"Blockchain  Developer"}
          />
          <Team
            pic={Rampop}
            fullName={"RAHMAT POPOOLA OMOWUMI"}
            job={"Software Developer"}
          />
        </div>
        <p className="text-center m-24">
          Together, our team is committed to making PLOMB a trusted platform for
          fair, transparent, and accessible voting. We believe that with the
          right tools and education, every Nigerian can play a role in shaping
          the future of their community and country.
        </p>
      </div>
    </div>
  );
}

export default About;
