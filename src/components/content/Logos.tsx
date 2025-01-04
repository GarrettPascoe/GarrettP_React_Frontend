import Extension from "../../assets/extension-icon.png";
import React from "../../assets/react-icon.png";
import Android from "../../assets/android-icon.png";
import Azure from "../../assets/azure-icon.png";
import Django from "../../assets/django-icon.png";
import Node from "../../assets/node-icon.png";
import Postgresql from "../../assets/postgresql-icon.png";
import Pytorch from "../../assets/pytorch-icon.png";
import Unity from "../../assets/unity-icon.png";
import Jupyter from "../../assets/jupyter-icon.png";
import Avatar from "@mui/material/Avatar";
import { grey } from "@mui/material/colors";

interface Props {
  icon_name: string;
}

const Logos = ({ icon_name }: Props) => {
  if (icon_name == "extension") {
    return (
      <Avatar
        src={Extension}
        alt="Extension"
        sx={{ bgcolor: grey[900], width: 56, height: 56 }}
      />
    );
  }
  if (icon_name == "react") {
    return (
      <Avatar
        src={React}
        alt="React"
        sx={{ bgcolor: grey[900], width: 56, height: 56 }}
      />
    );
  }
  if (icon_name == "android") {
    return (
      <Avatar
        src={Android}
        alt="Android"
        sx={{ bgcolor: grey[900], width: 56, height: 56 }}
      />
    );
  }
  if (icon_name == "azure") {
    return (
      <Avatar
        src={Azure}
        alt="Azure"
        sx={{ bgcolor: grey[900], width: 56, height: 56 }}
      />
    );
  }
  if (icon_name == "django") {
    return (
      <Avatar
        src={Django}
        alt="Django"
        sx={{ bgcolor: grey[900], width: 56, height: 56 }}
      />
    );
  }
  if (icon_name == "node") {
    return (
      <Avatar
        src={Node}
        alt="Node-js"
        sx={{ bgcolor: grey[900], width: 56, height: 56 }}
      />
    );
  }
  if (icon_name == "postgresql") {
    return (
      <Avatar
        src={Postgresql}
        alt="Postgresql"
        sx={{ bgcolor: grey[900], width: 56, height: 56 }}
      />
    );
  }
  if (icon_name == "pytorch") {
    return (
      <Avatar
        src={Pytorch}
        alt="PyTorch"
        sx={{ bgcolor: grey[900], width: 56, height: 56 }}
      />
    );
  }
  if (icon_name == "unity") {
    return (
      <Avatar
        src={Unity}
        alt="Unity"
        sx={{ bgcolor: grey[700], width: 56, height: 56 }}
      />
    );
  }
  if (icon_name == "jupyter") {
    return (
      <Avatar
        src={Jupyter}
        alt="Jupyter Notebook"
        sx={{ bgcolor: grey[900], width: 56, height: 56 }}
      />
    );
  }
};

export default Logos;
