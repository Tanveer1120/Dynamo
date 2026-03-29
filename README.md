# Dynamo

# 🔥 Dynamic Portfolio Website (Node.js + Express + EJS)

A modern **red & black themed dynamic portfolio website** built using **Node.js, Express, and EJS templating**. This project is lightweight, beginner-friendly, and designed to be easily extendable into a full-stack application.

---

## 🚀 Features

* 🎨 Clean **Red & Black UI Theme**
* ⚡ Dynamic content rendering using **EJS**
* 📦 Projects loaded from a **JSON file (simulating a database)**
* 🧩 Modular folder structure
* 🌐 Ready for deployment (GitHub, cloud platforms)
* 💻 Beginner-friendly but scalable

---

## 📁 Project Structure

```
portfolio-site/
│── server.js              # Main backend server
│── package.json           # Dependencies & scripts
│
├── /public                # Static assets
│     └── style.css
│
├── /views                 # Frontend templates
│     └── index.ejs
│
├── /data                  # Dynamic data source
│     └── projects.json
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/portfolio-site.git
cd portfolio-site
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Server

```bash
node server.js
```

### 4. Open in Browser

```
http://localhost:3000
```

---

## 🧠 How It Works

### 🔹 Backend (Node.js + Express)

* Handles routing
* Serves static files
* Sends dynamic data to frontend using EJS

### 🔹 Frontend (EJS)

* Template engine that injects dynamic data into HTML
* Renders project cards dynamically from JSON

### 🔹 Data Layer (JSON)

* `projects.json` acts like a mini database
* Easily replaceable with MongoDB or any API later

---

## 📦 Example Dynamic Data (`projects.json`)

```json
[
  {
    "title": "Portfolio Website",
    "description": "A personal portfolio built with Node.js",
    "link": "#"
  }
]
```

---

## 🎨 UI Theme

* Background: **Dark Black (#0d0d0d)**
* Accent: **Red**
* Cards: Dark panels with red borders & glow effects
* Fully responsive layout using Flexbox

---

## 🛠️ Customization Guide

### ✏️ Change Personal Info

Edit inside `server.js`:

```js
res.render("index", {
    name: "Your Name",
    role: "Your Role",
});
```

---

### ➕ Add More Projects

Update `data/projects.json`:

```json
{
  "title": "New Project",
  "description": "Description here",
  "link": "https://github.com/your-link"
}
```

---

### 🎨 Modify Styles

Edit:

```
/public/style.css
```

---

## 🚀 Deployment

You can deploy this project on:

* Vercel (Node support via serverless)
* Render
* Railway
* Any VPS with Node.js installed

---

## 📌 Future Improvements

* 🔗 Connect to MongoDB (real database)
* 📬 Add contact form (email integration)
* 🔐 Authentication (admin dashboard)
* 🎞️ Add animations (GSAP / CSS effects)
* ⚛️ Convert frontend to React

---

## 🤝 Contributing

Pull requests are welcome!
If you'd like to improve UI, performance, or features, feel free to fork and contribute.

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Your Name**
GitHub: https://github.com/your-username

---

## ⭐ Support

If you like this project:

* ⭐ Star the repo
* 🍴 Fork it
* 📢 Share it

---

## 💬 Final Note

This project is a solid starting point for anyone looking to:

* Learn **Node.js + templating**
* Build a **portfolio quickly**
* Understand **dynamic web rendering**

You can take this from a simple portfolio → to a **full production-grade personal website**.

---
