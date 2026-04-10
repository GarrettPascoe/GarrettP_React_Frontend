import CarChooserAgentMobile from "../mobilePages/CarChooserAgentMobile";
import Header from "../pageSegments/Header";
import Footer from "../pageSegments/Footer";
import Background from "../pageSegments/Background";
import AgentAIChat from "../forms/AgentAIChat";
import TextBox from "../content/TextBox";
import Paper from "@mui/material/Paper";
import blue from "@mui/material/colors/blue";
import { useMediaQuery } from "react-responsive";

const CarChooserAgent = () => {
  //Check to determine if user is on mobile device
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    //Main container
    <div>
      {/* Determine whether desktop or mobile layout should be used */}
      {isMobile ? (
        <CarChooserAgentMobile />
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
              <div className="col-2"></div>
              <div className="col-8">
                <TextBox
                  title="AI Agent to Help Find a Ford Vehicle"
                  text="A LangChain AI agent that helps users find the perfect Ford vehicle based on their preferences and needs. The agent utilizes 
                  gpt-4o-mini with custom prompts that shapes the agent's behavior and keeps it on task. The program also makes use of pydantic models
                  to ensure that the agent's responses are in a format that can be easily parsed and used to provide accurate and relevant information to the user."
                />
              </div>
              <div className="col-2"></div>
            </div>
            <div className="row" style={{ height: 100 }} />
            <div className="row">
              <div className="col-2"></div>
              <div className="col-8">
                <TextBox
                  title="The Backend Process"
                  text="User messages are sent to my Django backend, which controls the interactions between the user and the FastAPI agent hosted on Render.
                  If there is no current session ID, a request is made to create a new session. NOTE: Render may take a minute or two to start up the agent.
                  Once the session is created, the agent will send its first response. The backend keeps track of all messages during the session, facilitating
                  a full, multi-turn conversation."
                />
              </div>
              <div className="col-2"></div>
            </div>
            <div className="row" style={{ height: 100 }} />
            <div className="row">
              <div className="col-2" />
              <div className="col-8">
                <AgentAIChat />
              </div>
              <div className="col-2"></div>
            </div>
            <div className="row" style={{ height: 100 }} />
            <div className="row">
              <div className="col-2" />
              <div className="col-8">
                <Paper elevation={10} sx={{ backgroundColor: blue[50] }}>
                  <Paper elevation={11} sx={{ backgroundColor: blue[300] }}>
                    <h4 style={{ margin: 10 }}>Links:</h4>
                  </Paper>
                  <p style={{ margin: 20 }}>
                    {" "}
                    <br></br>
                    <a
                      style={{ display: "table-cell" }}
                      href="https://github.com/GarrettPascoe/CarChooserAgent"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github Link
                    </a>
                    <br></br> <br></br>{" "}
                  </p>
                </Paper>
              </div>
              <div className="col-2"></div>
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

export default CarChooserAgent;
