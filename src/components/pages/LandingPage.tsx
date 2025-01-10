import Background from "../../assets/Landing_Page.jpeg";

const LandingPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {<></>}
    </div>
  );
};

export default LandingPage;
