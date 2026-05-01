# 🚀 MySQL + Node.js Bulk Data Insertion Project

## 📌 Overview

This project demonstrates how to connect **Node.js** with **MySQL** and insert multiple records using fake data.

It uses the **faker.js** library to generate random user data and performs **bulk insertion** into a MySQL database.

---

## 🛠 Tech Stack

* Node.js
* MySQL
* mysql2 package
* faker.js

---

## 📂 Project Structure

```
├── index.js        # Main script (database connection & insertion)
├── schema.sql      # Database and table creation
├── output          # Output of query result
├── package.json
```

---

## ⚙️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Create Database

Run the SQL file:

```bash
mysql -u root -p < schema.sql
```

---

## 🧠 How It Works

* Connects to MySQL database
* Generates 100 random users using faker
* Stores data in array format
* Uses bulk insert query:

```sql
INSERT INTO users (id, name, email, password) VALUES ?
```

* Executes query and prints result

---

## 📊 Example Data Generated

* UUID (User ID)
* Username
* Email
* Password

---

## ▶️ Run Project

```bash
node index.js
```

---

## 📌 Notes

* Make sure MySQL server is running
* Update password in `index.js` if needed
* Avoid using reserved table names like `user`

---

## 🎯 Learning Outcome

* MySQL connection using Node.js
* Bulk insertion technique
* Using faker.js for test data
* Basic database schema design

---

## ⭐ Future Improvements

* Add Express API
* Create REST endpoints (GET, POST)
* Add validation
* Use environment variables (.env)

---

## 👨‍💻 Author

Yuvrajsinh Jadeja
