import Header from "../pageSegments/Header";
import Footer from "../pageSegments/Footer";
import Background from "../pageSegments/Background";
import TextBox from "../content/TextBox";
import Paper from "@mui/material/Paper";
import blue from "@mui/material/colors/blue";

const TowerDefense = () => {
  return (
    <>
      <Header />

      <div
        className="p-3 text-primary-emphasis bg-info-subtle border border-primary-subtle container-md"
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="row" style={{ height: 100 }} />
        <div className="row">
          <div className="col-8">
            <TextBox
              title="Outworld Tower Defense"
              text="Outworld Tower Defense is a tower defense game I developed as my
                final project for my video game design course. I got the assets from the
                free Unity Tower Defense starter pack off of the Unity Asset Store. I
                immediantly deleted all of the original scripts that came with the package.
                I coded all of the logic used in the game myself."
            />
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row" style={{ height: 100 }} />
        <div className="row">
          <div className="col-4"></div>
          <div className="col-8">
            <TextBox title="Tower Placement:" text="" />
          </div>
        </div>
        <div className="row" style={{ height: 100 }} />
        <div className="row">
          <div className="col-8">
            <TextBox title="Firing at Enemies:" text="" />
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row" style={{ height: 100 }} />
        <div className="row">
          <div className="col-4"></div>
          <div className="col-8">
            <TextBox title="The Map:" text="" />
          </div>
        </div>
        <div className="row" style={{ height: 100 }} />
        <div className="row">
          <div className="col-1" />
          <div className="col-7">
            <Paper elevation={10} sx={{ backgroundColor: blue[50] }}>
              <div
                style={{
                  position: "relative",
                  top: 5,
                  left: 5,
                  width: 180,
                }}
              >
                <Paper elevation={11} sx={{ backgroundColor: blue[300] }}>
                  <h4 style={{ margin: 10 }}>Links:</h4>
                </Paper>
              </div>
              <p style={{ margin: 20 }}>
                <h5>Video examples of use cases:</h5>
                <br></br>
                <a
                  style={{ display: "table-cell" }}
                  href="https://www.loom.com/share/e78114ead86e478a83d35447449e9cc7?sid=a0db92fa-1c3c-4085-94c0-f55f8da6d61f"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Movie Scene Example
                </a>
                <br></br>
                <a
                  style={{ display: "table-cell" }}
                  href="https://www.loom.com/share/0c06fc4b173c42a798702c8020e97caf?sid=67774e5f-d48f-47d6-9dd6-49136a5cdce7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video Gameplay Example
                </a>
                <br></br>
                <a
                  style={{ display: "table-cell" }}
                  href="https://www.loom.com/share/fa427b3392df45e5bfbe16dec792043f?sid=23191f9f-ceed-4e77-899a-7826538a2738"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Movie Trailer Example
                </a>
                <br></br>
                <br></br>
                <h5>Link to the Github repo:</h5>
                <br></br>
                <a
                  style={{ display: "table-cell" }}
                  href="https://github.com/aldenmetzmaker/CSI4999-Chrome-Extension"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSI4999-Chrome-Extension
                </a>
                <br></br> <br></br>{" "}
              </p>
            </Paper>
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row" style={{ height: 100 }} />
      </div>
      <Footer />
      <Background />
    </>
  );
};

export default TowerDefense;
