import NavBarMobile from "../navigation/NavBarMobile";
import MyImage from "../../assets/GP_New_Logo.png";
import Banner from "../../assets/GP_Banner_BG.jpg";

const HeaderMobile = () => {
  return (
    <>
      <div
        className="row"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          margin: 0,
          padding: 0,
          height: 200,
        }}
      >
        <div className="col-1" />
        <div className="col-4">
          <img
            src={MyImage}
            className="img-fluid top-50 float-end translate-middle-y"
            alt="GP_Logo"
            style={{ position: "relative", height: "150px", width: "150px" }}
          />
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <div
            className="text-light row align-items-center"
            style={{
              margin: 0,
              padding: 0,
              height: "200px",
            }}
          >
            <h1 className=" ">Garrett Pascoe's Portfolio</h1>
          </div>
        </div>
      </div>
      <div style={{ padding: 0, margin: 0 }}>
        <NavBarMobile />
      </div>
    </>
  );
};

export default HeaderMobile;
