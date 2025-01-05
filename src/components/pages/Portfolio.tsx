import Header from "../pageSegments/Header";
import Footer from "../pageSegments/Footer";
import Background from "../pageSegments/Background";
import TextBoxWithButton from "../content/TextBoxWithButton";
import TextBoxNewTab from "../content/TextBoxNewTab";

const Portfolio = () => {
  return (
    <>
      {/* Header also contains the Navbar component */}
      <Header />

      {/* Container for the body content. Size is determined by the contents. */}
      <div
        className="p-3 text-primary-emphasis bg-info-subtle border border-primary-subtle container-md"
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="row" style={{ height: 100 }}></div>

        {/* The software used to develop the project is passed to the TextBox component
         as a string array. The component will add icons corresponding to those strings
         to the text box. */}
        <TextBoxWithButton
          title="Click Search Google Chrome Extension"
          text="Click Search is a Google Chrome Extension that allows the
                      user to query ChatGPT about the content featured in a
                      YouTube video by clicking the extension button. The
                      extension determines what the YouTube video is about
                      before sending premade queries to ChatGPT and dispaying
                      the results in a pop-up."
          butLink="/ClickSearch"
          butName="Go to Click Search"
          icon={["extension", "react", "node"]}
        />

        <div className="row" style={{ height: 100 }}></div>

        <TextBoxWithButton
          title="Portfolio Website"
          text="The frontend of this website was created using the React Vite 
            framework with Typescript. The backend was created using the Django
            framework with a local SQLite database and was deployed as a Microsoft
            Azure web appliation with a Postgresql database in the cloud."
          butLink="/WebApp"
          butName="Go to Web Application"
          icon={["django", "react", "azure", "postgresql"]}
        />

        <div className="row" style={{ height: 100 }}></div>

        <TextBoxWithButton
          title="Dog, Cat, or Squirrel Image Classifier"
          text="A Pytorch image classifier model that I trained
          using images sourced from images.cv
          organized into training and testing folders. The model
          will attempt to determine whether the animal in a provided
          image is a dog, cat, or squirrel."
          butLink="/ImageClassification"
          butName="Go to Image Classifier"
          icon={["pytorch", "jupyter"]}
        />
        <div className="row" style={{ height: 100 }}></div>
        <TextBoxNewTab
          title="Tower Defense Game"
          text="A tower defense game that I made as the final project
            in my game design course. The 3D assets come from the free
            Tower Defense package on the Unity Asset Store. I did not use
            any of the scripts included in the package and made the game
            function using my own scripts. The password to view the page is
            UnityFinal"
          butLink="https://garrettp523.itch.io/outworld-tower-defense"
          butName="Go to Tower Defense Itch.io page"
          icon={["unity"]}
        />
        <div className="row" style={{ height: 100 }}></div>
        <TextBoxNewTab
          title="Dungeon Helper"
          text="An Android app I created as the final project for a
            mobile development course. It is meant to be a helpful utility
            for someone to use while playing Dungeons and Dragons. It keeps
            track of how many spells the player has casted that day, what
            modifiers the player gets to their dice rolls based on their inputed
            stats, as well as allowing the player to roll any combination of D3, D6,
            D8, D10, and D20 dice."
          butLink="https://github.com/GarrettPascoe/DnD-Helper"
          butName="Go to Dungeon Helper Github Repo"
          icon={["android"]}
        />
        <div className="row" style={{ height: 100 }}></div>
      </div>
      {/* Footer contains links, contact information, and a form to submit a visitor's contact information
      to my Postgresql database connected to my Django backend hosted as a Azure web app */}
      <Footer />
      {/* Background image repeats in both x and y directions and fills the original container. */}
      <Background />
    </>
  );
};

export default Portfolio;
