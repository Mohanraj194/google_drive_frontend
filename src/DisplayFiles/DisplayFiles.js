import React, { Fragment } from "react";
// import { toast, ToastContainer } from "react-toastify";
import PDFIMG from '../images/pdf.png'
import "./DisplayFiles.css";
const DisplayFiles = () => {
  const { files } = JSON.parse(localStorage.getItem("user"));
  let display;
  if (!files.length) {
    return <h2 className = "text-muted text-center empty">Please add some files</h2>;
  } else {
    display = files.map((file) => {
      if (file.file) {
        // console.log(file.error.code);
        return (
          <div key={file.file} className="file-box">
            <li className="file-list">
              <a href={file.location} key={file.file}>
                
                {file.location.includes('.pdf')?
                <img  src={PDFIMG} style={{width:"250px",margin:'2px'}}/>:   <img  src={file.location} style={{width:"250px",margin:'2px'}}/>
              
              }
              </a>
              <p>{`${file.file.slice(0, 5)}...${file.file.slice(
                file.file.length - 3
              )}`}</p>
            </li>
          </div>
        );
      } else {
        console.log(file)
        // toast.error("File limit exceeded");
      }
    });
  }
  return(
  <Fragment>
    <div className="display-files">{display}</div>
  </Fragment>
  )
};

export default DisplayFiles;
