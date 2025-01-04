import Header from "../pageSegments/Header";
import Footer from "../pageSegments/Footer";
import Background from "../pageSegments/Background";
import TextBox from "../content/TextBox";

const WebApp = () => {
  return (
    <div
      className="vw-100"
      style={{
        position: "absolute",
        zIndex: 1,
        top: 0,
        left: 0,
        padding: 0,
        margin: 0,
      }}
    >
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
              title="Microsoft Azure Web App"
              text="I created this portfolio website, not only to showcase my other projects,
                but also to showcase various skills involving web applications. Namely frontend
                development, backend development, cloud development, software deployment,
                RESTful API development, containerization, and HTTP requests to send forms from
                the frontend to a backend database."
            />
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row" style={{ height: 100 }} />
        <div className="row">
          <div className="col-4"></div>
          <div className="col-8">
            <TextBox
              title="Django Backend:"
              text="I created the web app's backend using the Django framework. The development 
              version is connected to a SQLite database on my personal laptop. The production 
              version is hosted on a Microsoft Azure web server alongside a Postgresql database.
              The development and production versions have seperate settings.py so no settings
              need to be changed when deploying the production version after testing. The project
              is version controlled with Git and pushed to my public Github repository (utilizing
              a .gitignore file and enviroment variables to avoid security risks. This Github
              repository then deploys directly to my Microsoft Azure web application."
            />
          </div>
        </div>
        <div className="row" style={{ height: 100 }} />
        <div className="row">
          <div className="col-8">
            <TextBox
              title="React Frontend:"
              text="I created the web app's frontend using the React framework with Vite and
              Typescript. I utilized Bootstrap and Material UI imports to customize the React
              components I created the frontend to be very modular, with components for the
              header, footer, navbar, texboxes, text boxes with nav buttons, etc... so alterations
              can be made across the entire website easily and efficiently. The frontend is hosted
              on the Hostinger hosting service."
            />
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row" style={{ height: 100 }} />
        <div className="row">
          <div className="col-4"></div>
          <div className="col-8">
            <TextBox
              title="Connection:"
              text="The frontend contains form components that the visitor can use to submit
              information to my PostgreSQL database. These components utilize Axios to send
              HTTP requests to the webapp's backend. The backend then receives the request and
              stores the contents of the forms in the connected PostgreSQL database."
            />
          </div>
        </div>
      </div>
      <div>
        <Footer />
        <Background />
      </div>
    </div>
  );
};

export default WebApp;
