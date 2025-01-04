import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

interface Props {
  link: string;
  name: string;
}

const NavButton = ({ link, name }: Props) => {
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
          height: "100%",
          width: "100%",
        }}
      >
        {name}
      </Button>
    </>
  );
};

export default NavButton;
