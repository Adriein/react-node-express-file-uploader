import React from "react";

const UploadFile = ({ handleChange, uploadFile, fileName }) => {
  return (
    <form onSubmit={uploadFile}>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupFileAddon01">
            Upload
          </span>
        </div>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="inputGroupFile01"
            aria-describedby="inputGroupFileAddon01"
            name="sampleFile"
            onChange={handleChange}
          />
          <label className="custom-file-label" htmlFor="inputGroupFile01">
            {fileName}
          </label>
        </div>
      </div>
      <input
        type="submit"
        value="Upload"
        className="btn btn-primary btn-block mt-4"
      />
    </form>
  );
};

export default UploadFile;
