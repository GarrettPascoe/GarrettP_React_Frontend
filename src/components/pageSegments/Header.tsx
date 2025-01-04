import NavBar from "../navigation/NavBar";
import MyImage from "../../assets/GP_Logo.png";

const Header = () => {
  return (
    <>
      <div className=" bg-primary-subtle row vw-100">
        <div className="col-5">
          <img
            src={MyImage}
            className="top-50 float-end translate-middle-y"
            alt="GP_Logo"
            style={{ position: "relative" }}
          />
        </div>
        <div
          className="p-3 text-primary-emphasis col"
          style={{ padding: 0, margin: 0, height: 150 }}
        >
          <h1 style={{ margin: 30 }}>Garrett Pascoe's Portfolio</h1>
        </div>
        <div style={{ padding: 0, margin: 0 }}>
          <NavBar />
        </div>
      </div>
    </>
  );
};

export default Header;
