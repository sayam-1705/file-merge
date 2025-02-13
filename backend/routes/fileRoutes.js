// backend/routes/fileRoutes.js
const express = require("express");
const multer = require("multer");
const { uploadFiles } = require("../controllers/fileController");

const router = express.Router();

// Setup Multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route to handle file uploads
router.post("/upload", upload.array("files"), uploadFiles);

module.exports = router;
