import React, { useState } from "react";

import UploadFile from "./UploadFile";
import ContentTable from "./ContentTable";

const MainContainer = () => {

  //Component state

  const [file, setFile] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState("Choose File");
  const [allFiles, setAllFiles] = useState([]);
  const [renderTable, setRenderTable] = useState(false);


  //Component functions

  const handleChange = event => {
    setFile(event.target.files[0]);
    setUploadedFileName(event.target.files[0].name.toLowerCase());
  };

  const uploadFile = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append('sampleFile', file);

    const res = await fetch("/upload", {
      method: "POST",
      body: formData
    });

    const { fileName, filePath } = await res.json();
  
    addNewFile({fileName, filePath});
    setRenderTable(true);   
  };

  const addNewFile = (newFile) => {
    const arrayOfFilesTmp = [...allFiles, newFile];
    setAllFiles(arrayOfFilesTmp);
    setUploadedFileName('Choose File');
  }

  

  return (
    <div id="main-container">
      <div className="row justify-content-center">
        <div className="col-6">
          <UploadFile handleChange={handleChange} uploadFile={uploadFile} fileName={uploadedFileName}/>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-6">
          {renderTable? (<ContentTable files={allFiles}/>): null}
          
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
