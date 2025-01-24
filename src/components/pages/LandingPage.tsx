import Background from "../../assets/Landing_Page.jpeg";
import Paper from "@mui/material/Paper";
import grey from "@mui/material/colors/grey";

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
      {
        <>
          <div className="row">
            <div className="col-4">
              <Paper elevation={10} sx={{ backgroundColor: grey[300] }}></Paper>
            </div>
            <div className="col-2" />
            <div className="col-6"></div>
          </div>
        </>
      }
    </div>
  );
};

export default LandingPage;
