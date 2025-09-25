// Task 2 CRUD Operations

// 1. Find all books in a specific genre

db.books.find({ genre: 'SQL' });

// 2. Find books published after a certain year

db.books.find({ published_year: { $gt: 2015 } });

// 3. Find books by a specific author

db.books.find({ author: 'Martin Kleppmann' });

// 4. Update the price of a specific book

db.books.updateOne({ title: 'MongoDB: The Definitive Guide' }, { $set: { price: 60.0 } });

// 5. Delete a book by its title

db.books.deleteOne({ title: 'NoSQL Distilled' });

// Task 3 Advanced queries

// 1. Write a query to find books that are both in stock and published after 2010

db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

// 2. Use projection to return only the title, author, and price fields in your queries

db.books.find(
  { in_stock: true, published_year: { $gt: 2010 } },
  { title: 1, author: 1, price: 1, _id: 0 }
);

// note
// title: 1, author: 1, price: 1 → include these fields.
// _id: 0 → exclude MongoDB’s default _id.

// 3. Implement sorting to display books by price (both ascending and descending)

// a) Sort by price ascending

db.books
  .find(
    { in_stock: true, published_year: { $gt: 2010 } },
    { title: 1, author: 1, price: 1, _id: 0 }
  )
  .sort({ price: 1 });

// b) Sort by price descending

db.books
  .find(
    { in_stock: true, published_year: { $gt: 2010 } },
    { title: 1, author: 1, price: 1, _id: 0 }
  )
  .sort({ price: -1 });

// Note
// 1 = ascending, -1 = descending

// 4. Use the limit and skip methods to implement pagination (5 books per page)

// Page 1 (first 5 books):

db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 }).sort({ price: 1 }).limit(5);

// Page 2 (next 5 books):

db.books
  .find({}, { title: 1, author: 1, price: 1, _id: 0 })
  .sort({ price: 1 })
  .skip(5)
  .limit(5)

  // Page 3 (next 5):

  .skip(10)
  .limit(5);

// .limit(n) → how many results per page.

// .skip(n) → how many to jump over.
