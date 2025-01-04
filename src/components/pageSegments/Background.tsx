import Box from "@mui/material/Box";
import BackgroundImage from "../../assets/Cube_BG.jpeg";

const Background = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${BackgroundImage})`,
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: -1,
        top: 0,
        left: 0,
      }}
    ></Box>
  );
};

export default Background;
