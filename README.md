# 🚀 User Management System (Node.js + Express + MySQL)

A full-stack **User Management System** built using **Node.js, Express, MySQL, and EJS**.
This project performs complete **CRUD operations (Create, Read, Update, Delete)** with a clean UI and RESTful routes.

---

## 📌 Features

* ✅ Add New User
* ✅ View All Users
* ✅ Edit User Details
* ✅ Delete User
* ✅ Unique ID using UUID
* ✅ Method Override (PATCH & DELETE support)
* ✅ Dynamic UI using EJS
* ✅ Clean and responsive UI with CSS

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Frontend:** EJS, HTML, CSS
* **Database:** MySQL
* **Other:** UUID, Method-Override

---

## 📂 Project Structure

```
user-management-system-nodejs/
│
├── public/
│   └── style.css
│
├── views/
│   ├── home.ejs
│   ├── show.ejs
│   ├── new.ejs
│   └── edit.ejs
│
├── index.js
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/yuvrajsinh2523/user-management-system-nodejs.git
cd user-management-system-nodejs
```

---

### 2️⃣ Install Dependencies

```
npm install
```

---

### 3️⃣ Setup MySQL Database

Create database:

```
CREATE DATABASE userdb;
```

Create table:

```
CREATE TABLE user (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(50)
);
```

---

### 4️⃣ Configure Database

Update your MySQL connection in `index.js`:

```js
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "your_password",
    database: "userdb"
});
```

---

### 5️⃣ Run Project

```
node index.js
```

👉 Open in browser:
http://localhost:8080

---

## 📸 Screenshots (Add Later)

* Home Page
* User List Page
* Add User Form
* Edit User Form

---

## 🔄 CRUD Routes

| Method | Route            | Description    |
| ------ | ---------------- | -------------- |
| GET    | `/`              | Home Page      |
| GET    | `/user`          | Show all users |
| GET    | `/user/new`      | Add user form  |
| POST   | `/user`          | Create user    |
| GET    | `/user/:id/edit` | Edit form      |
| PATCH  | `/user/:id`      | Update user    |
| DELETE | `/user/:id`      | Delete user    |

---

## ⚠️ Important Concepts Used

* RESTful Routing
* Method Override
* UUID for unique IDs
* EJS Templating
* MySQL Queries

---

## 🚀 Future Improvements

* 🔐 Password hashing (bcrypt)
* 🔑 Authentication system (Login/Signup)
* 📦 MVC folder structure
* 🎨 Better UI with Bootstrap / Tailwind

---

## 👨‍💻 Author

**Yuvrajsinh Jadeja**
GitHub: https://github.com/yuvrajsinh2523

---

## ⭐ Support

If you like this project:

👉 Star ⭐ the repository
👉 Share with others
