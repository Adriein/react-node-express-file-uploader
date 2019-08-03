import React from "react";

const ContentTable = ({ files }) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Img</th>
        </tr>
      </thead>
      <tbody>
        {files.map((img, index) => (
          <tr>
            <th scope="row">{index + 1}</th>
            <td>{img.fileName}</td>
            <td><img style={{ maxWidth:'50px' }} src={img.filePath} alt=""/></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContentTable;
