import Paper from "@mui/material/Paper";
import blue from "@mui/material/colors/blue";
import grey from "@mui/material/colors/grey";

interface Props {
  title: string;
  text: string;
}

const TextBox = ({ title, text }: Props) => {
  if (title == "n/a") {
    return (
      <>
        <div className="row" style={{ padding: 0, margin: 0 }}>
          <div className="col-1"></div>
          <div className="col-10">
            <Paper elevation={10} sx={{ backgroundColor: grey[300] }}>
              <div className="row">
                <div className="col-12">
                  <p style={{ margin: 20 }}>
                    {" "}
                    <br></br>
                    {text}
                    <br></br> <br></br>{" "}
                  </p>
                </div>
              </div>
            </Paper>
          </div>
          <div className="col-1"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="row">
        <div className="col-12">
          <Paper elevation={10} sx={{ backgroundColor: grey[300] }}>
            <div
              className="w-75"
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
            <div className="row justify-content-center">
              <div>
                <p style={{ margin: 20 }}>
                  {" "}
                  <br></br>
                  {text}
                  <br></br> <br></br>{" "}
                </p>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    </>
  );
};

export default TextBox;
