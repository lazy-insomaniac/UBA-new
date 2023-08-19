import React from "react";
import "../css/StudentTeam.css";
import HIMANSHU from "../../../Images/StudentTeam/HimanshuRanjan.jpg";
import Kishan from "../../../Images/StudentTeam/Kishan_Kashyap.jpg";
import Komalpreet from "../../../Images/StudentTeam/Komalpreet.jpg"
import Shubhanshu from "../../../Images/StudentTeam/Shbanshu_Shukla.jpg";
import Anuj from "../../../Images/StudentTeam/Anuj.jpeg"
import Shreya from "../../../Images/StudentTeam/Shreya.jpg";
import Mohit from "../../../Images/StudentTeam/Mohit.jpg";
import Archi from "../../../Images/StudentTeam/Archi.jpg";
import Gautum from "../../../Images/StudentTeam/Gautum.jpg";
import ShubhamK from "../../../Images/StudentTeam/Shubham_kumar.jpg"
import Hemant from "../../../Images/StudentTeam/Hemant.jpg"
import Divya from "../../../Images/StudentTeam/Divya_agr.jpg";
import Khushi from "../../../Images/StudentTeam/Khushi.jpg";
import Ani from "../../../Images/StudentTeam/Ani.jpg";
import Kinshu from "../../../Images/StudentTeam/Kinshu.jpg";
import Pratibha from "../../../Images/StudentTeam/Pratibha.jpg";
import Jyoti from "../../../Images/StudentTeam/Jyoti.jpg";
import Abhishek from "../../../Images/StudentTeam/Abhishek.jpg";
import Udit from "../../../Images/StudentTeam/Udit.jpeg";
import Srishti from "../../../Images/StudentTeam/Srishti.JPG";
import Shailja from "../../../Images/StudentTeam/Shailja.jpg";
import Pratyaksh from "../../../Images/StudentTeam/Pratyaksh.jpg";
import Ramandeep from "../../../Images/StudentTeam/Ramandeep.jpg";
import { Row, Container } from "react-bootstrap";
import { StudentIdentityCard } from "../../../components/Javascript/StudentIdentityCard";
import { BsFillHeartFill } from 'react-icons/bs';
export const StudentTeam = () => {
  return (
    <>
      <Container style={{ background: "#f7f8f9" }}>
        <h1 className="text-center headingStudent1 my-5">Central Team</h1>
        <Row>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Shreya}
              name="Shreya Mittal"
              pos="Team Leader"
              email="Email: s_mittal@ce.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/shreya-mittal-287298249"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Mohit}
              name="Mohit Umraiya"
              pos="Overall Student Coordinator"
              email="Email: mohit_u@ee.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/mohit-umraiya-966911200"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Archi}
              name="Harshit Kumar"
              pos="Overall Co-ordinator for Media and Outreach"
              email="Email: h_kumar@mt.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/harshit-kumar-189b901a0"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={HIMANSHU}
              name="Himanshu Ranjan"
              pos="Overall Co-ordinator for Documentation"
              email="Email: h_ranjan@ece.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/himanshu-r-24978a130/"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Shubhanshu}
              name="Shubanshu Shukla"
              pos="Overall Co-ordinator for Finance "
              email="Email: s_shukla@hs.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/shubhanshu-shukla-195068203"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Gautum}
              name="Gautam Kumar"
              pos="Head (Agriculture & Waste Management) "
              email="Email: g_kumar1@ce.iitr.ac.in"
              linkedIn="http://www.linkedin.com/in/gautam-kumar-a83bb3223"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Hemant}
              name="Hemant Bisdaria"
              pos="Head (Self Help Groups)"
              email="Email: h_bidasaria@hs.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/hemant-bidasaria-068677223"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Kishan}
              name="Kishan Kashyap"
              pos="Head (Water Management & Education)"
              email="Email: K_kashyap@ph.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/kishan-kashyap-9b5555227"
            />
            <br />
          </div>

          <h1 className="text-center headingStudent1 my-5">Village Team</h1>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Jyoti}
              name="Jyotsana Singh"
              pos="Village Co-ordinator"
              village="Beladi"
              email="Email: j_singh@ph.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/jyotsna-singh-072ba4230"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Ani}
              name="Ani Jeenwal"
              pos="Village Co-ordinator"
              village="Chandpur"
              email="Email: ani_j@me.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/ani-jeenwal-b89530223"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Komalpreet}
              name="Komalpreet Kaur"
              pos="Village Co-ordinator"
              village="Rithaura Grunt"
              email="Email: j_singh@ph.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/jyotsna-singh-072ba4230"
            />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={ShubhamK}
              name="Shubam Kumar"
              pos="Village Co-ordinator"
              village="Gopalpur"
              email="Email: s_kumar5@me.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/shubham-kumar-305b52240"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Divya}
              name="Divya Agarwal"
              pos="Village Co-ordinator"
              village="Meerpur"
              email="Email: d_aggarwal@hs.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/divya-aggarwal-28bb3122a"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Anuj}
              name="Anuj Kumar"
              pos="Village Co-ordinator"
              village="Puranpur"
              email="Email: a_kumar4@cy.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/anuj-kumar-1aa590230"
            />
            <br />
          </div>
        </Row>
        <br />
        <br />
        <center><h2>Be the change <span className="Heart"><BsFillHeartFill /></span> <strong>You wish to see</strong>.</h2></center>
        <br />
        <br />
      </Container>
    </>
  );
};
