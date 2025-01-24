import NavButtonPercent from "../navigation/NavButtonPercent";
import Logos from "./Logos";
import Paper from "@mui/material/Paper";
import blue from "@mui/material/colors/blue";
import grey from "@mui/material/colors/grey";
import Stack from "@mui/material/Stack";

interface Props {
  title: string;
  text: string;
  butLink: string;
  butName: string;
  icon: Array<string>;
}

const TextBoxWithButtonMobile = ({
  title,
  text,
  butLink,
  butName,
  icon,
}: Props) => {
  if (title == "n/a") {
    return (
      <>
        <Paper elevation={10} sx={{ backgroundColor: grey[300] }}>
          <div className="row">
            <div className="col-1" />
            <div className="col-10">
              <p style={{ margin: 20 }}>
                {" "}
                <br></br>
                {text}
                <br></br> <br></br>{" "}
              </p>
            </div>
            <div className="col-1" />
          </div>
          <div className="row" style={{ height: 100 }}>
            <div className="col-1" />
            <div className="col-10" style={{ padding: 5, paddingBottom: 10 }}>
              <NavButtonPercent link={butLink} name={butName} />
            </div>
            <div className="col-1" />
          </div>
        </Paper>
      </>
    );
  }

  if (title != "n/a" && icon.length > 0) {
    return (
      <>
        <div className="row justify-content-md-center">
          <div className="col-12">
            <Paper elevation={10} sx={{ backgroundColor: grey[300] }}>
              <div className="row">
                <div
                  className="col-6"
                  style={{
                    position: "relative",
                    top: 5,
                    left: 5,
                  }}
                >
                  <Paper elevation={11} sx={{ backgroundColor: blue[300] }}>
                    <h4 style={{ margin: 10 }}>{title}</h4>
                  </Paper>
                </div>
                <div
                  className="col-6"
                  style={{
                    position: "relative",
                    top: 5,
                    left: 5,
                  }}
                >
                  <Stack direction="row" spacing={2}>
                    {icon.map((item, index) => (
                      <Logos key={index} icon_name={item} />
                    ))}
                  </Stack>
                </div>
              </div>
              <div className="row">
                <div className="col-7">
                  <p style={{ margin: 20 }}>
                    {" "}
                    <br></br>
                    {text}
                    <br></br> <br></br>{" "}
                  </p>
                </div>
                <div className="col-1"></div>
                <div className="col-3">
                  <div
                    className="top-50 translate-middle-y"
                    style={{
                      position: "relative",
                      height: "50%",
                      width: "100%",
                    }}
                  >
                    <NavButtonPercent link={butLink} name={butName} />
                  </div>
                </div>
                <div className="col-1"></div>
              </div>
            </Paper>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="row justify-content-md-center">
        <div className="col-12">
          <Paper elevation={10} sx={{ backgroundColor: grey[300] }}>
            <div
              className="w-50"
              style={{
                position: "relative",
                top: 5,
                left: 5,
              }}
            >
              <Paper elevation={11} sx={{ backgroundColor: blue[300] }}>
                <h4 style={{ margin: 10 }}>{title}</h4>
              </Paper>
            </div>
            <div></div>
            <div className="row">
              <div className="col-7">
                <p style={{ margin: 20 }}>
                  {" "}
                  <br></br>
                  {text}
                  <br></br> <br></br>{" "}
                </p>
              </div>
              <div className="col-1"></div>
              <div className="col-3">
                <div
                  className="top-50 translate-middle-y"
                  style={{
                    position: "relative",
                    height: "50%",
                    width: "100%",
                  }}
                >
                  <NavButtonPercent link={butLink} name={butName} />
                </div>
              </div>
              <div className="col-1"></div>
            </div>
          </Paper>
        </div>
      </div>
    </>
  );
};

export default TextBoxWithButtonMobile;
