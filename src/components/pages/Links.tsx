import Header from "../pageSegments/Header";
import Footer from "../pageSegments/Footer";
import Background from "../pageSegments/Background";
import TextBoxWithButton from "../content/TextBoxWithButton";

const Links = () => {
  return (
    <div
      className="container-fluid"
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
        <TextBoxWithButton
          title="Github Link"
          text="List of my github repositories"
          butLink=""
          butName="Github"
          icon={[]}
        />
        <div className="row" style={{ height: 100 }} />
        <TextBoxWithButton
          title="LinkedIn Link"
          text="Link to my LinkedIn page"
          butLink=""
          butName="LinkedIn"
          icon={[]}
        />
        <div className="row" style={{ height: 100 }} />
        <TextBoxWithButton
          title="Github Link"
          text="List of my github repositories"
          butLink=""
          butName="Github"
          icon={[]}
        />
      </div>
      <div>
        <Footer />
        <Background />
      </div>
    </div>
  );
};

export default Links;
