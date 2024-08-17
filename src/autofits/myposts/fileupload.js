import React, { useState } from 'react';
import { Button, Typography, Stack } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const handleUpload = () => {
    if (file) {
      // Handle file upload logic here
      console.log('File ready to upload:', file);
    } else {
      console.log('No file selected.');
    }
  };

  return (
    <Stack spacing={2} alignItems="center">
      <Typography variant="h6">Upload File</Typography>
      <Button
        variant="contained"
        color="primary"
        component="label"
        startIcon={<CloudUploadIcon />}
      >
        Choose File
        <input
          type="file"
          hidden
          onChange={handleFileChange}
        />
      </Button>
      {file && (
        <Typography variant="body1">
          Selected File: {file.name}
        </Typography>
      )}
      <Button
        variant="contained"
        color="secondary"
        onClick={handleUpload}
      >
        Upload
      </Button>
    </Stack>
  );
};

export default FileUpload;
