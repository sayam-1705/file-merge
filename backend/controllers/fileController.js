// backend/controllers/fileController.js
const fs = require("fs");
const path = require("path");

// Controller to handle file uploads
const uploadFiles = (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  // Create a combined file content
  let combinedContent = "";

  req.files.forEach((file) => {
    combinedContent += `--- ${file.originalname} ---\n`;
    combinedContent += file.buffer.toString() + "\n\n";
  });

  // Define output file path
  const outputFilePath = path.join(__dirname, "../combined.txt");

  // Write the combined content to a file
  fs.writeFileSync(outputFilePath, combinedContent);

  // Send response back to the client
  res.download(outputFilePath, "combined.txt", (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error downloading the file.");
    }
    // Optionally, delete the file after download
    fs.unlinkSync(outputFilePath);
  });
};

module.exports = { uploadFiles };
