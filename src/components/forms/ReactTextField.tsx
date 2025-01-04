import TextField from "@mui/material/TextField";
import { useState } from "react";

interface Props {
  label: string;
  placeholder: string;
}

function ReactTextField({ label, placeholder }: Props) {
  const [name, setName] = useState(" ");

  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      placeholder={placeholder}
      value={name}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
      }}
    />
  );
}

export default ReactTextField;
