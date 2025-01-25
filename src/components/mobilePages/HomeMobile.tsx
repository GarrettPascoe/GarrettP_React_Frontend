import HeaderMobile from "../pageSegments/HeaderMobile";
import FooterMobile from "../pageSegments/FooterMobile";
import Background from "../pageSegments/Background";
import TextBoxWithButtonMobile from "../content/TextBoxWithButtonMobile";
import TextBox from "../content/TextBox";
import Portrait from "../../assets/Circle_Portrait_Border.png";
import Avatar from "@mui/material/Avatar";

const HomeMobile = () => {
  return (
    <>
      <HeaderMobile />

      <div
        className="text-primary-emphasis"
        style={{
          margin: 0,
          padding: 0,
          position: "relative",
          zIndex: 1,
          backgroundColor: "#cccccc",
          backgroundImage:
            "linear-gradient(rgb(63, 67, 87), rgb(82, 128, 199), rgb(63, 67, 87))",
        }}
      >
        <div className="row" style={{ height: 50 }} />
        <div className="row justify-content-center">
          <div className="col-1" />
          <div className="col-10">
            <TextBox
              title="Welcome to My Homepage"
              text="I am Garrett Pascoe, a recent graduate from Oakland
                      University with a strong interest in algorithms, machine
                      learning, neural networks, and other computer science
                      related topics. I built this website not only to showcase
                      my portfolio, but to be a part of it. The frontend is a React
                      typescript project hosted on Hostinger. The backend is a Django
                      app deployed to a Microsoft Azure web server using a Postgresql
                      database."
            />
          </div>
          <div className="col-1" />
        </div>
        <div className="row" style={{ height: 50 }} />
        <div className="row justify-content-center">
          <Avatar
            src={Portrait}
            alt="Portrait"
            sx={{
              paddingRight: 0,
              paddingLeft: 0,
              width: 250,
              height: 250,
            }}
          />
        </div>
        <div className="row" style={{ height: 50 }} />
        <div className="row">
          <div className="col-1" />
          <div className="col-10">
            <TextBoxWithButtonMobile
              title="n/a"
              text="Visit my About page in order to learn more about
                    me and gain insight into my thought processes."
              butLink="/About"
              butName="Go to About Page"
              icon={[]}
            />
          </div>
          <div className="col-1" />
        </div>
        <div className="row" style={{ height: 50 }} />
        <div className="row">
          <div className="col-1" />
          <div className="col-10">
            <TextBoxWithButtonMobile
              title="n/a"
              text="Visit my Resume page for an overview of my skills
                    and qualifications."
              butLink="/Resume"
              butName="Go to Resume Page"
              icon={[]}
            />
          </div>
          <div className="col-1" />
        </div>
        <div className="row" style={{ height: 50 }} />
        <div className="row">
          <div className="col-1" />
          <div className="col-10">
            <TextBoxWithButtonMobile
              title="n/a"
              text="Visit my portfolio page for a brief overview of my
                    projects with links for more in-depth explainations."
              butLink="/Portfolio"
              butName="Go to Portfolio Page"
              icon={[]}
            />
          </div>
          <div className="col-1" />
        </div>
        <div className="row" style={{ height: 50 }} />
      </div>

      <FooterMobile />
      <Background />
    </>
  );
};

export default HomeMobile;
