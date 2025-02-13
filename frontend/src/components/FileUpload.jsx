// frontend/src/components/FileUpload.jsx
import React, { useState } from "react";

function FileUpload() {
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState(""); // Initialize message state

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    try {
      const response = await fetch("http://localhost:5000/api/files/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Handle the response if needed
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "combined.txt";
      document.body.appendChild(a);
      a.click();
      a.remove();

      // Set success message
      setMessage("Files uploaded and combined successfully!");
    } catch (error) {
      console.error("Error uploading files:", error);
      setMessage("Error uploading files: " + error.message); // Set error message
    }
  };

  return (
    <div className="container">
      <h1>FileMerge Web</h1>
      <form className="file-upload" onSubmit={handleSubmit}>
        <input type="file" multiple onChange={handleFileChange} />
        <button type="submit">Upload Files</button>
      </form>
      {message && (
        <div className={message.includes("Error") ? "error" : "message"}>
          {message}
        </div>
      )}
    </div>
  );
}

export default FileUpload;
