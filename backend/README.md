# 📂 File-Merge - Backend Documentation

## 📌 Overview

The backend of **File-Merge** is built using **Node.js** and **Express.js**. It provides an API for handling file uploads and processing multiple code files into a merged `.txt` file.

---

## 🚀 API Routes

### 🔹 File Processing Route

| Method   | Route        | Description                      |
| -------- | ------------ | -------------------------------- |
| **POST** | `/api/files` | Handles file uploads and merging |

---

## 🛠️ Dependencies

### 📦 Main Dependencies

- **cors**: Enables Cross-Origin Resource Sharing (CORS) for handling requests from different origins.
- **express**: Web framework for building the backend server.
- **multer**: Middleware for handling file uploads.

---

## 🛠️ Environment Variables

To configure the backend, create a `.env` file in the root directory and add the following:

```env
PORT=5000
```

---

## 🤝 Contributing

We welcome contributions! Fork the repository, create a new branch, and submit a **pull request** to enhance File-Merge.

Happy Coding! 🚀
