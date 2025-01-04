import React, { useState } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import blue from "@mui/material/colors/blue";

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [result, displayResult] = useState({ prediction: " " });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);

      try {
        const response = await axios.post(
          "https://garrettpascoe-hsfaechjggevhcc7.centralus-01.azurewebsites.net/predict",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Upload successful:", response.data);
        displayResult(response.data);
      } catch (error) {
        console.error("Upload failed:", error);
      }
    }
  };

  return (
    <Paper elevation={10}>
      <div
        className="w-50"
        style={{
          position: "relative",
          top: 5,
          left: 5,
        }}
      >
        <Paper elevation={11} sx={{ backgroundColor: blue[300] }}>
          <h4 style={{ margin: 10 }}>Submit a Picture</h4>
        </Paper>
      </div>
      <form onSubmit={handleUpload}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit" className="btn btn-primary">
          Upload
        </button>
        <h4>{result.prediction}</h4>
      </form>
    </Paper>
  );
};

export default ImageUpload;
