import { SetStateAction, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const CompanyForm = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setValue(event.target.value);
  };

  const handleChange2 = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setValue2(event.target.value);
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const getresponse = await axios(
        "https://garrettpascoe-hsfaechjggevhcc7.centralus-01.azurewebsites.net/companycontact/"
      );
      console.log(getresponse);
      const response = await axios.post(
        "https://garrettpascoe-hsfaechjggevhcc7.centralus-01.azurewebsites.net/companycontact/",
        { company: value, email: value2 }
      );
      // Handle successful response
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <TextField
            className="bg-light"
            label="Enter your company name"
            value={value}
            onChange={handleChange}
            variant="filled"
          />
        </div>
        <div className="row">
          <TextField
            className="bg-light"
            label="Enter your email"
            value={value2}
            onChange={handleChange2}
            variant="filled"
          />
        </div>
        <button type="submit">Submit</button>
      </Box>
    </>
  );
};

export default CompanyForm;
