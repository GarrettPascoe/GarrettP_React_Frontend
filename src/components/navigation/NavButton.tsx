import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

interface Props {
  link: string;
  name: string;
  buttonHeight: number;
  buttonWidth: number;
}

const NavButton = ({ link, name, buttonHeight, buttonWidth }: Props) => {
  let navigate = useNavigate();
  const navigateButton = () => {
    navigate(link);
  };

  return (
    <>
      <Button
        className="btn float-start"
        variant="contained"
        onClick={navigateButton}
        style={{
          position: "relative",
          height: buttonHeight,
          width: buttonWidth,
        }}
      >
        {name}
      </Button>
    </>
  );
};

export default NavButton;
