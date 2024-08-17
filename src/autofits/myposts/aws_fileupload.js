import React, { useState } from 'react';
import AWS from 'aws-sdk';
import { Button, TextField } from '@mui/material';

// AWS S3 configuration
const S3_BUCKET = 'reactusersbucket';
const REGION = 'ap-southeast-1';
const ACCESS_KEY = 'AKIAQFLZDRFK3GKRFB7C';
const SECRET_ACCESS_KEY = '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';

AWS.config.update({
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY,
  region: REGION,
});

const s3 = new AWS.S3();

const FileUploadAWS = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const uploadFile = () => {
    if (!file) {
      setUploadMessage('Please select a file first.');
      return;
    }

    setUploading(true);
    const params = {
      Bucket: S3_BUCKET,
      Key: file.name,
      Body: file,
      ACL: 'public-read', // Adjust the ACL as needed
    };

    s3.upload(params, (err, data) => {
      setUploading(false);
      if (err) {
        setUploadMessage(`Error: ${err.message}`);
      } else {
        setUploadMessage(`Success: File uploaded at ${data.Location}`);
      }
    });
  };

  return (
    <div>
      <TextField
        type="file"
        onChange={handleFileChange}
        fullWidth
        variant="outlined"
      />
      <Button
        onClick={uploadFile}
        variant="contained"
        color="primary"
        style={{ marginTop: '10px' }}
        disabled={uploading}
      >
        {uploading ? 'Uploading...' : 'Upload File'}
      </Button>
      {uploadMessage && <div style={{ marginTop: '10px' }}>{uploadMessage}</div>}
    </div>
  );
};

export default FileUploadAWS;
