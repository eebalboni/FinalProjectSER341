import React, { useState } from "react";


function FileUploadForm() {
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the file data
    console.log(file);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <h1>Upload a File</h1>
      <form onSubmit={handleSubmit} className="file-upload-form">
        <div className="form-group">
          <label htmlFor="file" className="white-label">
            File:
          </label>
          <input id="file" type="file" onChange={handleFileChange} />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FileUploadForm;
