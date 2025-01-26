import ClickSearchMobile from "../mobilePages/ClickSearchMobile";
import Header from "../pageSegments/Header";
import Footer from "../pageSegments/Footer";
import Background from "../pageSegments/Background";
import Paper from "@mui/material/Paper";
import blue from "@mui/material/colors/blue";
import TextBox from "../content/TextBox";
import { useMediaQuery } from "react-responsive";

const ClickSearch = () => {
  //Check to determine if user is on mobile device
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    //Main container
    <div>
      {/* Determine whether desktop or mobile layout should be used */}
      {isMobile ? (
        <ClickSearchMobile />
      ) : (
        <div>
          {/* Header also contains the Navbar component */}
          <Header />

          <div
            className="p-3 text-primary-emphasis container-md"
            style={{
              position: "relative",
              zIndex: 1,
              backgroundColor: "#cccccc",
              backgroundImage:
                "linear-gradient(rgb(63, 67, 87), rgb(82, 128, 199), rgb(63, 67, 87))",
            }}
          >
            <div className="row" style={{ height: 100 }} />
            <div className="row">
              <div className="col-8">
                <TextBox
                  title="Click Search"
                  text="Click Search is a Google Chrome App my partners and I created
                for our senior project. The user can quickly search for
                information about the media featured in a YouTube video they are
                currently viewing. The app makes use of the Youtube API to
                examine the tags of the current YoutTube tab and determines
                whether the video is about a movie, TV series, or a video game.
                When the user clicks on the extension icon, the app will send a
                series of queries to ChatGPT through the OpenAI API, inputing
                the most relevant tag into a template based on the type of media
                and presenting the results to the user in a pop-up."
                />
              </div>
              <div className="col-4"></div>
            </div>
            <div className="row" style={{ height: 100 }} />
            <div className="row">
              <div className="col-4"></div>
              <div className="col-8">
                <TextBox
                  title="For Example:"
                  text="If the user just finished viewing the trailer for the One Piece
                live action TV series, the extension would determine that the
                most relevant tag of the video is 'One Piece' and that One Piece
                is a TV series. This will be done automatically upon clicking on
                the video. My main role in the project was to create the
                algorithm that determined these variables and stored the values
                in memory to be used later for the queries."
                />
              </div>
            </div>
            <div className="row" style={{ height: 100 }} />
            <div className="row">
              <div className="col-8">
                <TextBox
                  title="User Input:"
                  text="The user can then click the extension icon and will be offered
                three options in a pop-up. The first two are the most relevant
                tags on the YouTube video and the third defaults to the name of
                the YouTube channel. This is so that even if the video is about
                a topic outside of the intended media types, the extension still
                has the utility of searching for some facts about the YouTube
                channel and/or YouTuber."
                />
              </div>
              <div className="col-4"></div>
            </div>
            <div className="row" style={{ height: 100 }} />
            <div className="row">
              <div className="col-4"></div>
              <div className="col-8">
                <TextBox
                  title="In Addition:"
                  text="In this example, if the user selects the One Piece option, the
                extension will input the term One Piece into the TV series
                template for queries and will ask queries such as 'When did the
                One Piece series begin airing?' and 'Is the One Piece series
                currently ongoing?'. If the user instead clicks on the third
                option, the queries will instead be about Netflix in the context
                of a YouTube creator. Queries such as 'When did Netflix begin
                posting videos on YouTube?' and 'What is Netflix's most viewed
                video on YouTube?'"
                />
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
        </div>
      )}
    </div>
  );
};

export default ClickSearch;
