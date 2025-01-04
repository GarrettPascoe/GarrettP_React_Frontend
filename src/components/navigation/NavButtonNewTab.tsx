import Button from "@mui/material/Button";
//import { useNavigate } from "react-router-dom";

interface Props {
  link: string;
  name: string;
}

const NavButtonNewTab = ({ link, name }: Props) => {
  //let navigate = useNavigate();
  const navigateButton = () => {
    window.open(link, name);
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

export default NavButtonNewTab;
