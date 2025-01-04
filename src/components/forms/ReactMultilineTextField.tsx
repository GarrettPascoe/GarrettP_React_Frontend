import TextField from "@mui/material/TextField";
import { useState } from "react";

interface Props {
  label: string;
  placeholder: string;
}

function ReactMultilineTextField({ label, placeholder }: Props) {
  const [name, setName] = useState(" ");

  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      placeholder={placeholder}
      multiline
      maxRows={5}
      value={name}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
      }}
    />
  );
}

export default ReactMultilineTextField;
