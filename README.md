---

# **NoteBuddy**

A full-stack note-posting web application with secure authentication, cloud file storage, and a responsive UI.

---

## **1. Project Setup**


### **Frontend (client)**

```bash
cd client
npm install
npm run dev
```

### **Backend (server)**

```bash
cd server
npm install
npm run server
```

---

## **2. Modules Used**

### **Frontend**

* **react** — Core UI library for building components.
* **tailwindcss** — Utility-first CSS framework for styling.
* **vite** — Fast development build tool.
* **axios** — HTTP requests to the backend.
* **react-hot-toast** — Toast notifications.
* **react-router-dom** — Client-side routing for multiple pages.

### **Backend**

* **express** — Web framework for handling routes & APIs.
* **cors** — Enables cross-origin requests between frontend & backend.
* **cloudinary** — Stores and manages uploaded files in the cloud.
* **bcrypt** — Encrypts and compares passwords securely.
* **mongoose** — Connects and interacts with MongoDB Atlas.
* **jsonwebtoken (JWT)** – For user authentication and secure token generation/verification.
* **multer** – For handling multipart/form-data and file uploads.
* **dotenv** — Loads environment variables from `.env` files.
* **nodemon** — Automatically restarts the server on code changes (dev only).

---

## **3. Folder Structure**

```
NoteBuddy/
│
├── client/               # Frontend code (React + Tailwind)
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components for routes
│   │   ├── Context/       # Custom React state
│   │   └── libs/          # Helper functions
│   └── public/            # Static files
│
├── server/               # Backend code (Express.js)
│   ├── controllers/       # Request handling logic
│   ├── models/            # Mongoose schemas & DB models
│   ├── routes/            # API route definitions
│   ├── middlewares/       # Middleware functions (e.g., auth checks)
│   ├── libs/              # Helper scripts
│   └── uploads/           # Temporary uploaded files (if needed)
│
├── .github/               # GitHub workflows & issue templates
│
├── README.md              # Project documentation
└── package.json           # Dependencies & scripts
```

---

## **4. Contribution Guidelines**

### **Creating an Issue**

* Always describe the problem clearly.
* Assign appropriate labels (e.g., `bug`, `feature`, `enhancement`).
* Use the GitHub Issue template for consistency.

### **Working on a Feature / Fix**

1. Create a **branch linked to the issue**:

   ```bash
   git checkout -b feature/issue-<ISSUE_NUMBER>-short-description
   ```
2. Work on the branch and commit changes.

### **Creating a Pull Request (PR)**

* Link the PR to the related issue (e.g., `Closes #12`).
* Wait for the **automatic ESLint check** to pass before merging.
* PRs will not be merged unless linting passes.

---
