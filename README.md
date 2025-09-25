# MongoDB Fundamentals Assignment – Brian Ogada

This project demonstrates MongoDB fundamentals using the `plp_bookstore` database.  
It includes CRUD operations, advanced queries, aggregation pipelines, and indexing.  
All queries are saved inside **queries.js**.

---

## 📦 Files Included

- `insert_books.js` → Populates the `plp_bookstore` database with sample data
- `queries.js` → Contains all queries for:
  - Task 2: CRUD Operations
  - Task 3: Advanced Queries (filtering, projection, sorting, pagination)
  - Task 4: Aggregation Pipelines
  - Task 5: Indexing
- `README.md` → Instructions on how to run the scripts

---

## ⚙️ Prerequisites

- Node.js (v18 or higher)
- MongoDB Community Edition (local) **or** MongoDB Atlas account
- MongoDB Shell (`mongosh`) or MongoDB Compass

---

## 🚀 Setup & Running the Scripts

1. **Clone your repo**

   ```bash
   git clone <your-repo-link>
   cd <your-repo-folder>
   ```

2. **Start MongoDB** (if using local installation):

   ```bash
   mongod
   ```

3. **Insert data into `plp_bookstore`:**

   ```bash
   node insert_books.js
   ```

   This creates a `books` collection inside `plp_bookstore`.

4. **Run queries:**  
   Open **Mongo Shell** and connect to your DB:

   ```bash
   mongosh
   use plp_bookstore
   ```

   Then copy-paste queries from `queries.js`.  
   Alternatively, run the entire file with:

   ```bash
   mongosh plp_bookstore queries.js
   ```

---

## 📊 Database Details

- **Database name**: `plp_bookstore`
- **Collection**: `books`

---

## ✅ Submission Checklist

- [x] `insert_books.js` – inserts data
- [x] `queries.js` – contains all queries (CRUD, advanced, aggregation, indexing)
- [x] `README.md` – explains setup and execution
- [x] Screenshot of MongoDB Compass showing `plp_bookstore.books`

---

## 📚 Resources

- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [MongoDB University](https://university.mongodb.com/)
